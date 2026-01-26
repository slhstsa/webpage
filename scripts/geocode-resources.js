const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'GETUROWNBUM';
const resourcesPath = path.join(__dirname, '../src/data/resources.json');

function geocodeAddress(address) {
  return new Promise((resolve) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.geocod.io/v1.9/geocode?q=${encodedAddress}&api_key=${API_KEY}`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results && json.results.length > 0) {
            const result = json.results[0];
            if (result.location) {
              resolve({
                lat: parseFloat(result.location.lat),
                lng: parseFloat(result.location.lng)
              });
            } else {
              resolve(null);
            }
          } else {
            resolve(null);
          }
        } catch (error) {
          console.error(`Error parsing response for ${address}:`, error.message);
          resolve(null);
        }
      });
    }).on('error', (error) => {
      console.error(`Error geocoding ${address}:`, error.message);
      resolve(null);
    });
  });
}

async function geocodeAllResources() {
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'));
  const validResources = resources.filter(
    resource => 
      resource.address && 
      resource.address !== "Online/Multiple locations" &&
      resource.address !== "Online/Phone-based"
  );

  console.log(`Found ${validResources.length} resources with addresses to geocode...`);

  for (let i = 0; i < validResources.length; i++) {
    const resource = validResources[i];
    
    if (resource.lat && resource.lng) {
      console.log(`[${i + 1}/${validResources.length}] Skipping ${resource.name} (already geocoded)`);
      continue;
    }

    console.log(`[${i + 1}/${validResources.length}] Geocoding ${resource.name}...`);
    const coords = await geocodeAddress(resource.address);
    
    if (coords) {
      resource.lat = coords.lat;
      resource.lng = coords.lng;
      console.log(`Found: ${coords.lat}, ${coords.lng}`);
    } else {
      console.log(`Failed`);
    }

    await new Promise(resolve => setTimeout(resolve, 100));
  }

  resources.forEach(resource => {
    const geocoded = validResources.find(r => r.id === resource.id);
    if (geocoded && geocoded.lat && geocoded.lng) {
      resource.lat = geocoded.lat;
      resource.lng = geocoded.lng;
    }
  });

  fs.writeFileSync(resourcesPath, JSON.stringify(resources, null, 2));
  console.log('\nDone');
}

geocodeAllResources().catch(console.error);


import './App.css';
import Banner from './banner'
import Navigation from './navBar'
import Resources from './resource-grid/resource-grid';
import About from './about' // lowk don't know why this is showing up as an error on my side. 
                            // it works fine
function App() {
  return (
    <>
    
      <Navigation />
      
      <Banner />

      <Resources />
    
      <About />
    </>
  );
}

export default App;


import Banner from './home-page-resources/banner'; 
import Resources from './resource-grid/resource-grid';
import About from './home-page-resources/about'; 
import './home.css'
function Home(){
  return(
    <div className="home-body">
      <Banner />
      <Resources />
      <About />
    </div>
  );
}

export default Home;

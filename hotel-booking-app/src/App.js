
import './App.css';

import Card from "./components/Card";
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Imagescroll from './components/Imagescroll';
import Testimonial from './components/Testimonial';

import Banner from './components/Banner';
import image1 from './images/person5.png';
import image2 from './images/person5.png';

import SearchBar from './components/SearchBar';
import ShowFooter from './components/ShowFooter';





function App() {
  
  return (
    <div className="app">
      <Navbar/>
      <SearchBar/>
      <h1>Top Destinations </h1>
      
      <Imagescroll/>
      <Banner text="Welcome to Our Website!" backgroundColor="rgb(8 47 73)" height="400px" width="max-width" />
      <h1>Testimonials</h1>
      <section>
        <div class="grid-container">
          <div>
      <Testimonial
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={image1}
      />
      </div>
      <div>
      <Testimonial
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={image2}
      />
      </div>
      
      </div>
      </section>
      <h1>Top Deals</h1>
      <Card/>
      <ShowFooter/>
      


      
      
      
      
      
      
    </div>
  );
}

export default App;

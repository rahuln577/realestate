import Navbar from './Components/Navbar';
import Main from './Components/Main'
import Trust from './Components/Trust'
import Assist from './Section/Assist';
import Properties from './Section/Properties';
import Services from './Section/Services';
import Neighbour from './Section/Neighbour';
import Testimonial from './Section/Testimonial';
import Footer from './Section/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Trust/>
      <Assist/>
      <Properties/>
      <Services/>
      <Neighbour/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;

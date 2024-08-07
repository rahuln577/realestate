import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Listing from './Pages/Listing';
import {HashRouter,BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Section/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/listing" element={<Listing/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

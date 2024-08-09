import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Listing from './Pages/Listing';
import {HashRouter,BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Footer from './Section/Footer';
import Register from './Pages/Register';
import AddListing from './Pages/AddListing';
import Account from './Pages/Account';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/listing" element={<Listing/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/addlisting" element={<AddListing/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

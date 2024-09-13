import {lazy,Suspense} from "react"
import Navbar from './Components/Navbar';
import Loading from "./Pages/Loading";
import {Routes,Route} from 'react-router-dom'
import Footer from './Section/Footer';
import './App.css';

const Home = lazy(()=>import('./Pages/Home'))
const Listing = lazy(()=>import('./Pages/Listing'))
const Login = lazy(()=>import('./Pages/Login'))
const Register = lazy(()=>import('./Pages/Register'))
const AddListing = lazy(()=>import('./Pages/AddListing'))
const Account = lazy(()=>import('./Pages/Account'))
const EditListing = lazy(()=>import('./Pages/EditListing'))

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/listing" element={<Suspense fallback={<Loading/>}><Listing/></Suspense>}></Route>
          <Route path="/login" element={<Suspense fallback={<Loading/>}><Login/></Suspense>}></Route>
          <Route path="/register" element={<Suspense fallback={<Loading/>}><Register/></Suspense>}></Route>
          <Route path="/addlisting" element={<Suspense fallback={<Loading/>}><AddListing/></Suspense>}></Route>
          <Route path="/account" element={<Suspense fallback={<Loading/>}><Account/></Suspense>}></Route>
          <Route path="/editlisting" element={<Suspense fallback={<Loading/>}><EditListing/></Suspense>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

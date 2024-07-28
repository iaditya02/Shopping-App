
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom";



function App() {
  return (
    <div>
      <div className=' bg-slate-900 text-white'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="https://iaditya02.github.io/Shopping-App" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes> 
    </div>
  );
}

export default App;

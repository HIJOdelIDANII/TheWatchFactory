import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import {Home} from "./pages/Home/Home.jsx"
import { DevisRepar } from './pages/DevisRepar/DevisRepar.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/devis-reparation" element={<DevisRepar></DevisRepar>} ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

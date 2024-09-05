import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import {Home} from "./pages/Home/Home.jsx";
import { DevisRepar } from './pages/DevisRepar/DevisRepar.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
import{PageNotFound} from './pages/PageNotFound/PageNotFound.jsx';
import {About} from './pages/About/About.jsx';
import { Temoignages } from './pages/Temoignages/Temoignages.jsx';
import { Reparation } from './pages/Reparation/Reparation.jsx';
import { MontresVente } from './pages/MontresVente/MontresVente.jsx';
import { Contact } from './pages/Contact/Contact.jsx';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
         
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/devis-reparation" element={<DevisRepar></DevisRepar>} ></Route>
          <Route path="/reparation-montres" element={<Reparation></Reparation>}></Route>
          <Route path="/vente-montres" element={<MontresVente></MontresVente>}></Route>
          <Route path="/about" element ={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/temoignages" element={<Temoignages></Temoignages>}></Route>
          <Route path="/404" element={<PageNotFound></PageNotFound>}></Route>
          <Route path="*" element={<Navigate to="/404" replace></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

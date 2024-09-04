import "./Navbar.css"
import {Link} from "react-router-dom"
export const Navbar = ()=>{
    return(
        <div className="navbar-container">
            <Link to="/">Acceuil</Link>
            <Link to="/reparation-montres">Réparation</Link>
            <Link to="/devis-reparation">devis de réparation</Link>
            <Link to="/vente-montres">Vente de montres</Link>
            <Link to="/temoignages">Témoignages</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
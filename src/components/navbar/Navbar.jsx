import "./Navbar.css";
import {Link} from "react-router-dom";

import logo from "../../images/image.png"
export const Navbar = ()=>{
    return(
    <section className="navbar">
        <div className="navbar-container">
            
            <div className="links-container left">
                    
                <Link className="roboto-bold" to="/reparation-montres">Réparation</Link>
                <Link className="roboto-bold" to="/devis-reparation">Devis de réparation</Link>
                    
                <Link className="roboto-bold" to="/contact">Contact</Link>
            </div>
            
            <div className="logo">
                <div className="image-logo-container">
                    <Link to="/">
                    <img className="logo-image" src={logo} alt="logo"/>
                    </Link>
                </div>
                <Link className="logo-link" to="/">
                <p className ="title bentham-regular">THE WATCH FACTORY </p>
                </Link>
                <p className="slogan">swiss furniture</p>
            </div>
           
            <div className="links-container right">
                <Link className="roboto-bold" to="/vente-montres">Vente de montres</Link>
                <Link className="roboto-bold" to="/temoignages">Témoignages</Link>
                <Link className="roboto-bold" to="/about">About</Link>

            </div> 
                
            
        </div>
        <div className="toggle_button">
            <i class="fa-regular fa-bars"></i>
        </div>
        <hr></hr>
    </section>
    )
}
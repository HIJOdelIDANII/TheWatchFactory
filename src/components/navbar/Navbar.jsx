import "./Navbar.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import logo from "../../images/image.png"
export const Navbar = ()=>{
    const [toggle1,setToggle1] = useState(false);
    const handleToggle1 = (e)=>{
        e.currentTarget.blur();  // Remove focus after click
        setToggle1(!toggle1);
    }
    return(
    <section className="navbar">
        <div className="navbar-container">
            
            <div className="links-container left">
                    
                <Link className="roboto-bold" to="/reparation-montres">Réparation</Link>
                <Link className="roboto-bold" to="/devis-reparation">Devis de réparation</Link>
                    
               
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
                <div className="toggle_button">
                    <i onClick={(e)=>{handleToggle1(e)}} className="fa-solid fa-bars bars"></i>
                </div>  

            </div> 
                  
            
        </div>
        
        <div className ={`toggle-extra-information-1 ${toggle1 ? "": "no-toggle-info-1"}`}> 
            <Link  className="roboto-bold" to="about">à propos</Link>
            <Link  className="roboto-bold" to="contact">contact</Link>
        </div>
        
       
    </section>
    )
}
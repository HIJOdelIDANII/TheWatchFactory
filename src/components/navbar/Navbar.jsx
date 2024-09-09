import "./Navbar.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import logo from "../../images/image.png"
export const Navbar = ()=>{
    /* toggle1 for the pc version : clicking the three bars results in a div extra-info-1 (à propos contact) */
    /* toggle is for small tablets and smartphone to toggle the sidenavbar*/

    const [toggle1,setToggle1] = useState(false);
    const [toggle2,setToggle2] = useState(window.innerWidth  <1068? false: true);
    
    
    const handleToggle2 = (e)=>{
        setToggle2(!toggle2);
    }
    const handleToggle1 = (e)=>{
        e.currentTarget.blur();  // Remove focus after click
        setToggle1(!toggle1);
    }
    return(
    <navbar className="navbar">
        <div className = { `navbar-container ${toggle2? "": "toggle-navbar"} `}>
            
            <div className="links-container left">
                    
                <Link className="roboto-bold" to="/reparation-montres">Réparation</Link>
                <Link className="roboto-bold" to="/devis-reparation">Devis de réparation</Link>
                <Link  className=" remove-link roboto-bold" to="about">à propos</Link>
                
               
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
                <Link  className=" remove-link roboto-bold" to="contact">contact</Link>    
                
                <div className="remove-bars-1 toggle_button">
                    <i onClick={(e)=>{handleToggle1(e)}} className="fa-solid fa-bars bars"></i>
                </div>  
                <div className="remove-bars-2 toggle_button">
                    <i onClick={(e)=>{handleToggle2(e)}} className="fa-solid fa-bars bars"></i>
                </div> 

            </div> 
                  
        </div>
        <div className ={`bars-phone ${toggle2? "bars-removal": "bars"} `} >
            <i onClick={(e)=>{handleToggle2(e)}} className="fa-solid fa-bars bars"></i>
        </div>
        
        <div className ={`remove-bars-1 toggle-extra-information-1 ${toggle1 ? "": "no-toggle-info-1"}`}> 
            <Link  className="roboto-bold" to="about">à propos</Link>
            <Link  className="roboto-bold" to="contact">contact</Link>
        </div>
        
       
    </navbar>
    )
}
import "./Navbar.css"
import {Link} from "react-router-dom"
export const Navbar = ()=>{
    return(
        <div className="nav-bar-container">
            <Link to="/">Acceuil</Link>
            <Link to="/devis-reparation">devis de réparation</Link>
        </div>
    )
}
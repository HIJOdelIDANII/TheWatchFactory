import "./DevisRepar.css"
import image1 from "../../images/watch-devis.png"
export const DevisRepar =  () => {
    return(
        <div className="watch-repair-container">
            <div className="watch-repair-main-container">
                <h1 className="title-repair-container">Service de Réparation de Montres</h1>
                <p className="description">
                The Watch Factory propose des réparations de montres de haute qualité pour toutes les marques, y compris TAG Heuer, Rolex, Omega, et bien plus.  
                Que vous ayez besoin d'un simple remplacement de batterie ou d'une restauration complète, faites confiance à nos maîtres horlogers pour offrir un service conforme aux standards suisses.
                </p>
                <button className="quote-button">Obtenir un Devis</button>
            </div>
            
            <div className="watch-repair-image-container">
                <img src={image1} className="watch-repair-image" alt="Mouvement de Montre" />
            </div>
            
        </div>
    
    )
}

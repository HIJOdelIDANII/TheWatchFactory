import "./DevisRepar.css"
import image1 from "../../images/watch-devis.png"
import image2 from "../../images/Expert-Watch-Repair.png"
import {Feedback} from "../../components/FeedBack/Feedback.jsx"
import {Footer} from "../../components/footer/Footer.jsx"
export const DevisRepar =  () => {
    return(
        <div>
        <div className="watch-repair-container">
            <div className="watch-repair-inner-container">
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
            <div className="watch-repair-details-container">
                <img src={image2} className="image-repair-details" alt="image-repair-detail"/>
                <div className="description-repair-details">
                    <div className="small-title-description">Quatre décennies d'expérience</div>
                    <div className="title-description">Service d'expertise en réparation de montres</div>
                    <p className="test-description">
                        The Watch Factory est reconnue pour son expertise exceptionnelle dans la réparation de montres. Depuis plus de 40 ans, The Watch Factory propose des services de réparation en atelier et par correspondance à travers le Royaume-Uni, prenant en charge des modèles de montres de luxe, vintage et contemporains. 
                        <br></br><br></br>
                        Si votre montre est endommagée ou présente un dysfonctionnement, nos techniciens certifiés diagnostiquent rapidement le problème et fournissent un devis gratuit, sans engagement. 
                        Pour une réparation rapide, rendez-vous dans nos centres de service situés à Tring ou à Thame pour une évaluation immédiate. Sinon, profitez de notre service postal exceptionnel pour une réparation simple et sans traces.
                    </p>
                    <button className="quote-button contact-button">Contact Us</button>
                    
                </div>
            </div>
            
        </div>
        <Feedback></Feedback>
        <Footer></Footer>
        </div>
        
    
    )
}

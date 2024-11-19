import "./DevisRepar.css"
import image1 from "../../images/watch-devis.png"
export const DevisRepar =  () => {
    let ArrayRatings = [{name:"ahmed",rating:"5"},{name:"ahmed",rating:"5"},{name:"ahmed",rating:"5"},
        {name:"ahmed",rating:"5"},{name:"ahmed",rating:"5"}

    ];
    
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
            <div className="watch-repair-details">
                <img className="image-repair-details" alt="image-repair-detail"/>
                <p className="description-repair-details">
                    The Watch Factory est reconnue pour son expertise exceptionnelle dans la réparation de montres.
                     Grâce à des années d'expérience et à un savoir-faire unique, notre équipe restaure et entretient vos garde-temps avec précision et soin,
                     garantissant leur durabilité et leur performance.
                </p>
            </div>
            <div className="watch-repair-feedback">
                {
                    ArrayRatings.forEach((val)=> 
                        {return(
                        <div className="rating-container">
                            <p className="name-rating"> {val.name}</p>
                            <div className="rating-rating"> </div>
                        </div>)}
                    
                        
                    )
                }
            </div>

        </div>
        
    
    )
}

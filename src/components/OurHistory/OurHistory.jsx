import "./OurHistory.css"
import image1 from "../../images/watcher-aesthetic.jpg"
import image2 from "../../images/cartier-tank-solo-watch.jpg"
export const OurHistory = () =>{

    return(
    <div className="History-container">
        <div className="History-Title">
            <p className="notre-histoire">Notre Histoire</p>
            <p className="ilya">Établi en 1999 , Plus de 25 ans d'expérience dans le domaine de l'horlogerie.</p>
        </div>
        <hr className="line"></hr>
        <div className="Hist-mini-cont History-part1">
            <p className="Hist-text text-part1">
                The <span className="marked-span-1">Watch Factory</span> est une entreprise indépendante de réparation de montres avec Neira Rais, la propriétaire et technicienne entièrement formée, offrant des réparations et des services de haute qualité aux clients,
                 avec un service postal de retour où qu'ils se trouvent en Tunisie.<br></br><br></br>

                Nous sommes entièrement formés pour réparer toutes les marques de montres de qualité, y compris<span className="marked-span-2"> Rolex, Tag Heuer, Omega, Seiko, Citizen, Gucci et Raymond Weil. </span>
                Veuillez consulter notre page dédiée aux marques de montres pour une liste complète.<br></br><br></br>

                Si vous souhaitez que votre montre soit réparée dans les plus brefs délais, rendez-vous à notre centre de services de montres situé en centre-ville de Tunis pour une <span className="marked-span-1">évaluation immédiate</span>. Dans la plupart des cas,
                 
            </p>
             
            <img className="Hist-img image-part1" alt="part1" src={image2}></img>
        </div>
        <div className="Hist-mini-cont History-part2">
            <img className="Hist-img image-part2" alt="part2" src={image1}></img>
            <p className="Hist-text text-part2">
                <span className="marked-span-1">Horaires<br></br></span>

                <span className="marked-span-2 numbers">Lundi : 08:00 - 18:00<br></br></span>
                <span className="marked-span-2 numbers">Mardi : 08:00 - 18:00<br></br></span>
                <span className="marked-span-2 numbers">Mercredi : 08:00 - 18:00<br></br> </span>
                <span className="marked-span-2 numbers">Jeudi : 08:00 - 18:00<br></br> </span>
                <span className="marked-span-2 numbers">Vendredi : 08:00 - 18:00<br></br> </span>
                <span className="marked-span-2 numbers">Samedi : 08:00 - 18:00<br></br></span>
                <span className="marked-span-2 numbers">Dimanche : FERMÉ<br></br></span>
                <br></br><br></br>
                Pour toute question ou demande de renseignements, vous pouvez nous appeler au <span className="marked-span-1">(+216) 22 662 493 </span>ou nous envoyer un email à <span className="marked-span-2">thewatchfactory11@gmail.com</span>.
                <br></br><br></br>
                Nous sommes situés au Colisée Tunis Centre Ville, Tunis, Tunisie.
            </p>
            
        </div>

    </div>)
}
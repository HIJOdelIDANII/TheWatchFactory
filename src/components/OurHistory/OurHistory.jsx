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
        <div className="Hist-mini-cont History-part1">
            <p className="Hist-text text-part1">
                The Watch Factory est une entreprise indépendante de réparation de montres avec Neira Rais, la propriétaire et technicienne entièrement formée, offrant des réparations et des services de haute qualité aux clients,
                 avec un service postal de retour où qu'ils se trouvent en Tunisie.<br></br><br></br>

                Nous sommes entièrement formés pour réparer toutes les marques de montres de qualité, y compris Rolex, Tag Heuer, Omega, Seiko, Citizen, Gucci et Raymond Weil. 
                Veuillez consulter notre page dédiée aux marques de montres pour une liste complète.<br></br><br></br>

                Si vous souhaitez que votre montre soit réparée dans les plus brefs délais, rendez-vous à notre centre de services de montres situé en centre-ville de Tunis pour une évaluation immédiate. Dans la plupart des cas,
                 nous remplacerons les piles de montres et effectuerons l'étanchéité pendant que vous attendez.
                 Nous effectuons presque toutes les autres réparations de montres sous 10 jours. Les réparations mineures sont généralement terminées en 24 heures.
            </p> 
            <img className="Hist-img image-part1" alt="part1" src={image2}></img>
        </div>
        <div className="Hist-mini-cont History-part2">
            <p className="Hist-text text-part2">
                Horaires<br></br><br></br>

                Lundi : 08:00 - 18:00<br></br>
                Mardi : 08:00 - 18:00<br></br>
                Mercredi : 08:00 - 18:00<br></br>
                Jeudi : 08:00 - 18:00<br></br>
                Vendredi : 08:00 - 18:00<br></br>
                Samedi : 08:00 - 18:00<br></br>
                Dimanche : FERMÉ<br></br>
                <br></br><br></br>
                Pour toute question ou demande de renseignements, vous pouvez nous appeler au (+216) 22 662 493 ou nous envoyer un email à thewatchfactory11@gmail.com.
                <br></br><br></br>
                Nous sommes situés au Colisée Tunis Centre Ville, Tunis, Tunisie.
            </p>
            <img className="Hist-img image-part2" alt="part2" src={image1}></img>
        </div>

    </div>)
}
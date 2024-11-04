import "./Reparation.css"
import { WatchRepairTab } from "../../components/WatchRepairTab/WatchRepairTab.jsx"
import image1 from "../../images/shutterstock.jpg"
import balmainSwiss from "../../images/brands-images/Balmain-Swiss-Watches.jpg";
import cartier from "../../images/brands-images/Cartier-1.jpg";
import certina from "../../images/brands-images/Certina-Watches.jpg";
import hamilton from "../../images/brands-images/Hamilton-Watches.jpg";
import longines from "../../images/brands-images/Longines-1.jpg";
import mido from "../../images/brands-images/Mido-Watches.jpg";
import omega from "../../images/brands-images/Omega-1.jpg";
import rado from "../../images/brands-images/Rado-Watches.jpg";
import tag from "../../images/brands-images/Tag-1.jpg";
import tissot from "../../images/brands-images/Tissot-1.jpg";
import zenith from "../../images/brands-images/Zenith-Watches.jpg";
import {Footer} from '../../components/footer/Footer.jsx'
export const Reparation = ()=>{
    return(
        <>
        <div className="reparation-container">
            <div className="menu-image-container">
                <img className="menu-image" src={image1} alt="watch-image"/>
            </div>
            <WatchRepairTab></WatchRepairTab>
            <div className="reparation-description-container">
                <div className="display-brands ">
                    <div className="display-brands-title">
                    Marques populaires que nous sommes autorisés à réparer
                    </div>
                    <div className="brands-images">
                        <img src={balmainSwiss} alt="Balmain Swiss Watches" />
                        <img src={cartier} alt="Cartier Watches" />
                        <img src={certina} alt="Certina Watches" />
                        <img src={hamilton} alt="Hamilton Watches" />
                        <img src={longines} alt="Longines Watches" />
                        <img src={mido} alt="Mido Watches" />
                        <img src={omega} alt="Omega Watches" />
                        <img src={rado} alt="Rado Watches" />
                        <img src={tag} alt="Tag Watches" />
                        <img src={tissot} alt="Tissot Watches" />
                        {/* <img src={zenith} alt="Zenith Watches" /> */}
                    </div>
                    
                </div>
            

            </div>

        </div>
        <Footer></Footer>
        </>
    )
}
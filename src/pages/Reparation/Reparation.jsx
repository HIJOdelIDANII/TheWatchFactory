import "./Reparation.css"
import { WatchRepairTab } from "../../components/WatchRepairTab/WatchRepairTab.jsx"
import image1 from "../../images/shutterstock.jpg"
export const Reparation = ()=>{
    return(
        <div className="reparation-container">
            <div className="menu-image-container">
                <img className="menu-image" src={image1} alt="watch-image"/>
            </div>
            <WatchRepairTab></WatchRepairTab>
            <div className="reparation-description-container">
                <div className="description-1 desc">
                    <div className="text-1">

                    </div>
                    
                </div>
                <div className="description-2 desc">
                    <div className="text-2">

                    </div>
                </div>

            </div>

        </div>
    )
}
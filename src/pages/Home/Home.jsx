import "./Home.css"
import {ImageSlider} from "../../components/Slider/Slider.jsx"
import {OurHistory} from "../../components/OurHistory/OurHistory.jsx"
import {Footer} from '../../components/footer/Footer.jsx'
import {WatchRepairTab} from "../../components/WatchRepairTab/WatchRepairTab.jsx"
export const Home = ()=>{
    return(
        <div className="home-container">
            <ImageSlider></ImageSlider>
            <WatchRepairTab></WatchRepairTab>
            <OurHistory></OurHistory>
            <Footer></Footer>
        </div>
    )
}
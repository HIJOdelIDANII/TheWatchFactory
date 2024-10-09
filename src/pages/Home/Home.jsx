import "./Home.css"
import {ImageSlider} from "../../components/Slider/Slider.jsx"
import {OurHistory} from "../../components/OurHistory/OurHistory.jsx"
export const Home = ()=>{
    return(
        <div className="home-container">
            <ImageSlider></ImageSlider>
            <OurHistory></OurHistory>
            <div>Hello it's working here</div>
        </div>
    )
}
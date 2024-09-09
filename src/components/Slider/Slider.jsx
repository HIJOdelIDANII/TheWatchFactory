import "./Slider.css"
import {useState} from 'react';
import img1 from "../../images/omega.jpg"
import img2 from "../../images/tissot.jpg"
import img3 from "../../images/watchrepair1.jpg"
import img4 from "../../images/watchrepair2.jpg"
const slideImages = [
    {  url: img1,caption1: 'Techniciens Horlogers Experts',caption2:'Experience, Talent, et Perfection'},
    {  url: img4,caption1: 'Plus de 400 Clients Satisfaits en 2023',caption2:'Rejoignez-les et Découvrez un Service de Qualité, Rapide et Fiable'},
    {  url: img3,caption1: 'Réparations sur Site',caption2:'Nous Venons à Vous pour Réparer Votre Montre sans Vous Déplacer'},
    {  url: img2,caption1: 'Réparations Précises, Service Rapide',caption2:'Réparations Horlogères Expert avec une Rapidité et Précision Inégalées'}
    
];

export const ImageSlider = ()=>{
    const [current,setCurrent] = useState(1);
    const showImage = ()=>{
        const image = slideImages[current];
        if(image){
           return(<img src={`${slideImages[current].url}`} alt={current}></img>); 
        }
        return(<h1>notfound</h1>)
    }
    const plusSlides = (x)=>{
        
        if (x == 1){
            if (current < slideImages.length){
                setCurrent(1+current);}

            else {
                setCurrent(x)
            }
        }
        else {
            if(current>1){
                setCurrent(current-1)
            }
            else(setCurrent(slideImages.length))
        }
        
    }
    return (
        <div className="ImageSlider-container">
            <div className = "slideshow-container">
                <div className="show-image" style={{backgroundImage:`url(${(slideImages[current-1]).url})`,height:"100%"}}>
                    <div className="dots">
                        <div className={`dot ${current===1?"dot-selected":""}`} onClick={()=>setCurrent(1)}></div>
                        <div className={`dot ${current===2?"dot-selected":""}`} onClick={()=>setCurrent(2)}></div>
                        <div className={`dot ${current===3?"dot-selected":""}`} onClick={()=>setCurrent(3)}></div>
                        <div className={`dot ${current===4?"dot-selected":""}`} onClick={()=>setCurrent(4)}></div>
                    </div>
                </div>
                <span className="prev" onClick={()=>plusSlides(-1)}>&#10094;</span>
                <span className="next" onClick={()=>plusSlides(1)}>&#10095;</span>
            </div>   
        </div>
    )
}

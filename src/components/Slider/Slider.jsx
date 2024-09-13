import "./Slider.css"
import {useState ,useEffect} from 'react';
import img1 from "../../images/omega.jpg"
import img2 from "../../images/tissot.jpg"
import img3 from "../../images/watchrepair1.jpg"
import img4 from "../../images/watchrepair2.jpg"
const slideImages = [
    {  url: img1,caption1: 'Techniciens Horlogers Experts',caption2:'Experience, Talent, et Perfection'},
    {  url: img4,caption1: 'Plus de 350 Clients Satisfaits en 2024',caption2:'Découvrez un Service de Qualité, Rapide et Fiable'},
    {  url: img3,caption1: 'Réparations sur Site',caption2:'Réparez Votre Montre sans Vous Déplacer'},
    {  url: img2,caption1: 'Réparations Précises, Service Rapide',caption2:'Réparations Horlogères Expert'}
    
];

export const ImageSlider = () => {
    const [current, setCurrent] = useState(1);
  
    const plusSlides = (x) => {
      setCurrent((prev) => {
        const next = prev + x;
        return next > slideImages.length ? 1 : next < 1 ? slideImages.length : next;
      });
    };
  
    useEffect(() => {
      const interval = setTimeout(() => {
        plusSlides(1);
      }, 5000); 
  
      return () => clearTimeout(interval);
    }, [current]);
  
    return (
      <div className="ImageSlider-container">
        <div className="slideshow-container">
          {slideImages.map((slide, index) => (
            <div
              key={index}
              className={`show-image ${current === index + 1 ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.url})` }}
            >
                <div className="caption-container">
                    <div className="caption caption1">{slide.caption1}</div>
                    <div className="caption caption2">{slide.caption2}</div>
                </div>
            </div>
          ))}
  
          <div className="button-prev-next">
            <span className="prev" onClick={() => plusSlides(-1)}>&#10094;</span>
            <span className="next" onClick={() => plusSlides(1)}>&#10095;</span>
          </div>
  
          <div className="dots-container">
            {slideImages.map((_, index) => (
              <div
                key={index}
                className={`dot ${current === index + 1 ? 'dot-selected' : ''}`}
                onClick={() => setCurrent(index + 1)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
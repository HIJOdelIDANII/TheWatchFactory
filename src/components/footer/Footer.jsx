import "./Footer.css"
import institute_image from "../../images/Horological_Institute.png"
export const Footer = () =>{
    return(
    <div className="footer">
        <div class="footer-content">
        <div class="footer-text">
            <h2>Accredited by the British Horological Institute</h2>
            <p>
                The Watch Factory are Members of the BHI and have proven to us that their horological 
                skills and knowledge are advanced enough to have gained accreditation.
            </p>
        </div>
        <div class="footer-logo">
            <img src={institute_image} alt="Coat of Arms" />
        </div>
    </div>
    </div>
    )
}
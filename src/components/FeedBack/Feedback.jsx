import './Feedback.css'
import { useEffect, useState } from "react";
import trustpilot from "./Trustpilot2.svg"
export const Feedback = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const ArrayRatings = [
        { name: "Ahmed", rating: "5", comment: "Excellent service!" },
        { name: "John", rating: "4", comment: "Very professional and timely." },
        { name: "Sarah", rating: "5", comment: "Highly recommended!" },
        { name: "Mia", rating: "3", comment: "Good but could improve." },
        { name: "Liam", rating: "4", comment: "Great communication." },
        { name: "Sophia", rating: "5", comment: "Outstanding experience." },
        { name: "Ahmed", rating: "5", comment: "Excellent service!" },
        { name: "John", rating: "4", comment: "Very professional and timely." },
        { name: "Sarah", rating: "5", comment: "Highly recommended!" },
        { name: "Mia", rating: "3", comment: "Good but could improve." },
        { name: "Liam", rating: "4", comment: "Great communication." },
        { name: "Sophia", rating: "5", comment: "Outstanding experience." },
    ];

    // Automatically change slides every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(ArrayRatings.length / 3));
        }, 4000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [ArrayRatings.length]);

    const slidesToShow = 3; // Number of feedbacks to show per slide
    const startIndex = currentSlide * slidesToShow;
    const visibleFeedbacks = ArrayRatings.slice(startIndex, startIndex + slidesToShow);

    return (
        <div className="watch-repair-feedback">
            <h2 className="feedback-title">Excellent</h2>
            <div className="trustpilot-badge">
                <img src={trustpilot} alt="Trustpilot" />
            </div>
            <div className="feedback-carousel">
                <div className="feedback-grid">
                    {visibleFeedbacks.map((val, index) => (
                        <div key={index} className="feedback-card">
                            <div className="rating-stars">
    {Array.from({ length: Number(val.rating) }).map((_, index) => (
        <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="custom-star"
        >
           
            <polygon
                fill="#00B67A" /* Green color */
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            />
        </svg>
    ))}
</div>



                            <p className="feedback-comment">
                                {val.comment || "Excellent service and very professional."}
                            </p>
                            <p className="customer-name">{val.name}</p>
                            <p className="feedback-date">2 months ago</p>
                        </div>
                    ))}
                </div>
                <div className="carousel-dots">
                    {Array.from({ length: Math.ceil(ArrayRatings.length / slidesToShow) }).map((_, dotIndex) => (
                        <span
                            key={dotIndex}
                            className={`dot ${dotIndex === currentSlide ? "active" : ""}`}
                            onClick={() => setCurrentSlide(dotIndex)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};


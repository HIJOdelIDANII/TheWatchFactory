import './Feedback.css'
import { useEffect, useState } from "react";

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
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Trustpilot_star_logo.svg" alt="Trustpilot" />
            </div>
            <div className="feedback-carousel">
                <div className="feedback-grid">
                    {visibleFeedbacks.map((val, index) => (
                        <div key={index} className="feedback-card">
                            <div className="rating-stars">
                                {"⭐".repeat(Number(val.rating))}
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


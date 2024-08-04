import React, { useState } from 'react';
import ImgItem from './imgItem';
import './imageSlider.css';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const images = [
        { src: 'image1.jpg', title: 'Image 1' },
        { src: 'image2.jpg', title: 'Image 2' },
        { src: 'image3.jpg', title: 'Image 3' },
        { src: 'image4.jpg', title: 'Image 4' }
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slider-container">
            <button className="prev-button" onClick={handlePrevClick}>&#60;</button>
            <div className="slider">
                <div className="slider-items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <ImgItem key={index} src={image.src} title={image.title} />
                    ))}
                </div>
            </div>
            <button className="next-button" onClick={handleNextClick}>&#62;</button>
        </div>
    );
};

export default ImageSlider;

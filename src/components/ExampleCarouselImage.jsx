import React from 'react';
import pic1 from '../images/1.jpeg';
import pic2 from '../images/2.png';
import pic3 from '../images/3.png';
import pic4 from '../images/4.png';
import pic5 from '../images/5.png';

const images = [pic1, pic2, pic3, pic4, pic5];

const ExampleCarouselImage = ({ text, index = 0 }) => {
    const imageIndex = index % images.length;

    return (
        <div
            style={{
                height: '400px',
                background: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '5px 5px 0 0',
            }}
        >
            <img
                src={images[imageIndex]}
                alt={text}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    boxShadow: '0px -5px  #4B9595, 5px 0px #4B9595',
                    // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    // borderRadius: '8px',
                }}
            />
        </div>
    );
};

export default ExampleCarouselImage;
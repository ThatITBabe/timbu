import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FurnitureCategoryButtons = () => {
    const categories = [
        'Office Furnitures',
        'Workspace',
        'Kitchen',
        'Bedroom',
        'Sitting room',
        'Lounge'
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const buttonStyle = {
        border: '1px solid rgba(37, 77, 77, 0.8)',
        color: 'rgba(37, 77, 77, 0.8)',
        background: 'transparent',
        transition: 'all 0.3s',
    };

    const activeButtonStyle = {
        ...buttonStyle,
        background: 'rgba(37, 77, 77, 0.8)',
        color: 'white',
    };

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="container mt-3">
            <div className="d-flex flex-wrap justify-content-start gap-2">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className="btn rounded-pill"
                        style={index === activeIndex ? activeButtonStyle : buttonStyle}
                        onClick={() => handleClick(index)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FurnitureCategoryButtons;
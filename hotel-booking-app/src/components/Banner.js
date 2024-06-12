import React from 'react';

const Banner = ({ text, backgroundColor }) => {
    const bannerStyle = {
        backgroundColor: backgroundColor,
        padding: '20px',
        color: '#fff',
        textAlign: 'center',
    };

    return (
        <div className="banner" style={bannerStyle}>
            <h2>{text}</h2>
        </div>
    );
};

export default Banner;

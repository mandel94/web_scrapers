import React from 'react';
import styles from './logo.module.css';

// Define TypeScript for Logo. Logo takes an image src code as a prop


// Define Logo function

const Logo: React.FC = (src) => {
    return (
        <div className="logo">
            <img src='./images/Color logo with background.png' alt="Logo" className={styles['logo-image']} />
        </div>
    );
};

export default Logo;
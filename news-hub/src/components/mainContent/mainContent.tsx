import React from 'react';

const MainContent: React.FC = () => {
    // Create random div elements, setting width and height to random values
    const divs = [];
    for (let i = 0; i < 10; i++) {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)})`;
        divs.push(
            <div
                key={i}
                style={{
                    width: Math.floor(Math.random() * 100) + 'px',
                    height: Math.floor(Math.random() * 100) + 'px',
                    backgroundColor: randomColor,
                    margin: '5px',
                }}
            ></div>
        );
    }
    // Return all the divs to render
    return <div>{divs}</div>;
}

export default MainContent;
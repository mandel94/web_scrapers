import React, { ReactNode } from "react";   


interface Content {
    children: ReactNode | ReactNode[];
}

const Content: React.FC<Content> = ({ children }) => {
    return (
        <div className='main-content'>
            {children}
        </div>
    );
}

export default Content;
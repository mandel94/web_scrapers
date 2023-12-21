// https://www.freecodecamp.org/news/context-api-in-react/

import { createContext, useState, useContext } from 'react';


enum Layouts {
    sidebar = "SIDEBAR",
    navbar = "NAVBAR",
}

type SayALayout = keyof typeof Layouts;


const layoutContext = createContext(useState("sidebar"));

export function LayoutProvider({ children }) {
    const [layout, setLayout] = useState<SayALayout>("sidebar");

    return (
        <layoutContext.Provider value={[ layout, setLayout ]}>
            {children}
        </layoutContext.Provider>
    )
}

export function useLayoutContext() {
    return useContext(layoutContext);
}
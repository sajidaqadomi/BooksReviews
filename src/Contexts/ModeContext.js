import React, { createContext, useState } from 'react'

export const ModeContext = createContext()

const ModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState({ nonfiction: 'medLight', fiction: 'dark', children: 'medLight', self_improvement: 'dark' });

    return (
        <ModeContext.Provider value={{ mode }}>
            {children}
        </ModeContext.Provider>
    )
}

export default ModeContextProvider
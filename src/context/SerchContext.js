import { createContext, useState } from "react";
import React from 'react';
export const searchContext  = createContext()
function SerchContext({children}) {
    const [searchvalue,setSearchvalue] = useState('')
    return (
        <searchContext.Provider value={{searchvalue,setSearchvalue}} >
            {children}
        </searchContext.Provider>
    );
}

export default SerchContext;
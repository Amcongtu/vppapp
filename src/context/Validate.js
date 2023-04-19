import { createContext, useState } from "react";
import React from 'react';
export const validateContext  = createContext()
function ValidateContext({children}) {
    const [sdtValue,setSDTValue] = useState("")
    const [dcValue,setDcValue] = useState("")
    const [tenValue,setTenValue] = useState("Tên khách hàng")
    return (
        
        <validateContext.Provider value={{sdtValue,setSDTValue,dcValue,setDcValue,tenValue,setTenValue}}>
            {children}
        </validateContext.Provider>
    );
}

export default ValidateContext;



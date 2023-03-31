import React from 'react';
import SerchContext from './SerchContext';
import CartContext from "./CartContext";

function RootContext({children}) {
    return (
        <div>

            <SerchContext>
        <CartContext>

                {children}
        </CartContext>

            </SerchContext>
        
        </div>
    );
}

export default RootContext;
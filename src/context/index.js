import React from 'react';
import SerchContext from './SerchContext';
import CartContext from "./CartContext";
import Validate from './Validate';

function RootContext({children}) {
    return (
        <div>

            <SerchContext>
                <CartContext>
                    <Validate>
                {children}
                    </Validate>
                </CartContext>

            </SerchContext>
        
        </div>
    );
}

export default RootContext;
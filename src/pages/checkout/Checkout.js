import React, { useContext, useEffect } from 'react';
import BreadCrumb from '../../components/main/BreadCrumb';
import CheckoutDetails from '../../components/checkout/CheckoutDetails';
import { cartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
function Checkout(props) {
    const { getTotalItems } = useContext(cartContext);
    const check = useNavigate()
    useEffect(()=>{
    
    if(Number(getTotalItems())===0){  
            check("/gio-hang")
        }
    
    },[])
   
  
        return (
            <div>
                <BreadCrumb/>
                <CheckoutDetails/>
            </div>
        );
    
   
}

export default Checkout;
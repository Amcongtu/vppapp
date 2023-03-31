import React from 'react';
import BreadCrumb from '../../components/main/BreadCrumb';
import CartDetail from './../../components/cart/CartDetail';

function Cart(props) {
    return (
        <div>
            <BreadCrumb/>
            <CartDetail/>
        </div>
    );
}

export default Cart;
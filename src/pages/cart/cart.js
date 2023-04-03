import React from 'react';
import BreadCrumb from '../../components/main/BreadCrumb';
import CartDetail from './../../components/cart/CartDetail';
import CartControl from '../../components/cart/CartControl';

function Cart(props) {
    // const {cartQuantity } = useContext(cartContext); // lấy hàm addToCart từ context

    return (
        <div>
            <BreadCrumb/>
            <CartDetail/>
            <CartControl/>
        </div>
    );
}

export default Cart;
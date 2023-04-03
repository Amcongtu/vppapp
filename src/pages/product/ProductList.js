import React from 'react';
// import BreadCrumb from '../../components/main/BreadCrumb';
import SliderProduct from '../../components/product/SliderProduct';
import Product from '../../components/product/Product';

function ProductList(props) {
    return (
        <div>
            {/* <BreadCrumb/> */}
            <SliderProduct/>
            <Product/>
        </div>
    );
}

export default ProductList;
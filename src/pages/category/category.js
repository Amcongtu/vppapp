import React from 'react';
import Introduce from '../../components/category/Introduce';
import Propose from '../../components/category/Propose';
import BreadCrumb from '../../components/main/BreadCrumb';
import ProductCategory from './../../components/category/ProductCategory';

function category(props) {
    return (
        <div>
            <BreadCrumb/>
            <Propose/>
            <Introduce/>
            <ProductCategory/>
        </div>
    );
}

export default category;
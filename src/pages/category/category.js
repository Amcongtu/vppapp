import React from 'react';
import Introduce from '../../components/category/Introduce';
import Propose from '../../components/category/Propose';
import BreadCrumb from '../../components/main/BreadCrumb';
import ProductCategory from './../../components/category/ProductCategory';
import { data } from '../../data/dataProducts.js';
import dataCategory from './../../data/dataCategory';

function category(props) {
    return (
        <div>
            <BreadCrumb/>
            <Propose data={dataCategory}/>
            <Introduce/>
            <ProductCategory data={data}/>
        </div>
    );
}

export default category;
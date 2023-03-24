import React from 'react';
import Category from '../../components/home/Category';
import BreadCrumb from '../../components/main/BreadCrumb';
import dataCategory from './../../data/dataCategory';

function product(props) {
    return (
        <div>
            <BreadCrumb/>
            <Category data={dataCategory}/>
        </div>
    );
}

export default product;
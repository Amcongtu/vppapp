import React from 'react';
import PopularSearch from '../../components/home/PopularSearch.js';
import Slider from '../../components/home/Slider.js';
import Category from './../../components/home/Category';
import CardProduct from './../../components/home/CardProduct';
import { data } from '../../data/dataProduct.js';
import dataCategory from './../../data/dataCategory';

function home(props) {
    return (
        <div>
            <Slider/>
            <Category data={dataCategory}/>
            <PopularSearch/>
            <CardProduct data={data}/>
        </div>
    );
}

export default home;
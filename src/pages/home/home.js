import React from 'react';
import PopularSearch from '../../components/home/PopularSearch.js';
import Slider from '../../components/home/Slider.js';
import Category from './../../components/home/Category';
import CardProduct from './../../components/home/CardProduct';

function home(props) {
    return (
        <div>
            <Slider/>
            <Category/>
            <PopularSearch/>
            <CardProduct/>
        </div>
    );
}

export default home;
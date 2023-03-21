import React from 'react';
import PopularSearch from '../../components/home/PopularSearch.js';
import Slider from '../../components/home/Slider.js';
import Category from './../../components/home/Category';

function home(props) {
    return (
        <div>
            <Slider/>
            <Category/>
            <PopularSearch/>
        </div>
    );
}

export default home;
import React, { useEffect } from 'react';
import PopularSearch from '../../components/home/PopularSearch.js';
import Slider from '../../components/home/Slider.js';
import Category from './../../components/home/Category';
import CardProduct from './../../components/home/CardProduct';
import { data } from '../../data/dataProducts.js';
import dataSearch from './../../data/dataPopularSearch';
import { useState } from 'react';

function Home(props) {
    const [dataCategory, setDatacategory] = useState([])
    useEffect(() => {
        const fetchCategory = async () => {
          try {
            const response = await fetch(`http://localhost:8800/api/category/`);
            const data = await response.json();
            setDatacategory(data)
          } catch (error) {
            throw error
          }
        }
        fetchCategory();
      }, []);
      
    return (
        <div>
            <Slider/>
            <Category data={dataCategory}/>
            <PopularSearch data={dataSearch}/>
            <CardProduct data={data}/>
        </div>
    );
}

export default Home;
import React, { useEffect } from 'react';
import PopularSearch from '../../components/home/PopularSearch.js';
import Slider from '../../components/home/Slider.js';
import Category from './../../components/home/Category';
import CardProduct from './../../components/home/CardProduct';

import dataSearch from './../../data/dataPopularSearch';
import { useState } from 'react';

function Home(props) {
    const [dataCategory, setDatacategory] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
          try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/category/`);
            const data = await response.json();
            setDatacategory(data)
          } catch (error) {
            throw error
          }
        }
        fetchCategory();
      }, []);
    // dataCategory[0]._id
    return (
        <div>
            <Slider/>
            <Category data={dataCategory}/>
            <PopularSearch data={dataSearch}/>
            {dataCategory.map((item,index)=>(
              <CardProduct data={item} key={index}/>
            ))}
        </div>
    );
}

export default Home;
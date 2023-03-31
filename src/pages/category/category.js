import React, { useEffect } from 'react';
import Introduce from '../../components/category/Introduce';
import Propose from '../../components/category/Propose';
import BreadCrumb from '../../components/main/BreadCrumb';
import ProductCategory from './../../components/category/ProductCategory';
import { data } from '../../data/dataProducts.js';
import { useState } from 'react';

function Category(props) {
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

            <BreadCrumb/>
            <Propose data={dataCategory}/>
            <Introduce/>
            <ProductCategory data={data}/>
        </div>
    );
}

export default Category;
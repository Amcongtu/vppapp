import React, { useEffect } from 'react';
import Introduce from '../../components/category/Introduce';
import Propose from '../../components/category/Propose';
import BreadCrumb from '../../components/main/BreadCrumb';
import ProductCategory from './../../components/category/ProductCategory';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Category(props) {
    const [dataCategory, setDatacategory] = useState([])
    const [dataCardProduct,setDataCartProduct] = useState([])
    const urlName = useParams();
    console.log(urlName)
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
      useEffect(()=>{
        const handlerGetData = async()=>{
              const res = await fetch(`${process.env.REACT_APP_SERVER}/category/${urlName.id}/products`)
              const data = await res.json()
              setDataCartProduct(data)
        }
        // return ()=>handlerGetData()
        handlerGetData()
      },[urlName.id])
    return (
        <div>

            <BreadCrumb/>
            <Propose data={dataCategory}/>
            <Introduce/>
            <ProductCategory data={dataCardProduct}/>
        </div>
    );
}

export default Category;
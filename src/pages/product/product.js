import React, { useEffect } from 'react';
import Category from '../../components/home/Category';
import BreadCrumb from '../../components/main/BreadCrumb';
import ProductDetail from '../../components/product/ProductDetail';
import { useState } from 'react';
import useSWR from 'swr'
import { useParams } from 'react-router-dom';
const getProductDetail = async(url)=>{
    try {
      const res = await fetch(url)  
      const data = await res.json()

      return data
    } catch (error) {
      console.log(error)
    }
}
function Product(props) {
    const [dataCategory, setDatacategory] = useState([])
    const paramURLProduct = useParams() 
    
    const {data,isLoading,error} = useSWR(`http://192.168.166.1:8800/api/product/${paramURLProduct.id}`,getProductDetail)
    useEffect(() => {
        const fetchCategory = async () => {
          try {
            const response = await fetch(`http://192.168.166.1:8800/api/category/`);
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
            {isLoading ?'Loading...':error?console.log(error):<ProductDetail data={data}/>}
            <Category data={dataCategory}/>
        </div>
    );
}

export default Product;
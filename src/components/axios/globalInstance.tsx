"use client"
import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://course-api.com/react-store-products';


const GlobalInstance = () => {
  const fetchData = async () => {
    try{
        const res = await axios(productsUrl)
        console.log(res)

    }catch (error){

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
       <h2 className='text-center'>global instance</h2>
    </div>
  
  );
};
export default GlobalInstance;
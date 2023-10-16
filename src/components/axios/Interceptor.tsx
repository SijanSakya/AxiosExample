import jsonApi from '@/axios/jsonApi';
import authFetch from '@/axios/interceptor';
import { useEffect, useState } from 'react';

const url = 'https://course-api.com/react-store-products';

export interface CustomProp {
	id: any;
	name: string;
	price: number;
}
const Interceptors = () => {
    const [data,setData]= useState<CustomProp[]>([])


const fetch =async()=>{
    try {
        const response = await jsonApi.get('/react-store-products');
        setData(response.data)
        
      } catch (error) {
       
      }   
}
useEffect(() => {
    fetch();
  }, []);
console.log(data)
  return (
  <div>
    <h2 className='text-center'>interceptors</h2>
    {data.map((post)=>(
       <div className='flex gap-10 justify-center'>
        <p>{post.id}</p>
        <p>{post.name}</p>
        </div>
    ))}
  </div>
  );
};
export default Interceptors;

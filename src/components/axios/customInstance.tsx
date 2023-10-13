'use cLient'
import { useEffect , useState } from 'react';
import authFetch from '@/axios/custom';
import axios from 'axios'
const randomUserUrl = 'https://randomuser.me/api';

interface CustomProp {
 id: any;
 name: string;
 price: number;
}
const CustomInstance: React.FC<CustomProp> = () => {
  const [data,setData]= useState<CustomProp[]>([])
  const fetchData = async () => {
      try{
         const res = await authFetch('/react-store-products')
         console.log("data c", res.data)
         setData(res.data)
      }catch(error){

      }
  };
  console.log(data)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <h2 className='text-center'>custom instance</h2>
       {/* {data.map((post)=>{
        return (<div>
            <h1>{post.id}</h1>
        </div>)
       })} */}
       {data.map((post: any)=>(
         <div className='flex gap-10 justify-center'>
            <h1>{post.id}</h1>
            <p>{post.price}</p>
        </div>
       ))}
    </div>
  );
};
export default CustomInstance;

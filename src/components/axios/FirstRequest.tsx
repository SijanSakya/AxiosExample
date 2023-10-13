"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const FirstRequest = () => {
  const [data, setData] = useState('');
  const url = "https://jsonplaceholder.typicode.com/posts";
//   console.log("das", data)
  const fetchData = async () => {
    try {
      const response = await axios(url);
    //   console.log(response);
      const data1 = response.data
      setData(data)
      console.log(data1)
    } catch (error:any) {
        console.log(error.response)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <div>
      <h1 className="text-center">FirstRequest</h1>
      <div>
        {data.map((post: any)=>(
            <div>
                <h1>{post.id}</h1>
                </div>
        ))}
      </div>
    </div>
  );
};

export default FirstRequest;

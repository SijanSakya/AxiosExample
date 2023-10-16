import { useState, useEffect } from 'react';
import { CustomProp } from "@/components/axios/customInstance";
import multipartApi from '@/axios/Multipart';

export const useAxiosMulti = ({ route = "", otherOptions = "" }) => {

  const [data, setData] = useState<CustomProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await multipartApi.get(route);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {   
        
        setLoading(false);
      }
    };

    fetchData();
  }, [route]);

  return { data, loading, error };
};
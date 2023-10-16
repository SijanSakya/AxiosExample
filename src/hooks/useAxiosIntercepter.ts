import { useState, useEffect } from 'react';
import { CustomProp } from "@/components/axios/customInstance";
import jsonApi from '@/axios/jsonApi';

export const useAxiosInter = ({ route = "", otherOptions = "" }) => {

  const [data, setData] = useState<CustomProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await jsonApi.get(route);
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


// export default useFetch;

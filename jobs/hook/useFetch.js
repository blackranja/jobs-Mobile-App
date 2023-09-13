import {useState,useEffect} from 'react';
import axios from 'axios';
import {RAPID_API_KEY} from '@env';

const rapidApiKey=RAPID_API_KEY;

const useFetch=(endPoint)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
  
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search/${endPoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key': '773d65de8cmshf1d41d5b74609e3p1f88fdjsn0594c4ab92f7',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData=async()=>{
        setIsLoading(true);
        try{
          const response=await axios.request(options);
          setData(response.data.data);
          setIsLoading(false);

        }catch(error){
          setError(error);
          alert('There is an Error!');
        }finally{
          setIsLoading(false);
        }
      }
      useEffect(()=>{fetchData();},[]);
      const refetch=()=>{
        setIsLoading(true);
        fetchData();
      }
      return {data,isLoading,error,refetch}

}
export default useFetch;
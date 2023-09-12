import {useState,useEffect} from 'react';
import axios from 'axios';
const useFetch=(endPoint)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
  
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search/${endPoint}`,
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '773d65de8cmshf1d41d5b74609e3p1f88fdjsn0594c4ab92f7',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
}
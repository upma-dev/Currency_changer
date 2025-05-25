/*
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
       fetch(``)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo  */

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.frankfurter.app/latest?base=USD");
                const result = await response.json();
                
                // Assuming the API returns rates in an object, access it using currency
                setData(result.rates);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        if (currency) {
            fetchData();
        }
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
 

/*
 import{useEffect, useState} from "react"

function useCurrencyInfo(currency){
const {data, setData} = useState({})
useEffect(() =>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
    
    }, [currency])
   console.log(data);
   return data
}
export default useCurrencyInfo;
*/
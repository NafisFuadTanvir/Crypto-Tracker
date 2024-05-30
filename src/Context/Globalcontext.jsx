import React, { createContext, useEffect, useState } from 'react';

export const coinContext = createContext();
const Globalcontext = ({children}) => {


    const [allcoin,setAllcoin]= useState([]);
    const [currency,setCurrency]= useState({
        name: "USD",
        symbol: "$"
    })
     
    const fetchData= async()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': '	CG-CfpVJcvuPhwCycs4qrF1kKmw'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllcoin(response))
            .catch(err => console.error(err));
    }


       useEffect(()=>{

         fetchData();

       },[currency])
    return (
        <coinContext.Provider value={{allcoin,currency,setCurrency}}>
            {children}
        </coinContext.Provider >
    );
};

export default Globalcontext;
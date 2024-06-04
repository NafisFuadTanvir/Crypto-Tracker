import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinContext } from "../../Context/Globalcontext";


const Coin = () => {

    const {coinId}= useParams();
   const {currency}= useContext(coinContext)
    const[coindata,setcoindata]= useState("");

  
    const fetchdata= async ()=>{

        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-CfpVJcvuPhwCycs4qrF1kKmw'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response =>setcoindata(response) )
            .catch(err => console.error(err));
    }

    useEffect(()=>{

        fetchdata();

    },[currency])

 
    console.log(coindata)


    if(coindata){
           
        return (
            <div className="flex items-center gap-5 justify-around">
                <img src={coindata.image.large} alt="" />
                <div>
                <p> <b>{coindata.name} ({coindata.symbol.toUpperCase()})</b> </p>
                </div>
                
            </div>
        );

    }

    else{
        return (
            <div>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }


   
};

export default Coin;
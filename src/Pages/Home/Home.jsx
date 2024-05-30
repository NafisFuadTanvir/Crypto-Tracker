import React, { useContext, useEffect, useState } from "react";
import { coinContext } from "../../Context/Globalcontext";

const Home = () => {

   const {allcoin,currency}= useContext(coinContext)

   const [displaycoin,setDisplaycoin]= useState([]);

   useEffect(()=>{
        
    setDisplaycoin(allcoin)


   },[allcoin])
  return (
    <div className="Container py-3 pb-24">
      <div className="Hero w-2/5 my-24 mx-auto flex flex-col items-center text-center gap-8">
        <h1 className="font-bold text-6xl">
          Largest <br /> Crypto Market
        </h1>
        <p className="w-[75%] leading-7 text-[#e3e3e3] " >
          Welcome to CryptoMarket, your premier destination for buying, selling,
          and trading digital assets. Join our community and start your crypto
          journey today!
        </p>
        <form className=" w-[80%] flex justify-between gap-3 items-center ">
          <input className="flex-1 outline-none border-none pl-3 py-2 font-[16px] rounded-full text-black " type="text" placeholder="Search coin" />
          <button className="flex items-center gap-3 
                    px-5 py-1 rounded bg-white border-none text-[#393939] cursor-pointer " type="submit">Search</button>
        </form>
      </div>

        <div className="container-table max-w-5xl my-5 mx-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl">
          <div className="table-layout grid grid-cols-5 px-[20px] py-[15px] items-center border-b-transparent">
            <p className="pl-5">#</p>
            <p>Coins</p>
            <p>price</p>
            <p className="text-center">24H Change</p>
            <p className="text-right">Market Cap</p>
          </div>
          {
            displaycoin.slice(0,10).map((coin)=> (

              <div className="table-layout grid grid-cols-5 px-[20px] py-[15px] items-center border-b " key={coin.id}>
                <p className="pl-5">{coin.market_cap_rank}</p>
                <div className="flex gap-2">
                  <img className="w-7" src={coin.image} alt="" />
                  <p>{coin.name + "-" + coin.symbol}</p>
                </div>
                <p> {currency.symbol}  {coin.current_price.toLocaleString()}</p>
                <p className="text-center">{
                   
                   coin.price_change_percentage_24h>0 ? <p className="text-green-400">{coin.price_change_percentage_24h}</p> : <p className="text-red-400">{coin.price_change_percentage_24h}</p>

                }</p>
                <p className="text-right"> {currency.symbol} {coin.market_cap.toLocaleString()}</p>
              </div>
            ) )
          }
        </div>
    </div>
  );
};

export default Home;

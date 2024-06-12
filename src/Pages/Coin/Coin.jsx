import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinContext } from "../../Context/Globalcontext";
import LineChart from "../../Components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(coinContext);
  const [coindata, setcoindata] = useState("");
  const [historydata, sethistorydata] = useState("");

  const fetchdata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-CfpVJcvuPhwCycs4qrF1kKmw",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setcoindata(response))
      .catch((err) => console.error(err));
  };

  const fetchHistorydata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-CfpVJcvuPhwCycs4qrF1kKmw",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => sethistorydata(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchdata();
    fetchHistorydata();
  }, [currency]);

  if (coindata && historydata) {
    return (
      <div className="flex flex-col items-center gap-5 justify-around mt-5">
        <img className="max-w-[100px]" src={coindata.image.large} alt="" />
        <div>
          <p className="font-bold text-3xl">
            {" "}
            <b>
              {coindata.name} ({coindata.symbol.toUpperCase()})
            </b>{" "}
          </p>
        </div>

        <div className="chart mb-5 ">
          <LineChart historydata={historydata}></LineChart>
        </div>

        <div className="coin_info max-w-[600px] flex flex-col my-[50px] mx-auto">
          <ul className="flex justify-between border-b p-5">
            <li>Crypto Market Rank</li>
            <li>{" "}{coindata.market_cap_rank}</li>
          </ul>
        <ul className="flex justify-between border-b p-5" >
            <li>Current price</li>
            <li>
              {currency.symbol}{" "}
              {coindata.market_data.current_price[currency.name] !== undefined
                ? coindata.market_data.current_price[
                    currency.name
                  ].toLocaleString()
                : "N/A"}
            </li>
          </ul >
          <ul className="flex justify-between p-5 ">
            <li>Market Cap</li>
            <li>{currency.symbol}{" "}
              {coindata.market_data.market_cap[currency.name] !== undefined
                ? coindata.market_data.current_price[
                    currency.name
                  ].toLocaleString()
                : "N/A"}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
};

export default Coin;

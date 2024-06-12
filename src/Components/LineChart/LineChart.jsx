import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";


const LineChart = ({historydata}) => {

    const [data,setdata]= useState([["Date","prices"]])


     useEffect(()=>{

        const datacopy= [["Date","prices"]];

        if(historydata.prices){
            historydata.prices.map((item)=>{
                datacopy.push([`${new Date(item[0]).toLocaleString().slice(0,-5)}`,item[1]])
            })
        }
        setdata(datacopy)

     },[historydata])

    return (
        <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
        
        ></Chart>
    );
};

export default LineChart;
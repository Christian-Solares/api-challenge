import {useState, useEffect} from "react";
import axios from "axios";

const CryptoData = () => {
    // data: represents our data, setdata sets the data we are pulling from the api

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

    // Make a request to all exchanges
    useEffect(() => {
        axios.get(`https://www.cryptingup.com/api/exchanges/COINBASE/markets?size=1&start=1`).then((juan) => {
            setData1(juan.data.markets);
            console.log(juan.data.markets)
        });

        axios.get(`https://www.cryptingup.com/api/exchanges/BINANCE/markets?size=1&start=1`).then((juan) => {
            setData2(juan.data.markets);
            console.log(juan.data.markets)
        });

        axios.get(`https://www.cryptingup.com/api/exchanges/HUOBIGLOBAL/markets?size=1&start=1`).then((juan) => {
            setData3(juan.data.markets);
            console.log(juan.data.markets)
        });
    }, []);


    return (
        <div>
            <h1>Data from my API</h1>
            {data1.map((x, i) => <li key={x.createdAt}>{x.symbol} : {x.price}</li>)}
            {data2.map((x, i) => <li key={x.createdAt}>{x.symbol} : {x.price}</li>)}
            {data3.map((x, i) => <li key={x.createdAt}>{x.symbol} : {x.price}</li>)}
            
            {/* List specific data for the 3 exchanges  */}
            <h1>Single Post data</h1>
            <h3>Exchange Name: </h3>
            <p> </p>
        </div>  
    )
};

export default CryptoData;
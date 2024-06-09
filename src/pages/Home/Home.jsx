import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin)
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e6) {
      return (marketCap / 1e6).toPrecision(5) + 'M';
    } else if (marketCap >= 1e3) {
      return (marketCap / 1e3).toPrecision(5) + 'K';
    } else {
      return marketCap.toPrecision(5);
    }
  };

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p> Explore diverse cryptocurrencies with real-time insights and seamless trading.
        </p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list='coinlist' required value={input} type="text" placeholder='Search' />

          <datalist id='coinlist'>
            {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>


          <button type='submit'>Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout header">
          <p>#</p>
          <p>Coins</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} key={index} className="table-layout">
              <p>{item.market_cap_rank}</p>
              <div className="coin-info">
                <img src={item.image} alt="" />
                <p>{item.name + "-" + item.symbol}</p>
              </div>
              <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                {(Math.floor(item.price_change_percentage_24h * 100) / 100).toFixed(2)}</p>
              <p className='market-cap'>{currency.symbol}{formatMarketCap(item.market_cap)}</p>
            </Link>
          ))
        }

        <div></div>
      </div>
    </div>
  );
};

export default Home;

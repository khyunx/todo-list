import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>{coins.length}개의 코인 시세</h1>
      {loading ? <strong>로딩중...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

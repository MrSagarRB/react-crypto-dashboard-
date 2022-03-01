import axios from "axios";
import "./coin.css";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Coin from "./Coin";

const baseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function App() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setCoin(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoin = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <form className="coin-input">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            placeholder="Coin Name"
            onChange={handleChange}
            className="coin-input-fild"
          />
        </form>
        <div>
          <span>Coin</span>
          <span>Price</span>
        </div>
      </div>
      {filteredCoin.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;

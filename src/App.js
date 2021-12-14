import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const images = [
  "https://cdnn1.img.sputniknews.com/img/07e5/0a/13/1090024345_0:0:2001:1125_1920x0_80_0_0_37de490baac4b7cddb7c0186e7299bc3.jpg",
  "https://wwd.com/wp-content/uploads/2019/11/kanye-west-at-fast-company-panel-nyc.jpg",
  "https://media.gq-magazine.co.uk/photos/5d13a7d52881ccbf300a9586/16:9/w_2560%2Cc_limit/kanye-west-03-gq-7feb19_getty_b.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/MSNBC/Components/Video/202007/tdy_sun_geoff_kanye_200705_1920x1080.jpg",
  "https://i0.wp.com/liveforlivemusic.com/wp-content/uploads/2014/07/kanye.jpg?fit=1920%2C1080&ssl=1",
  "https://www.billboard.com/wp-content/uploads/2021/07/BB-News-Kanye-West-Donda-Release-1626882701.png",
  "https://wallpapercave.com/wp/wp1839968.png",
  "https://cdn.gobankingrates.com/wp-content/uploads/2021/08/shutterstock_editorial_10704781a-1.jpg",
  "https://media.gq-magazine.co.uk/photos/5ef5f27e87e549a3c50639a0/master/pass/20200626-west.jpg",
  "https://media.glamourmagazine.co.uk/photos/6138db704c8f4b78b7c65cab/16:9/w_2560%2Cc_limit/Kanye-West-glamour-24nov16_getty_b.jpg",
];

function App() {
  const randRange = (max) => {
    return Math.floor(Math.random() * max);
  };

  const [src, setSrc] = useState(0);
  const [quote, setQuote] = useState("");
  const [change, setChange] = useState(0);

  useEffect(() => {
    setSrc(randRange(images.length));
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((res) => setQuote(res.quote));
  }, [change]);

  return (
    <div className="App">
      <div
        className="background"
        style={{ backgroundImage: `url(${images[src]})` }}
      >
        <div className="colorscreen">
          <div className="textscreen">{quote}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

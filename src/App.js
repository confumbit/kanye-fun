import "./App.css";
import { useEffect, useState } from "react";

const images = [
  "https://cdnn1.img.sputniknews.com/img/07e5/0a/13/1090024345_0:0:2001:1125_1920x0_80_0_0_37de490baac4b7cddb7c0186e7299bc3.jpg",
  "https://media.gq-magazine.co.uk/photos/5d13a7d52881ccbf300a9586/16:9/w_2560%2Cc_limit/kanye-west-03-gq-7feb19_getty_b.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/MSNBC/Components/Video/202007/tdy_sun_geoff_kanye_200705_1920x1080.jpg",
  "https://i0.wp.com/liveforlivemusic.com/wp-content/uploads/2014/07/kanye.jpg?fit=1920%2C1080&ssl=1",
  "https://www.billboard.com/wp-content/uploads/2021/07/BB-News-Kanye-West-Donda-Release-1626882701.png",
  "https://wallpapercave.com/wp/wp1839968.png",
  "https://cdn.gobankingrates.com/wp-content/uploads/2021/08/shutterstock_editorial_10704781a-1.jpg",
  "https://media.gq-magazine.co.uk/photos/5ef5f27e87e549a3c50639a0/master/pass/20200626-west.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/MSNBC/Components/Video/202007/n_joy_kanyewest_200705_1920x1080.jpg",
  "https://media.glamourmagazine.co.uk/photos/6138db704c8f4b78b7c65cab/16:9/w_2560%2Cc_limit/Kanye-West-glamour-24nov16_getty_b.jpg",
  "https://9to5mac.com/wp-content/uploads/sites/6/2016/08/1xitpmz.jpg?quality=82&strip=all",
  "https://www.buzzyoo.com/wp-content/uploads/2020/07/5dc5949f6690d.image_.jpg",
];

function getDarkColor() {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

const randRange = (max) => {
  return Math.floor(Math.random() * max);
};

function App() {
  const [src, setSrc] = useState(randRange(images.length));
  const [quote, setQuote] = useState("");
  const [change, setChange] = useState(0);

  useEffect(() => {
    document
      .querySelector(".colorway")
      .addEventListener("animationstart", () => {
        setTimeout(() => setChange((c) => c + 1), 1500);
      });
    document.querySelector(".colorway").addEventListener("animationend", () => {
      document.querySelector(".colorway").style.display = "none";
    });
  }, []);

  useEffect(() => {
    setSrc(randRange(images.length));
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((res) => setQuote(res.quote));
  }, [change]);

  return (
    <div
      className="App"
      onClick={() => {
        document.querySelector(".colorway").style.backgroundColor =
          getDarkColor();
        document.querySelector(".colorway").style.display = "block";
      }}
    >
      <div
        className="background"
        style={{ backgroundImage: `url(${images[src]})` }}
      >
        <div className="colorscreen">
          <div className="textscreen">{quote}</div>
          <div className="colorway"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import NetflixCard from "./NetflixCard";
import AmazonCard from "./AmazonCard";

function App(){

  let [favouriteShow, setFav] = useState("netflix");
  let [flag, setFlag] = useState(0);

  const Netflix_clicked = () => {
    setFlag(0);
    setFav("netflix");
  }

  const Amazon_clicked = () => {
    setFlag(1);
    setFav("amazon");
  }

  return(
      <>
      <div className="btnDiv">
      <button disabled = {(flag === 0) ? true : false} onClick={Netflix_clicked} className="netflixBtn">Netflix Original</button>
      <button disabled = {(flag === 1) ? true : false} onClick={Amazon_clicked} className="amazonBtn">Amazon Prime</button>
      </div>
      {(favouriteShow === "netflix") ? <NetflixCard /> : <AmazonCard />}
      </>
  )
}

export default App;
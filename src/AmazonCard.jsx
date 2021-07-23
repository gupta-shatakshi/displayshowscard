import React from "react";
import Cards from "./Cards";
import Data2 from "./Amazon";

const AmazonCard = () =>{
    return(
        <>
        <span><h1 className="amazon-heading">Top 5 Amazon Prime Shows to Binge Watch</h1></span>
        {Data2.map((val2) => { 
          console.log(val2);
          return(
          <Cards 
          key = {val2.id}
          showTitle = {val2.showTitle}
          showName = {val2.showName}
          showDescription = {val2.showDescription}
          showPoster = {val2.showPoster}
          showLink = {val2.showLink}
          showRating = {val2.showRating}
          showRatingLink = {val2.showRatingLink}
          />
            )
        })}
        </>
      )
  }

export default AmazonCard;
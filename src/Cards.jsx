import React from "react";

function Cards(props){
    return(
        <>
        <div className="container">
                <img src={props.showPoster} alt={`${props.showName}'s Poster`} className="posterImg"></img>
            <div className="title"> 
                <h4 className="titleHeading">{props.showTitle}</h4> 
            </div>
            <div className="name"> 
                <h2 className="nameHeading">{props.showName}</h2>
            </div>
            <div className="rating"> 
                <a href={props.showRatingLink} target = "_direct">
                    <h4 className="ratingHeading">{`IMDb Rating: ${props.showRating}`}</h4>
                </a>
            </div>
            <div>
                <p className="description">{props.showDescription}</p>
            </div>
            
            <div className="link"> 
                <a href={props.showLink} target="_redirect">
                <button className="linkBtn">Watch Now </button>
                </a>
            </div>

        </div>
        </>
    )
}


export default Cards; 
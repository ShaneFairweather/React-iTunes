import React, { Component } from 'react';



const Result = (props) => {
    return (
        <div className="result"><a href={props.trackUrl}>
            <div className="resultImg">
                <img src={props.imageUrl} />
                <div className="clearBox"></div>
            </div>
            <div className="resultInfo">
                <h3>{props.trackName}</h3>
                <h5>{props.artistName}</h5>
            </div>
        </a></div>
    )
}


export default Result;
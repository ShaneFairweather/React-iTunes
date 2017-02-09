import React, { Component } from 'react';



const Result = (props) => {
    return (
        <div className="result"><a href={props.trackUrl}>
            <img src={props.imageUrl} />
            <h3>{props.artistName}</h3>
            <h5>{props.trackName}</h5>
        </a></div>
    )
}


export default Result;
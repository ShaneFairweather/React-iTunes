import React, { Component } from 'react';
import Result from './result';

const Display = (props) => {
    var shortList = props.results;
    var newArray = shortList.slice(0, 15);
    const resultsList = newArray.map((item) => {
        return (
            <Result artistName={item.artistName}
                    trackName={item.trackName}
                    imageUrl={item.artworkUrl100.replace('100x100', '1200x1200')}
                    trackUrl={item.trackViewUrl} />
        )
    })
    return (
        <div className="display">
            {resultsList}
        </div>
    )
}


export default Display;
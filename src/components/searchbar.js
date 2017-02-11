import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this);
    }



    onInputChange(term) {
        this.setState({term})
        this.props.getResults(term);
    }

    render() {
        return (
            <div className='searchBarContainer'>
                <input type='text'
                       value={this.state.term}
                       onChange={event => this.onInputChange(event.target.value)}
                />
                {/*<button><i id="searchIcon" className="fa fa-search" /></button>*/}
            </div>
        )
    }
}
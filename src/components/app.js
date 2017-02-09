import React, { Component } from 'react';

import Title from './title';
import SearchBar from './searchbar';
import Display from './display';
import axios from 'axios';



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "lightspeed champion",
            results: []
        }
        this.getResults = this.getResults.bind(this);
    }

    getResults(term) {
        axios.get('https://itunes.apple.com/search?term=' + term)
            .then((response) => {
                console.log("success")
                console.log(response.data.results[0].trackName);
                this.setState({ results: response.data.results })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
              <div>
                  <Title />
                  <SearchBar getResults={term => this.getResults(term)} />
                  <Display results={this.state.results} />
              </div>
        );
    }
}

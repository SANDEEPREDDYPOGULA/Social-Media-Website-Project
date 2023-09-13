import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { BigBox } from './BigBox';

export class Search extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
            <div className="container">
            <div>
            <SearchBar/>    
            </div> 
            <hr/>   
            <div>
            <BigBox />    
            </div>
            </div>
        );
    }
}
export default Search;
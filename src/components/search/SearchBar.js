import React, { Component } from "react";
import { InputGroup,InputGroupAddon,Input,Button } from 'reactstrap';
import { SearchResults } from "./SearchResults";
  
export class SearchBar extends Component {
    constructor(props){
        super(props);
          this.state ={ searchShow : false }
                       
    }

    render() {
        
        let searchClose =() => this.setState({ searchShow: false });

        return (
                <div >
                <div>
                <InputGroup >
                <Input placeholder="Search Here"  />
                <InputGroupAddon addonType="prepend"><Button color="primary" onClick={()=> this.setState({searchShow: true})} >Search</Button></InputGroupAddon>
                </InputGroup>
                </div>
                <div>
                <SearchResults show={this.state.searchShow} onHide={searchClose} />
                </div>     
                </div>
        );
 }
}

export default SearchBar;


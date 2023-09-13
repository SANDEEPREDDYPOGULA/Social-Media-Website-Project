import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { TheGroup } from './TheGroup';

export class Groups extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
            <div  className="container" >
            <div align="center" >
            <h5>Groups</h5>
            </div>  
            <div>
            <Row>
            <TheGroup/>    
            <TheGroup/> 
            <TheGroup/> 
            <TheGroup/> 
            <TheGroup/> 
            </Row>     
            </div>      
            </div>
        );
    }
}
export default Groups;
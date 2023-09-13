import React, { Component } from 'react';
import { TheGroup } from '../groups/TheGroup';
import { Row } from 'reactstrap';

export class GroupSearch extends Component {
    render () {
        return (
            <div>
            <Row>
            <TheGroup/> 
            <TheGroup/>    
            <TheGroup/>    
            <TheGroup/>    
            <TheGroup/>    
            <TheGroup/>       
            </Row>    
            </div>
        );
    }
}
export default GroupSearch;
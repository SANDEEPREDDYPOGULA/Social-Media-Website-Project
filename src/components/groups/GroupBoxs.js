import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
import { TheBox } from '../boxs/TheBox';

export class GroupBoxs extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
             <div >
             <Row>
             <TheBox/>    
             <TheBox/>    
             <TheBox/>    
             <TheBox/>
             <TheBox/>        
             </Row>    
             </div>
        );
    }
}
export default GroupBoxs;
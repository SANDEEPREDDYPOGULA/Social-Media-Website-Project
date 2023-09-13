import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { MyBox } from './MyBox';
import { TheBox } from './TheBox';

export class Boxs extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
            <div  className="container" >
            <div align="center" >
            <h5>BoxS</h5>
            </div>
            <div>
            <Row>
            <MyBox/>  
            <TheBox/>
            <TheBox/>
            <TheBox/>
            </Row>        
            </div>
            </div>
        );
    }
}
export default Boxs;
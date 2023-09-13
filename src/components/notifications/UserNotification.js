import React, { Component } from 'react';
import { TheBox } from '../boxs/TheBox';
import { Userinfo } from '../home/Userinfo';
import { Row, Card } from 'reactstrap';

export class UserNotification extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
            <div >
            <Userinfo/> 
            <Row>   
            <TheBox/>
            <TheBox/>
            </Row>
            </div>
        );
    }
}
export default UserNotification;
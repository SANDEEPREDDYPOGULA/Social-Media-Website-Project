import React, { Component } from 'react';
import { UserNotification } from './UserNotification';

export class Notifications extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
            <div className="container" >
            <h5 align="center" >Notifications</h5>
            <div>
            <UserNotification/> 
            <hr/> 
            <UserNotification/> 
            <hr/>   
            <UserNotification/>    
            <hr/>     
            </div>
            <hr/>
            </div>
        );
    }
}
export default Notifications;
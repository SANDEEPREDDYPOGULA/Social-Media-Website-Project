import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Userinfo } from '../home/Userinfo';

export class GroupAdmins extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
             <div align="center">
             <Card  >
             <h6>Admins</h6>    
             <Userinfo />
             <Userinfo />
             <Userinfo />
             </Card>
             </div>
        );
    }
}
export default GroupAdmins;
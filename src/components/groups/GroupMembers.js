import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Userinfo } from '../home/Userinfo';

export class GroupMembers extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
             <div align="center">
             <Card  >
             <h6>Members</h6>    
             <Userinfo />
             <Userinfo />
             <Userinfo />
             <Userinfo />
             <Userinfo />
             <Userinfo />
             </Card>
             </div>
        );
    }
}
export default GroupMembers; 
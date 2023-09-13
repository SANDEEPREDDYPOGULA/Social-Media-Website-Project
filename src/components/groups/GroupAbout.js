import React, { Component } from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';
import { GroupAdmins } from './GroupAdmins';
import { GroupMembers } from './GroupMembers';
import { Userinfo } from '../home/Userinfo';
import { MakegAdmin } from './MakegAdmin';
import { RemovegAdmin } from './RemovegAdmin';
import EditGroup from './EditGroup';

export class GroupAbout extends Component {
    constructor(props){
        super(props);
        this.state = {
            makegadminShow : false ,
            removegadminShow : false ,
            editgroupShow : false ,
          };
    }
    render () {

        let makegadminClose =() => this.setState({ makegadminShow: false });
        let removegadminClose =() => this.setState({ removegadminShow: false });
        let editgroupClose =() => this.setState({ editgroupShow: false });

        return (
             <div >
             <div >
             <Card  >
             <h6 align="center">Created By</h6>    
             <Userinfo />
             <CardBody>
             <CardText>Created On <h6><span color="black">Date</span></h6></CardText>
             <CardText>About <h6><span color="black">For the competion in College</span></h6></CardText>
             </CardBody>
             </Card>
             </div>
             <div>
             <Button outline color="primary" size="sm" onClick={()=> this.setState({editgroupShow: true})} block>Edit Group Details</Button>   
             <Button outline color="primary" size="sm" onClick={()=> this.setState({makegadminShow: true})} block>Make Admin</Button>   
             <Button outline color="primary" size="sm" onClick={()=> this.setState({removegadminShow: true})} block>Remove Admin</Button>           
             </div>
             <div>
             <GroupAdmins/>    
             </div>
             <div>
             <GroupMembers/>    
             </div>
             <hr/>
             <div>
             <MakegAdmin show={this.state.makegadminShow} onHide={makegadminClose} />
             </div>
             <div>
             <RemovegAdmin show={this.state.removegadminShow} onHide={removegadminClose} />
             </div>
             <div>
             <EditGroup show={this.state.editgroupShow} onHide={editgroupClose} />
             </div>
             </div>
        );
    }
}
export default GroupAbout;
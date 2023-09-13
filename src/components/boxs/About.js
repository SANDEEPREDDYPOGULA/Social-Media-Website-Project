import React, { Component } from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';
import { Userinfo } from '../home/Userinfo';
import { BoxMembers } from './BoxMembers';
import { BoxAdmins } from './BoxAdmins';
import { MakeAdmin } from './MakeAdmin';
import { RemoveAdmin } from './RemoveAdmin';
import { EditBox } from './EditBox';

export class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            makeadminShow : false ,
            removeadminShow : false ,
            editboxShow : false ,
          };
    }
    render () {

        let makeadminClose =() => this.setState({ makeadminShow: false });
        let removeadminClose =() => this.setState({ removeadminShow: false });
        let editboxClose =() => this.setState({ editboxShow: false });

        return (
             <div >
             <div >
             <Card  >
             <h6 align="center">Created By</h6>    
             <Userinfo />
             <CardBody>
             <CardText>Box Type <h6><span color="black">Default</span></h6></CardText>
             <CardText>Created On <h6><span color="black">Date</span></h6></CardText>
             <CardText>About <h6><span color="black">For the competion in College</span></h6></CardText>
             </CardBody>
             </Card>
             </div>
             <div>
             <Button outline color="primary" size="sm" onClick={()=> this.setState({editboxShow: true})} block>Edit Box Details</Button>   
             <Button outline color="primary" size="sm" onClick={()=> this.setState({makeadminShow: true})} block>Make Admin</Button>   
             <Button outline color="primary" size="sm" onClick={()=> this.setState({removeadminShow: true})} block>Remove Admin</Button>           
             </div>
             <div>
             <BoxAdmins/>    
             </div>
             <div>
             <BoxMembers/>    
             </div>
             <hr/>
             <div>
             <MakeAdmin show={this.state.makeadminShow} onHide={makeadminClose} />
             </div>
             <div>
             <RemoveAdmin show={this.state.removeadminShow} onHide={removeadminClose} />
             </div>
             <div>
             <EditBox show={this.state.editboxShow} onHide={editboxClose} />
             </div>
             </div>
        );
    }
}
export default About;
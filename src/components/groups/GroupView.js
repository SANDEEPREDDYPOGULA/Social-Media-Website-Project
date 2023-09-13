import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { GroupStories } from './Groupstories';
import { LeaveGroup } from './LeaveGroup';
import { AddPost } from '../boxs/AddPost';
import { AddBox } from './AddBox';
import { JoinGroup } from './JoinGroup';
import { AddgStory } from './AddgStory';
import GroupMenu from './GroupMenu';

export class GroupView extends Component {
    constructor(props){
        super(props);
        this.state = {
            leavegroupShow : false ,
            addgpostShow : false ,
            addgboxShow : false ,
            joingroupShow : false ,
            addgstoryShow : false ,
          };
    }
    render () {

        let leavegroupClose =() => this.setState({ leavegroupShow: false });
        let addgpostClose =() => this.setState({ addgpostShow: false });
        let addgboxClose =() => this.setState({ addgboxShow: false });
        let joingroupClose =() => this.setState({ joingroupShow: false });
        let addgstoryClose =() => this.setState({ addgstoryShow: false });

        return (
             <div className="container" >
             <div align="center" >
             <h4>Groupname</h4>
             </div>
             <div className="d-flex flex-column" >
             <ButtonGroup size="sm" >
             <Button outline color="secondary" onClick={()=> this.setState({leavegroupShow: true})} >Leave</Button>   
             <Button outline color="secondary" onClick={()=> this.setState({addgpostShow: true})} >Create Post</Button> 
             <Button outline color="secondary" onClick={()=> this.setState({addgboxShow: true})} >Create Box</Button>   
             <Button outline color="secondary" onClick={()=> this.setState({joingroupShow: true})} >Join</Button>   
             </ButtonGroup>    
             </div>
             <h6>Stories</h6>    
             <div>
             <GroupStories/>    
             </div>
             <div>
             <Button color="primary" size="sm" block onClick={()=> this.setState({addgstoryShow: true})} >Create Story</Button>          
             </div>
             <div>
             <GroupMenu/>    
             </div>
             <div>
             <LeaveGroup show={this.state.leavegroupShow} onHide={leavegroupClose} />
             </div>
             <div>
             <AddPost show={this.state.addgpostShow} onHide={addgpostClose} />
             </div>
             <div>
             <AddBox show={this.state.addgboxShow} onHide={addgboxClose} />
             </div>
             <div>
             <JoinGroup show={this.state.joingroupShow} onHide={joingroupClose} />
             </div>
             <div>
             <AddgStory show={this.state.addgstoryShow} onHide={addgstoryClose} />
             </div>
             </div>
        );
    }
}
export default GroupView;
import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { BoxStories } from './BoxStories';
import { Notify } from './Notify';
import { AddPost } from './AddPost';
import { Leave } from './LeaveBox';
import { AddStory } from './AddStory';
import { Boxmenu } from './Boxmenu';
import { JoinBox } from './JoinBox';
import { CricketBoard } from './CricketBoard';
import { CricketScore } from './CricketScore';
import Birthday from './Birthday';

export class BoxView extends Component {
    constructor(props){
        super(props);
        this.state = {
            notifyShow : false ,
            addpostShow : false ,
            leaveboxShow : false ,
            addstoryShow : false ,
            joinboxShow : false ,
          };
    }
    render () {

        let notifyClose =() => this.setState({ notifyShow: false });
        let addpostClose =() => this.setState({ addpostShow: false });
        let leaveboxClose =() => this.setState({ leaveboxShow: false });
        let addstoryClose =() => this.setState({ addstoryShow: false });
        let joinboxClose =() => this.setState({ joinboxShow: false });

        return (
             <div className="container" >
             <div align="center" >
             <h4>Boxname</h4>
             </div>
             <div className="d-flex flex-column" >
             <ButtonGroup size="sm" >
             <Button outline color="secondary" onClick={()=> this.setState({leaveboxShow: true})} >Leave</Button>   
             <Button outline color="secondary" onClick={()=> this.setState({addpostShow: true})} >Create Post</Button>  
             <Button outline color="secondary" onClick={()=> this.setState({joinboxShow: true})} >Join</Button>   
             <Button outline color="secondary" onClick={()=> this.setState({notifyShow: true})} >Notify</Button>     
             </ButtonGroup>
             </div>
             <h6>Moments</h6>    
             <div>
             <BoxStories/>  
             </div>
             <div>
             <Button color="primary" size="sm" block onClick={()=> this.setState({addstoryShow: true})} >Create Moment</Button>          
             </div>
             <Birthday/>
             <div>
             <div>
             <CricketBoard/>    
             </div>
             <div>
             <CricketScore/>    
             </div>
             </div>
             <div>
             <Boxmenu />    
             </div>
             <div>
             <Notify show={this.state.notifyShow} onHide={notifyClose} />
             </div>
             <div>
             <AddPost show={this.state.addpostShow} onHide={addpostClose} />
             </div>
             <div>
             <Leave show={this.state.leaveboxShow} onHide={leaveboxClose} />
             </div>
             <div>
             <AddStory show={this.state.addstoryShow} onHide={addstoryClose} />
             </div>
             <div>
             <JoinBox show={this.state.joinboxShow} onHide={joinboxClose} />
             </div>
             </div>
        );
    }
}
export default BoxView;
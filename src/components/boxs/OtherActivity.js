import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Card, Button, CardText, CardImg, ButtonGroup } from 'reactstrap';
import { Userinfo } from '../home/Userinfo';
import { BoxPostComment } from './BoxPostComment';
import { OtherDelete } from './OtherDelete';
import { OtherStory } from './OtherStory';

export class OtherActivity extends Component {
    constructor(props){
        super(props);
        this.state ={ 
               othercommentShow : false ,
               gpcommentShow : false ,
                }
    }
    render () {

        let gpcommentClose =() => this.setState({ gpcommentShow: false });
        let othercommentClose =() => this.setState({ othercommentShow: false });

        return (
        
             <div >
             <div>
             <h6>Other Activity</h6>
             <div>
             <OtherStory/>    
             </div>    
             </div>    
             <Card >
             <Userinfo/>
             <div align="center" >
             <CardText>theweeknd tonight on ABC @jimmykimmellive Show 11:35pm/10:35pm cst</CardText>
             <CardImg width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }}  />
             </div>
             <ButtonGroup size="sm" >
             <Button color="secondary" outline  onClick={()=> this.setState({gpcommentShow: true})} ><h6>Comment</h6></Button>
             <Button color="secondary" outline  onClick={()=> this.setState({othercommentShow: true})} ><h6>Delete</h6></Button>
             </ButtonGroup>
             </Card>
             <hr/>
             <div>
             <BoxPostComment show={this.state.gpcommentShow} onHide={gpcommentClose} />
             </div>
             <div>
             <OtherDelete show={this.state.othercommentShow} onHide={othercommentClose} />
             </div>
             </div>
        );
    }
}
export default OtherActivity;
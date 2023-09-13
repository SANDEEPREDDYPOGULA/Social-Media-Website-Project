import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Card, Button, CardText, CardImg } from 'reactstrap';
import { Userinfo } from './Userinfo';
import { Comment } from './Comment';

export class GeneralPosts extends Component {
    constructor(props){
        super(props);
        this.state ={ commentShow : false 
                }

    }
    render () {

        let commentClose =() => this.setState({ commentShow: false });

        return (
        
             <div >
             <Card >
             <Userinfo/>
             <div align="center" >
             <CardText>theweeknd tonight on ABC @jimmykimmellive Show 11:35pm/10:35pm cst</CardText>
             <CardImg width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }}  />
             </div>
             <Button color="secondary" outline  onClick={()=> this.setState({commentShow: true})} block><h6>Comment</h6></Button>
             </Card>
             <hr/>
             <div>
             <Comment show={this.state.commentShow} onHide={commentClose} />
            </div>
            </div>
        );
    }
}
export default GeneralPosts;
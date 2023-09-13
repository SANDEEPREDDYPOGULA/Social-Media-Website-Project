import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Card, Button, CardText, CardImg, ButtonGroup } from 'reactstrap';
import { Comment } from '../home/Comment';
import { Userinfo } from '../home/Userinfo';
import { DeletePost } from './DeletPost';
 
export class MyboxPost extends Component {
    constructor(props){
        super(props);
        this.state ={ commentShow : false ,
                      deletepostShow : false 
                }

    }
    render () {

        let commentClose =() => this.setState({ commentShow: false });
        let deletepostClose =() => this.setState({ deletepostShow: false });

        return (
        
             <div >
             <div>
             <h6>Posts</h6>    
             </div>
             <Card >
             <Userinfo/>
             <div align="center" >
             <CardText>theweeknd tonight on ABC @jimmykimmellive Show 11:35pm/10:35pm cst</CardText>
             <CardImg width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }}  />
             </div>
             <ButtonGroup  >
             <Button color="secondary" outline  onClick={()=> this.setState({commentShow: true})} ><h6>Comment</h6></Button>
             <Button  color="secondary" outline onClick={()=> this.setState({deletepostShow: true})} ><h6>Delete</h6></Button>
             </ButtonGroup>
             </Card>
             <hr/>
             <div>
             <Comment show={this.state.commentShow} onHide={commentClose} />
            </div>
            <div>
             <DeletePost show={this.state.deletepostShow} onHide={deletepostClose} />
            </div>
            </div>
        );
    }
}
export default MyboxPost;
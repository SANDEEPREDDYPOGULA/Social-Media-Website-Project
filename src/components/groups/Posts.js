import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Card, Button, CardText, CardImg, ButtonGroup } from 'reactstrap';
import { Userinfo } from '../home/Userinfo';
import { BoxPostComment } from '../boxs/BoxPostComment';

export class Posts extends Component {
    constructor(props){
        super(props);
        this.state ={ gpcommentShow : false 
                }
    }
    render () {

        let gpcommentClose =() => this.setState({ gpcommentShow: false });

        return (
        
             <div >
             <Card >
             <Userinfo/>
             <div align="center" >
             <CardText>theweeknd tonight on ABC @jimmykimmellive Show 11:35pm/10:35pm cst</CardText>
             <CardImg width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }}  />
             </div>
             <ButtonGroup size="sm" >
             <Button color="secondary" outline  onClick={()=> this.setState({gpcommentShow: true})} ><h6>Comment</h6></Button>
             </ButtonGroup>
             </Card>
             <hr/>
             <div>
             <BoxPostComment show={this.state.gpcommentShow} onHide={gpcommentClose} />
            </div>
            </div>
        );
    }
}
export default Posts;
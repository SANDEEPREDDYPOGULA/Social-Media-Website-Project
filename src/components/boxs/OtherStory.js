import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Card, Button, CardImg } from 'reactstrap';
import { Userinfo } from '../home/Userinfo';
import { OthersDelete } from './OthersDelete';
 
export class OtherStory extends Component {
    constructor(props){
        super(props);
        this.state ={ othersdeleteShow : false ,
      }
    }
    render () {

        let othersdeleteClose =() => this.setState({ othersdeleteShow: false });

        return (
        
             <div >
             <Card >
             <Userinfo/>
             <div align="center" >
             <CardImg width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }}  />
             </div>
             <Button  color="secondary" outline block onClick={()=> this.setState({othersdeleteShow: true})}  ><h6>Delete</h6></Button>
             </Card>
             <hr/>
             <div>
             <OthersDelete show={this.state.othersdeleteShow} onHide={othersdeleteClose} />
            </div>
            </div>
        );
    }
}
export default OtherStory;
import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Card, Button, CardImg } from 'reactstrap';
import { Userinfo } from '../home/Userinfo';
import { DeleteStory } from './DeleteStory';
 
export class MyboxStory extends Component {
    constructor(props){
        super(props);
        this.state ={ deletestoryShow : false ,
      }
    }
    render () {

        let deletestoryClose =() => this.setState({ deletestoryShow: false });

        return (
        
             <div >
             <div>
             <h6>Stories</h6>    
             </div>
             <Card >
             <Userinfo/>
             <div align="center" >
             <CardImg width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }}  />
             </div>
             <Button  color="secondary" outline block onClick={()=> this.setState({deletestoryShow: true})}  ><h6>Delete</h6></Button>
             </Card>
             <hr/>
             <div>
             <DeleteStory show={this.state.deletestoryShow} onHide={deletestoryClose} />
            </div>
            </div>
        );
    }
}
export default MyboxStory;
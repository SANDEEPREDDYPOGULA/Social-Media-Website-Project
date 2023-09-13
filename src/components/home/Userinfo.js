import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Button } from 'reactstrap';
import { UserPreview } from './UserPreview';

export class Userinfo extends Component {
    constructor(props){
        super(props);
        this.state ={ userShow : false }
    }
    render () {

        let userClose =() => this.setState({ userShow: false });

        return (
             <div  >
             <Button  color="light" size="sm" block onClick={()=> this.setState({userShow: true})}  >
             <img align="left" src={weeknd} style={{ width: 50}}  />
             <h6 align="left" className="mx-auto mt-3" >Username</h6>
             </Button>
             <div>
             <UserPreview show={this.state.userShow} onHide={userClose} />
             </div>
             </div>
        );
    }
}
export default Userinfo;
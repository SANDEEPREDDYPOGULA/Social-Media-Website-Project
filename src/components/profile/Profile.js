import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { AboutUser } from './AboutUser';
import { EditProfile } from './EditProfile';
import { Auth, API, graphqlOperation }  from "aws-amplify";

export class Profile extends Component {
    constructor(props){
        super(props);
        this.state ={ editShow : false ,
            userInfo:null,
            userid:'',
        }
    }

    async componentDidMount() {
        const userInfo = await Auth.currentUserInfo();
        this.setState({ userInfo:userInfo })
        if(this.state.userInfo){
            this.setState({ userid: this.state.userInfo.attributes.sub })
        }
    }

    render () {

        let editClose =() => this.setState({ editShow: false });

        return (
            <div align="center" className="container">
            <h5>Profile</h5>  
            <div>
            <AboutUser />    
            </div>
            <hr/>
            <div>
            <Button  color="secondary" outline block onClick={()=> this.setState({editShow: true})} >Edit Profile</Button>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <div>
            <EditProfile show={this.state.editShow} onHide={editClose} />
            </div>
            </div>
        );
    }
}
export default Profile;
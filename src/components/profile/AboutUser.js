import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Button, CardImg, CardText,Card ,ButtonGroup } from 'reactstrap';
import { Followers } from './Followers';
import { Following } from './Following';
import { Auth, API, graphqlOperation, Storage }  from "aws-amplify";
import { getUserinfo } from '../../graphql/queries';

export class AboutUser extends Component {
    constructor(props){
        super(props);
        this.state ={ followingShow : false ,
                      followersShow : false ,
                      userinfo:null ,
                      aboutuser:null,
                      image:'',
                    }
    }

    async componentDidMount() {
        const userinfo = await Auth.currentUserInfo();
        this.setState({ userinfo })
        try {
            const aboutuser = await API.graphql(graphqlOperation(getUserinfo,{ id: this.state.userinfo.attributes.sub }))
                this.setState({ aboutuser:aboutuser.data.getUserinfo })
             
      } catch(err) {
        console.log('error fetching users',err)
      }
      if(this.state.aboutuser){
        try {
           const imageData = await Storage.get(this.state.aboutuser.profilepic.key)
            this.setState({image: imageData})
            console.log(this.state.image)
           } catch(err) {
            console.log('error: image ', err)
          }}
      }

    render () {

        if (!this.state.aboutuser) return (<div><h6>Loading...</h6></div>);

        let followingClose =() => this.setState({ followingShow: false });
        let followersClose =() => this.setState({ followersShow: false });

        return (
                <div>
                 {this.state.aboutuser &&
                 <div>
                 <Card>
                 <img  src={this.state.image} style={{ maxWidth: "30rem" }}  />
                 <h5>{this.state.aboutuser.username}</h5>
                 <CardText>Born on: {this.state.aboutuser.userdob} </CardText>
                 <CardText>About: {this.state.aboutuser.userabout} </CardText>
                 <ButtonGroup size="sm" >
                 <Button color="light" onClick={()=> this.setState({followingShow: true})} ><h6>Following</h6></Button>
                 <Button color="light" onClick={()=> this.setState({followersShow: true})} ><h6>Followers</h6></Button>
                 </ButtonGroup>
                 </Card>
                 </div>
                 }
                 <div>
                 <Following show={this.state.followingShow} onHide={followingClose} />
                 </div>
                 <div>
                 <Followers show={this.state.followersShow} onHide={followersClose} />
                 </div>
               </div>
        );
    }
}
export default AboutUser;
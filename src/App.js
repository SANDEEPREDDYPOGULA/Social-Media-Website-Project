import React, { Component } from "react";
import logo8t from './logo8t.png';
import './App.css';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Button } from 'reactstrap'; 
import { Routes } from "./Routes";
import { CreateProfile } from "./components/profile/CreateProfile";
import { withAuthenticator } from 'aws-amplify-react';
import { Auth, API, graphqlOperation }  from "aws-amplify";
import { getUserinfo, listProfilestatuss } from './graphql/queries';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false ,
      createprofileShow : false ,
      username:'',
      status: null,
      profilestatus:[],
      userInfo:null,
      user:null,
    };
  }

  async componentDidMount() {
    const profilestatus = await API.graphql(graphqlOperation(listProfilestatuss))
    this.setState({ profilestatus })
    if(this.state.profilestatus && this.state.profilestatus.data.listProfilestatuss.items.length ){
      this.setState({ status:'yes'})
    } else{
      this.setState({ status: 'no'})
    }
    console.log(this.state.profilestatus);
    console.log(this.state.status);
    const userInfo = await Auth.currentUserInfo();
    this.setState({ userInfo })
    try {
      const user = await API.graphql(graphqlOperation(getUserinfo,{ id: this.state.userInfo.attributes.sub }))
      this.setState({ user })
      console.log(this.state.user);
      if(this.state.user && !(this.state.user.data.getUserinfo === null) ){
        this.setState({ username: this.state.user.data.getUserinfo.username })
      } else{
        this.setState({ username: ''})
      }
     } catch(err) {
       console.log('error fetching users',err)
     }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen 
    });
  }

  handleLogout = async () => {
    await Auth.signOut();
    }

  render() {

    let createprofileClose =() => this.setState({ createprofileShow: false });

return (
  <div >
         <div >
         <Navbar color="light"  light expand="md" >
         <NavbarBrand href="/"  > <img src={logo8t} style={{  width:45,height:40 }} alt="8THTALE" /> </NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
         <Nav className="ml-auto" navbar >
            <NavItem className="mx-auto mt-2">
            {this.state.username && <div >
            <h6>{this.state.username}</h6>
            </div>} 
            </NavItem>
            <NavItem className="mx-auto mt-1">
            {this.state.status === 'no' && <div>
            <Button color="primary" size="sm" onClick={()=> this.setState({createprofileShow: true})}>Create Profile</Button>
            </div>}   
            </NavItem>
            <NavItem>
            <NavLink href="/"><h6>Home</h6></NavLink>
            </NavItem>  
            <NavItem>
            <NavLink href="/search"><h6>Search</h6></NavLink>
            </NavItem> 
            <NavItem>
            <NavLink href="/boxs"><h6>BoxS</h6></NavLink>
            </NavItem> 
            <NavItem>
            <NavLink href="/groups"><h6>Groups</h6></NavLink>
            </NavItem> 
            <NavItem> 
            <NavLink href="/profile"><h6>Profile</h6></NavLink>
            </NavItem>  
            <NavItem>
            <NavLink href="/notifications"><h6>Notifications</h6></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/settings"><h6>Settings</h6></NavLink>
            </NavItem> 
            <NavItem>
            <NavLink href="/findpeople"><h6>FindPeople</h6></NavLink>
            </NavItem> 
            <NavItem>
            <NavLink onClick={this.handleLogout} ><h6>Logout</h6></NavLink> 
            </NavItem> 
          </Nav>
          </Collapse>
          </Navbar>
          </div>
          <div>
          <Routes />
          </div>
          <div>
          <CreateProfile show={this.state.createprofileShow} onHide={createprofileClose} />
          </div>
  </div>
);
}
}

export default withAuthenticator(App);
import React, { Component } from 'react';
import { CustomInput, Form, FormGroup, Label,Button,Input } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import profilepic from '../profilepic.png';
import moment from 'moment';
import { Redirect } from 'react-router';
import uuid from 'uuid/v4';
import { Auth, Storage, API, graphqlOperation }  from "aws-amplify";
import { createUserinfo, createProfilestatus } from '../../graphql/mutations';
import config from '../../aws-exports';

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
  } = config

export class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            username: '',
            file: profilepic,
            userdob: 'Do i have to call my mom.',
            userabout: 'Busy,some other time.',
            owner: null,
            toHome: false ,
            filetype: '',
        };
    }

    async componentDidMount() {
      const owner = await Auth.currentUserInfo();
      this.setState({ owner })
    }

    handleChange(name, event) {
        this.setState({ [name]: event.target.value });
    } 
    
async submit() {
    if (!this.state.username ) return alert('please enter a username')
    if(this.state.file ){
        const extention = this.state.file.split('.').pop()
        console.log(extention)
        if(extention === 'jpeg'||'jpg'||'png'){
           this.setState({ filetype : 'image' })
           console.log(this.state.filetype)
        }else {
            alert("Photo should be in png or jpg or jpeg format");
        }
         }
     if (this.state.filetype === 'image' ) {
         const { name: fileName, type: mimeType } = this.state.file
          const key = `${uuid()}${this.state.file}`
          const propic = {
              bucket,
              key,
              region,
          }
          const inputData = { 
              id: this.state.owner.attributes.sub,
              username: this.state.username,
              profilepic: propic ,
              userdob: this.state.userdob,
              userabout: this.state.userabout,
              joinedon: moment().format(),
          }
          const inputstatus = { 
            status: 'yes',
        }
          console.log(inputData);
          console.log(inputstatus);
          try {
            await Storage.put(key, this.state.file, {
              contentType: mimeType
            })
            await API.graphql(graphqlOperation(createUserinfo, { input: inputData }))
            await API.graphql(graphqlOperation(createProfilestatus, { input: inputstatus }))
            .then(() => this.setState({
              toHome: true
            }));
            console.log('successfully stored user data!')
          } catch (err) {
            console.log('error: ', err)
          }
      }
    }

    render () {
        if (this.state.toHome) return <Redirect to='/' />
        return (
            <div className="container">
                <Modal
                {...this.props}
                 aria-labelledby="contained-modal-title-vcenter"
                 centered>
                 <Modal.Header closeButton>
                 <Modal.Title id="contained-modal-title-vcenter">
                  Create Profile
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <Form>
                 <FormGroup>
                 <Label id="username">Username</Label>
                 <Input
                  id="username"
                  type="name"
                  name="username"
                  placeholder="Username"
                  onChange={(event) => { this.handleChange('username', event)}}
                  />
                 </FormGroup>
                 <FormGroup>
                 <Label id="userdob">Born Date</Label>
                 <Input
                  id="userdob"
                  type="date"
                  name="userdob"
                  onChange={(event) => { this.handleChange('userdob', event)}}
                  />
                 </FormGroup>
                 <FormGroup>
                 <Label id="file">Profile Photo</Label>
                 <CustomInput 
                  id="file"
                  type="file"
                  name="file"
                  onChange={(event) => { this.handleChange('file', event)}}
                  />
                 </FormGroup>
                 <FormGroup>
                 <Label id="userabout">About</Label>
                 <Input
                  id="userabout"
                  type="name"
                  name="userabout"
                  placeholder="Write About You"
                  onChange={(event) => { this.handleChange('userabout', event)}}
                  />
                 </FormGroup>
                 <Button color="primary" block onClick={this.submit}>Create Profile</Button>    
                 </Form>
                 </Modal.Body>
                 </Modal>
            </div>
        );
    }
}
export default CreateProfile;
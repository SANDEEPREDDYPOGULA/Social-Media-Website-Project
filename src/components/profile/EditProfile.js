import React, { Component } from 'react';
import { CustomInput, Form, FormGroup, Label,Button,Input } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class EditProfile extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="container">
                <Modal
                {...this.props}
                 aria-labelledby="contained-modal-title-vcenter"
                 centered>
                 <Modal.Header closeButton>
                 <Modal.Title id="contained-modal-title-vcenter">
                  Edit Profile
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <Form>
                 <FormGroup>
                 <Label >Username</Label>
                 <Input
                  type="name"
                  name="username"
                  placeholder="Username"
                  />
                 </FormGroup>
                 <FormGroup>
                 <Label >Born Date</Label>
                 <Input
                  type="date"
                  name="userdob"
                  />
                 </FormGroup>
                 <FormGroup>
                 <Label >Change Profile Picture</Label>
                 <CustomInput 
                  type="file"
                  name="file"
                  />
                 </FormGroup>
                 <FormGroup>
                 <Label >About</Label>
                 <Input
                  type="name"
                  name="userabout"
                  placeholder="Write About You"
                  />
                 </FormGroup>
                 <Button color="primary" block >Submit Edit Profile</Button>
                 </Form>
                 </Modal.Body>
                 </Modal>
            </div>
        );
    }
}
export default EditProfile;
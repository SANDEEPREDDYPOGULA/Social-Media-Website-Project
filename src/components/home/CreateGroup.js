import React, { Component } from 'react';
import { CustomInput, Form, FormGroup,Label,Button,Input } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class CreateGroup extends Component {
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
                  Create Group
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <Form>
                 <FormGroup>
                 <Label>Group Name</Label>
                 <Input
                  type="name"
                  name="groupname"
                  placeholder="Write Group Name"
                  />
                 </FormGroup>
                 <FormGroup>
                 <Label> Group Cover Image </Label>
                 <CustomInput 
                 type="file"
                 name="file" 
                 />
                 </FormGroup>
                 <FormGroup>
                 <Label >About</Label>
                 <Input
                  type="name"
                  name="groupabout"
                  placeholder="Write About Group"
                  />
                 </FormGroup>
                 <Button color="primary" block >Create Group</Button>
                 </Form>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button outline color="primary" onClick={this.props.onHide}>Cancel</Button>
                 </Modal.Footer>
                 </Modal>
            </div>
        );
    }
}
export default CreateGroup;
import React, { Component } from 'react';
import { CustomInput, Form, FormGroup, Label,Button,Input } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class CreateBox extends Component {
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
                  Create Box
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <Form>
                 <FormGroup>
                 <Label >Box Name</Label>
                 <Input
                  type="name"
                  name="boxname"
                  placeholder="Write Box Name"
                  />
                 </FormGroup>
                 <FormGroup>
                  <Label >Box Type</Label>
                  <Input 
                  type="select" 
                  name="boxtype" 
                  >
                  <option>Default</option>
                  <option>Birthday</option>
                  <option>Event</option>
                  <option>Cricket</option>
                  </Input>
                  </FormGroup>
                 <FormGroup>
                 <Label > Box Cover Image</Label>
                 <CustomInput 
                 type="file" 
                 name="file" 
                 />
                 </FormGroup>
                 <FormGroup>
                 <Label >About</Label>
                 <Input
                  type="name"
                  name="boxabout"
                  placeholder="Write About Box"
                  />
                 </FormGroup>
                 <Button color="primary" block >Create Box</Button>
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
export default CreateBox;
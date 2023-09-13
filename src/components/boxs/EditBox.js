import React, { Component } from 'react';
import { CustomInput, Form, FormGroup, Label,Button,Input } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class EditBox extends Component {
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
                  Edit Box
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
                 <Label >Change Box Cover Image</Label>
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
                 <Button color="primary" block >Save Edit</Button>
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
export default EditBox;
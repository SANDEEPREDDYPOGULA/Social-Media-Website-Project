import React, { Component } from 'react';
import { CustomInput, Form, FormGroup, Button,Input } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class AddBig extends Component {
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
                  Add to Bigbox
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <Form>
                 <FormGroup>
                 <CustomInput 
                 type="file"  
                 name="file" />
                 </FormGroup>
                 <Button color="primary"  block>Add</Button>
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
export default AddBig;
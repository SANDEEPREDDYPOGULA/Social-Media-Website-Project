import React, { Component } from 'react';
import { FormGroup, Button,Input} from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class Feedback extends Component {
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
                  Feedback
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <FormGroup>
                 <Input 
                 type="textarea" 
                 name="text" 
                 placeholder="Write Feedback Here" 
                 />
                 </FormGroup>
                 <Button color="primary" block>Send Feedback</Button>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button outline color="primary" onClick={this.props.onHide}>Cancel</Button>
                 </Modal.Footer>
                 </Modal>
            </div>
        );
    }
}
export default Feedback;
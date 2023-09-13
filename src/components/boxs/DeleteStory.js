import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class DeleteStory extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div  >
                <Modal
                {...this.props}
                 aria-labelledby="contained-modal-title-vcenter"
                 centered>
                 <Modal.Header closeButton>
                 <Modal.Title id="contained-modal-title-vcenter">
                  Delete Story
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <Button color="secondary" block>Delete</Button>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button outline color="primary" onClick={this.props.onHide}>Cancel</Button>
                 </Modal.Footer>
                 </Modal>
            </div>
        );
    }
}
export default DeleteStory;
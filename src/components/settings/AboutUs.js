import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class AboutUs extends Component {
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
                  About 8T
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <h4>Everything About 8T </h4>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button outline color="primary" onClick={this.props.onHide}>Close</Button>
                 </Modal.Footer>
                 </Modal>
            </div>
        );
    }
}
export default AboutUs;
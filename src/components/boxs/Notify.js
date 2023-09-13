import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class Notify extends Component {
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
                  Boxname
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <p>Your Followers will be Notified</p>    
                 <Button color="primary" block >Notify</Button>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button outline color="primary" onClick={this.props.onHide}>Cancel</Button>
                 </Modal.Footer>
                 </Modal>
            </div>
        );
    }
}
export default Notify;
import React, { Component } from 'react';
import { CustomInput, Form, FormGroup, Button,Input } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class MatchStatus extends Component {
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
                  Match Status
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <p>If you press completed, you cannot enter score anymore. </p>    
                 <Button color="primary"  block>Completed</Button>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button outline color="primary" onClick={this.props.onHide}>Cancel</Button>
                 </Modal.Footer>
                 </Modal>
            </div>
        );
    }
}
export default MatchStatus;
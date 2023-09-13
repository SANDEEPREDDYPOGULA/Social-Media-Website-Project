import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';

export class Follow extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
                <div className="container">
                <Modal
                {...this.props}
                 aria-labelledby="contained-modal-title-vcenter"
                 size="sm"
                 centered>
                 <Modal.Header closeButton>
                 <Modal.Title id="contained-modal-title-vcenter">
                  Username
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <div >
                 <Button block color="primary" >Follow</Button>
                 </div>
                 </Modal.Body>
                 <hr/>
                 </Modal>
               </div>
        );
    }
}
export default Follow;
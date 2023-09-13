import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Userinfo } from '../home/Userinfo';

export class Followers extends Component {
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
                  Followers
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <Userinfo/>
                 <Userinfo/>
                 <Userinfo/>
                 <Userinfo/>
                 <Userinfo/>
                 </Modal.Body>
                 </Modal>
            </div>
        );
    }
}
export default Followers;
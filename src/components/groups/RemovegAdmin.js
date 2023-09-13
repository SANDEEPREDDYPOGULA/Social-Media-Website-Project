import React, { Component } from 'react';
import { Button, Card } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import { Userinfo } from '../home/Userinfo';

export class RemovegAdmin extends Component { 
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
                  Remove Admin
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <h6 align="center">Admins</h6>
                 <Card>
                 <Userinfo />
                 <Button  block>Remove</Button>  
                 </Card>
                 <Card>
                 <Userinfo />
                 <Button  block>Remove</Button>  
                 </Card> 
                 <Card>
                 <Userinfo />
                 <Button  block>Remove</Button>  
                 </Card>   
                 </Modal.Body>
                 <Modal.Footer>
                 <Button outline color="primary" onClick={this.props.onHide}>Cancel</Button>
                 </Modal.Footer>
                 </Modal>
            </div>
        );
    }
}
export default RemovegAdmin;
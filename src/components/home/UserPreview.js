import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Button, CardImg, CardText } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import { Follow } from './Follow';

export class UserPreview extends Component {
    constructor(props){
        super(props);
        this.state ={ followShow : false 
        }
    }

    render () {

        let followClose =() => this.setState({ followShow: false });

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
                 <div align="center" >
                 <Button  color="primary" block   onClick={()=> this.setState({followShow: true})}>Follow</Button>
                 <CardImg  src={weeknd} style={{ maxWidth: "30rem" }} />
                 <h5>The Weeknd</h5>
                 <CardText>Born on: 16/02/1990 </CardText>
                 <CardText>About: Music Artist,Singer,Song Writer,Producer </CardText>
                 </div>
                 <div >
                 <Button block color="primary" href="/userView" >More</Button>
                 </div>
                 <div>
                 <Follow show={this.state.followShow} onHide={followClose} />
                 </div>
                 </Modal.Body>
                 <hr/>
                 </Modal>
               </div>
        );
    }
}
export default UserPreview;
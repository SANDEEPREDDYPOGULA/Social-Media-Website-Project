import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Input ,Button ,CardImg ,CardText ,Form } from 'reactstrap';
import { Modal, FormGroup } from 'react-bootstrap';
import { PostComments } from './PostComments';

export class Comment extends Component {
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
                  Username
                 </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <CardText>theweeknd tonight on ABC @jimmykimmellive Show 11:35pm/10:35pm cst</CardText>
                 <CardImg   src={weeknd} alt="Card image cap" style={{ maxWidth: "30rem" }} />
                 </Modal.Body>
                 <Form>
                 <FormGroup>
                 <Input 
                 type="textarea" 
                 name="caption" 
                 placeholder="Write Comment Here"
                 />
                 </FormGroup>
                 <Button color="primary" block>Post Comment</Button>
                 </Form>
                 <h4>Comments</h4>
                 <PostComments/>
                 </Modal>
            </div>
        );
    }
}
export default Comment;
import React, { Component } from 'react';
import { Card, CardHeader, Row, Col } from 'reactstrap';

export class CricketBoard extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
             <div >
             <Card>
             <CardHeader>Cricket Score Board</CardHeader> 
             <h6>Team-1</h6>
             <Row >
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>wide</h6></Col>
             <Col xs="auto" ><h6>w</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>runout</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>wide</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>bowled</h6></Col>
             </Row>
             <hr/>
             <h6>Team-2</h6>
             <Row>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>wide</h6></Col>
             <Col xs="auto" ><h6>w</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>runout</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>wide</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>1</h6></Col>
             <Col xs="auto" ><h6>bowled</h6></Col>
             </Row>
             </Card>
             </div>
        );
    }
}
export default CricketBoard;
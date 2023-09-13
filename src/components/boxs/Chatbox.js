import React, { Component } from 'react';
import { Input ,Button ,CardImg ,CardText ,Form, Card, CardTitle, CardHeader } from 'reactstrap';

export class Chatbox extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
             <div >
                 <Form>
                 <Input 
                 size="sm"
                 type="text" 
                 name="caption" 
                 placeholder="Message Here"
                 />
                 <Button color="primary" size="sm" >Send</Button>
                 </Form>
                 <hr/>
                 <div>
                 <Card>
                 <h6>Username</h6>
                 <CardText>This is message one</CardText>   
                 </Card>
                 <Card>
                 <h6>Username</h6>
                 <CardText>This is message two</CardText>   
                 </Card>
                 <Card>
                 <h6>Username</h6>
                 <CardText>This is message three</CardText>   
                 </Card>
                 </div>
                 <hr/>
             </div>
        );
    }
}
export default Chatbox;
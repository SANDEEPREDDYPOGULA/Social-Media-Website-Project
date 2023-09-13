import React, { Component } from 'react';
import { Card, CardHeader, Form, FormGroup, Label,Button,Input } from 'reactstrap';
import { MatchStatus } from './MatchStatus';

export class CricketScore extends Component {
    constructor(props){
        super(props);
        this.state = {
            statusShow : false ,
          };
    }
    render () {

        let statusClose =() => this.setState({ statusShow: false });

        return (
             <div >
             <Card>
             <CardHeader>Cricket Score</CardHeader> 
             <Form>
             <FormGroup>
             <Label >Enter Score for Currnet Ball</Label>
             <Input 
              type="select" 
              name="score" 
             >
             <option>0</option>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
             <option>6</option>
             <option>w</option>
             <option>wide</option>
             </Input>
             </FormGroup>
             <FormGroup>
             <Label >Select Team</Label>
             <Input 
              type="select" 
              name="team" 
             >
             <option>Team-1</option>
             <option>Team-2</option>
             </Input>
             </FormGroup>
             <Button color="primary" block>Submit Score</Button>
             <Button color="primary" onClick={()=> this.setState({statusShow: true})} block>Match Status</Button>
             </Form>
             </Card>
             <hr/>
             <div>
             <MatchStatus show={this.state.statusShow} onHide={statusClose} />
             </div>
             </div>
        );
    }
}
export default CricketScore;
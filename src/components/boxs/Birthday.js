import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Card, Button, CardImg, CardHeader } from 'reactstrap';
import BirthdayImage from './BirthdayImage';

export class Birthday extends Component {
    constructor(props){
        super(props);
        this.state ={ birthdayShow : false 
                }
    }
    render () {

        let birthdayClose =() => this.setState({ birthdayShow: false });

        return (
        
             <div >
             <Card >
             <CardHeader>Birthday</CardHeader>
             <div align="center" >
             <CardImg width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }}  />
             </div>
             <Button size="sm" color="secondary" outline  onClick={()=> this.setState({birthdayShow: true})} ><h6>Change Birthday Image</h6></Button>
             </Card>
             <hr/>
             <div>
             <BirthdayImage show={this.state.birthdayShow} onHide={birthdayClose} />
            </div>
            </div>
        );
    }
}
export default Birthday;
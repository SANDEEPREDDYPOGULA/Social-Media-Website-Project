import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
import { AboutUser } from './AboutUser';
import { TheBox } from '../boxs/TheBox';
import { Follow } from '../home/Follow';
import { General } from '../home/General';

export class UserView extends Component {
    constructor(props){
        super(props);
        this.state ={ followShow : false 
        }
    }
    render () {

        let followClose =() => this.setState({ followShow: false });

        return (

            <div className="container">
            <div>
            <Button  color="primary" block onClick={()=> this.setState({followShow: true})} >Follow</Button>
            </div>
            <div align="center">
            <AboutUser/>    
            </div>
            <hr/>
            <div>
            <h6  align="center" >BoxS</h6>
            <Row>
            <General/>   
            <TheBox />    
            <TheBox />    
            <TheBox /> 
            </Row>       
            </div>
            <hr/>
            <div>
            <Follow show={this.state.followShow} onHide={followClose} />
            </div>
            </div>
        );
    }
}
export default UserView;
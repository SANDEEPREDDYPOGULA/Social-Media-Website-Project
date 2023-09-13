import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Button, Row, Col } from 'reactstrap';
import BoxPostComment from './BoxPostComment';

export class Gallery extends Component {
    constructor(props){
        super(props);
        this.state ={ boxpostcommentShow : false 
        }
    }
    render () {

        let boxpostcommentClose =() => this.setState({ boxpostcommentShow: false });

        return (
             <div >
             <Row xs="2">
             <Button outline color="light" size="sm" onClick={()=> this.setState({boxpostcommentShow: true})} ><Col ><img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} /></Col></Button>
             <Button outline color="light" size="sm"><Col ><img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} /></Col></Button>
             </Row>
             <Row xs="2">
             <Button outline color="light" size="sm"><Col ><img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} /></Col></Button>
             <Button outline color="light" size="sm"><Col ><img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} /></Col></Button>
             </Row>
             <Row xs="2">
             <Button outline color="light" size="sm"><Col ><img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} /></Col></Button>
             <Button outline color="light" size="sm"><Col ><img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} /></Col></Button>
             </Row>
             <hr/>
             <div>
             <BoxPostComment show={this.state.boxpostcommentShow} onHide={boxpostcommentClose} />
            </div>
             </div>
        );
    }
}
export default Gallery;
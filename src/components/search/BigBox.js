import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Card, Button } from 'reactstrap';
import { AddBig } from './AddBig';

export class BigBox extends Component {
    constructor(props){
        super(props);
        this.state ={ addbigShow : false }

    }
    render () {

        let addbigClose =() => this.setState({ addbigShow: false });

        return (
             <div  align="center">
             <Card>     
             <h5>Bigbox</h5>
             <Button size="sm" color="primary" onClick={()=> this.setState({addbigShow: true})} >Add to Bigbox</Button>
             <hr/>
             <div>
             <img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} />    
             </div>  
             <hr/>
             <div>
             <img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} />    
             </div>
             <hr/>
             <div>
             <img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} />    
             </div>
             <hr/>
             <div>
             <img width="100%" src={weeknd} alt="no photo"  style={{ maxWidth: "30rem" }} />    
             </div>
             </Card> 
             <hr/>
             <div>
             <AddBig show={this.state.addbigShow} onHide={addbigClose} />
            </div> 
             </div>
        );
    }
}
export default BigBox;
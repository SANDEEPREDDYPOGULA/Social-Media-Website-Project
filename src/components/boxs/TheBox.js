import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Button } from 'reactstrap';

export class TheBox extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
             <div >
             <Button outline href="/boxview" color="secondary" size="sm" >
             <h6 className="mx-auto" >Boxname</h6>
             <img src={weeknd} style={{ maxWidth: 160 }}  />
             </Button>
             </div>
        );
    }
}
export default TheBox;
import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Button } from 'reactstrap';

export class TheGroup extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
             <div >
             <Button outline href="/groupview" color="secondary" size="sm" >
             <h6 className="mx-auto" >Groupname</h6>
             <img src={weeknd} style={{ maxWidth: 160 }}  />
             </Button>
             </div>
        );
    }
}
export default TheGroup;
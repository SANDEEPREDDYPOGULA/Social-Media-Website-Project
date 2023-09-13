import React, { Component } from 'react';
import weeknd from '../weeknd.jpg';
import { Button } from 'reactstrap';

export class GroupStories extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
             <div >
             <Button outline href="/momentview" color="secondary" size="sm" >
             <img src={weeknd} style={{ width: 70 }}  />
             <h6 className="mx-auto mt-3" >Username</h6>
             </Button>
             </div>
        );
    }
}
export default GroupStories;
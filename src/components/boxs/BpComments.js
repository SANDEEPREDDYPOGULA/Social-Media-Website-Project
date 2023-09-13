import React, { Component } from 'react';
import { Userinfo } from '../home/Userinfo';

export class BpComments extends Component {
    render () {
        return (
            <div className="container" >
               <div>
               <Userinfo/>
               <p>This is comment one</p>
               </div>
               <hr/>
            </div>
        );
    }
}
export default BpComments;
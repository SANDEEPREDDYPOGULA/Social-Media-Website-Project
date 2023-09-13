import React, { Component } from 'react';
import Userinfo from '../home/Userinfo';

export class FindPeople extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
            <div className="container" >
            <h5 align="center" >Find People</h5>
            <div>
            <Userinfo /> 
            <hr/>    
            </div>
            <div>
            <Userinfo /> 
            <hr/>    
            </div>
            <div>
            <Userinfo /> 
            <hr/>    
            </div>
            <div>
            <Userinfo /> 
            <hr/>    
            </div>
            <div>
            <Userinfo /> 
            <hr/>    
            </div>
            <hr/>
            </div>
        );
    }
}
export default FindPeople;
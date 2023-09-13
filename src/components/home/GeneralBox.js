import React, { Component } from 'react';
import { StoryUser } from './StoryUser';
import { GeneralPosts } from './GeneralPosts';

export class GeneralBox extends Component {
    render () {
        return (
            <div align="center" className="container">
                <div >
                <h4>Username</h4>   
                </div>
                <div>
                <StoryUser/>    
                </div>
                <div>
                <GeneralPosts/>       
                </div>
            </div>
        );
    }
}
export default GeneralBox;
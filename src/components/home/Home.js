import React, { Component } from 'react';
import Create from './Create';
import { StoriesComp } from './StoriesComp';
import { Feed } from './Feed';

export class Home extends Component {
    constructor(props){
        super(props);
       }

    render () {

        return (

            <div className="container">
            <div >
            <h5>Home</h5> 
            </div>
            <div>
            <Create/>
            </div>
            <div>
            <h6>Stories</h6>
            </div>
            <div>
            <StoriesComp/>
            </div>
            <hr/>
            <div >
            <Feed/>
            </div>
            </div>
        );
    }
}
export default Home;
import React, { Component } from 'react';
import FeedPost from './FeedPost';

export class Feed extends Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
       
            <div >
            <FeedPost/>
            </div>
        );
    }
}
export default Feed;
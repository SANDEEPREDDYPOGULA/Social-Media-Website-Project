import React, { Component } from 'react';
import TheBox from '../boxs/TheBox';
import { Row } from 'reactstrap';

export class BoxSearch extends Component {
    render () {
        return (
            <div>
            <Row >  
            <TheBox />
            <TheBox />
            <TheBox />
            <TheBox />
            <TheBox />
            <TheBox />
            </Row>  
            </div>
        );
    }
}
export default BoxSearch;
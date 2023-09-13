import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Posts } from './Posts';
import { Chatbox } from '../boxs/Chatbox';
import { GroupBoxs } from './GroupBoxs';
import { GroupAbout } from './GroupAbout';

export class GroupMenu extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this); 
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }}
        
    render () {
        return (
             
          <div >
            <Nav tabs>
             <NavItem>
             <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              <h6>Posts</h6>
             </NavLink>
             </NavItem>
             <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              <h6>Boxs</h6>
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}>
              <h6>Chatbox</h6>
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}>
              <h6>About</h6>
            </NavLink>
            </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
            <Row>
            <Col sm="12">
            <Posts/>    
            </Col>
            </Row>
            </TabPane>
            <TabPane tabId="2">
            <Row>
            <Col sm="12">
            <GroupBoxs/>    
            </Col>
            </Row>
            </TabPane>
            <TabPane tabId="3">
            <Row>
            <Col sm="12">
            <Chatbox/>    
            </Col>
            </Row>
            </TabPane>
            <TabPane tabId="4">
            <Row>
            <Col sm="12">
            <GroupAbout/>    
            </Col>
            </Row>
            </TabPane>
            </TabContent>
          </div>
        );
    }
}
export default GroupMenu;


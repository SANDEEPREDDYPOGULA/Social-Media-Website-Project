import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,Row, Col,Button } from 'reactstrap';
import classnames from 'classnames';
import { Modal } from 'react-bootstrap';
import PeopleSearch from './PeopleSearch';
import BoxSearch from './BoxSearch';
import GroupSearch from './GroupSearch';

export class SearchResults extends Component {
    constructor(props){
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
            <Modal
            {...this.props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Search Results
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div >
            <Nav tabs>
             <NavItem>
             <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              <h6>Accounts</h6>
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
              <h6>Groups</h6>
            </NavLink>
            </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
            <Row>
            <Col sm="12">
             <PeopleSearch />
            </Col>
            </Row>
            </TabPane>
            <TabPane tabId="2">
            <Row>
            <Col sm="12">
             <BoxSearch />
            </Col>
            </Row>
            </TabPane>
            <TabPane tabId="3">
            <Row>
            <Col sm="12">
             <GroupSearch />
            </Col>
            </Row>
            </TabPane>
            </TabContent>
           </div>
            </Modal.Body>
            <Modal.Footer>
             <Button outline color="primary" onClick={this.props.onHide}>Close</Button>
             </Modal.Footer>
             </Modal>
            </div>
        );
    }
}
export default SearchResults;
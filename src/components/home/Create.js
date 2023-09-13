import React, { Component } from 'react';
import { Button,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap'; 
import { CreatePost } from './CreatePost';
import { CreateBox } from './CreateBox';
import { CreateGroup } from './CreateGroup';

export class Create extends Component {
    constructor(props){
        super(props);
        this.state ={ postShow : false ,
                      boxShow : false ,
                      groupShow : false ,
        }
    }
    render () {

        let postClose =() => this.setState({ postShow: false });
        let boxClose =() => this.setState({ boxShow: false });
        let groupClose =() => this.setState({ groupShow: false });

        return (
            <div >
                <div>
                <Button color="primary" size="sm" block >
                <UncontrolledDropdown  >
                <DropdownToggle nav caret style={{ color:"white" }} >
                <span>Create</span>
                </DropdownToggle>
                <DropdownMenu right >
                <DropdownItem>
                <Button  color="primary" onClick={()=> this.setState({postShow: true})} block>Post</Button> 
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem >
                <Button  color="primary" onClick={()=> this.setState({boxShow: true})} block>Box</Button> 
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Button  color="primary" onClick={()=> this.setState({groupShow: true})} block>Group</Button> 
                </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
                </Button>
                </div>
                <div>
                    <CreatePost show={this.state.postShow} onHide={postClose} />
                </div>
                <div>
                    <CreateBox show={this.state.boxShow} onHide={boxClose} />
                </div>
                <div>
                    <CreateGroup show={this.state.groupShow} onHide={groupClose} />
                </div>
            </div>
        );
    }
}
export default Create;
import React, { Component } from 'react';
import { Button, Row } from 'reactstrap'; 
import { CreateStory} from './CreateStory';
import { StoryUser } from './StoryUser';

export class StoriesComp extends Component {
    constructor(props){
        super(props);
          this.state ={ 
              addstoryShow : false 
        };
    }
    render () {

        let addstoryClose =() => this.setState({ addstoryShow: false });

        return (
       
            <div >
                <div className="container">
                <Row>
                <StoryUser/>
                <StoryUser/>
                <StoryUser/>
                <StoryUser/>
                <StoryUser/>
                </Row>
                </div>
                <div >
                <Button color="primary" size="sm" onClick={()=> this.setState({addstoryShow: true})} block><span>Add Story</span></Button>
                </div>
                <div>
                <CreateStory show={this.state.addstoryShow} onHide={addstoryClose} />
                </div>
            </div>
        );
    }
}
export default StoriesComp;
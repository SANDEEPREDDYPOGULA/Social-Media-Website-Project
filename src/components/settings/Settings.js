import React, { Component } from 'react';
import { Button } from 'reactstrap';
import AboutUs from './AboutUs';
import Terms from './Terms';
import Feedback from './Feedback';
import Help from './Help';

export class Settings extends Component {
    constructor(props){
        super(props);
          this.state ={ feedbackShow : false ,
                        termsShow : false ,
                        aboutShow : false ,
                        helpShow : false ,
                       }
    }
    render () {

        let feedbackClose =() => this.setState({ feedbackShow: false });
        let termsClose =() => this.setState({ termsShow: false });
        let aboutClose =() => this.setState({ aboutShow: false });
        let helpClose =() => this.setState({ helpShow: false });


        return (
            <div className="container">
                <div>
                <h5 align="center"> Settings </h5>
                </div>
                <div>
                <Button outline color="primary" onClick={()=> this.setState({helpShow: true})} block>Help</Button> 
                </div>
                <div>
                <Button outline color="primary" onClick={()=> this.setState({feedbackShow: true})} block>Feedback</Button> 
                </div>
                <div>
                <Button outline color="primary" onClick={()=> this.setState({termsShow: true})} block>Terms and Privacy</Button> 
                </div>
                <div>
                <Button outline color="primary" onClick={()=> this.setState({aboutShow: true})} block>About 8thtale</Button> 
                </div>
                <div>
                    <Help show={this.state.helpShow} onHide={helpClose} />
                </div>
                <div>
                   <Feedback show={this.state.feedbackShow} onHide={feedbackClose} />
                </div>
                <div>
                    <Terms show={this.state.termsShow} onHide={termsClose} />
                </div>
                <div>
                    <AboutUs show={this.state.aboutShow} onHide={aboutClose} />
                </div>
            </div>
        );
    }
}
export default Settings;
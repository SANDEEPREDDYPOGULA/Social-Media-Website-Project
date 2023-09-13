import React, { Component } from 'react';
import  Stories from 'react-insta-stories';

export class StoryView extends Component {
	render() {
		return (
      <div align="center">
			<Stories
				stories={stories}
				defaultInterval={1500}
				maxwidth="100%"
		 	/>
      </div>
		);
	}
}
export default StoryView;

const stories = [
	{
		url:
			'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
		header: {
			heading: 'Mohit Karekar',
			subheading: 'Posted 32m ago',
			profileImage: 'https://picsum.photos/1080/1920'
		}
	},
	{
    url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
    header: {
			heading: 'Mohit Karekar',
			subheading: 'Posted 32m ago',
			profileImage: 'https://picsum.photos/1080/1920'
		},
		type: 'video',
		duration: 1000
	},
];
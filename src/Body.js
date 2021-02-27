import React from 'react';
import Text from './Text';
import Image from './Image';
import Video from './Video';
import Table from './Table';
import Form from './Form';

class Body extends React.Component {
	render() {
		const pages = [
			<Text />,
			<Image />,
			<Video />,
			<Table />,
			<Form />
		];
			
		return (
			pages[this.props.activeTab]
		);
	}
}

export default Body;
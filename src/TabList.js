import React from 'react';
import Tab from "./Tab";

class TabList extends React.Component {	
	render() {
		const pages = ["Text", "Image", "Video", "Table", "Form"];
		
		// Using index as key here because order will never change
		return (
			<ul className = "navbar">
			{pages.map((page, index) => <Tab
				key={index}
				id={index}
				text={page}
				title={page + " Webpage"}
				active={index === this.props.activeTab}
				callback={this.props.callback}
			/> )}
			</ul>
		);
	}
}

export default TabList;
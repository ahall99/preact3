import React from 'react';
import TabList from './TabList';
import Body from './Body';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
		this.setActiveTab = this.setActiveTab.bind(this);
		
		this.titles = [
			"Text Webpage",
			"Image Webpage",
			"Video Webpage",
			"Table Webpage",
			"Form Webpage"
		];
	}
	
	setActiveTab(id) {
		document.title = this.titles[id];		
		this.setState({activeTab: id});
	}
	
	render() {
		return (
			<div className="App">
				<TabList activeTab={this.state.activeTab} callback={this.setActiveTab}/>
				<Body activeTab={this.state.activeTab}/>
			</div>
		);
	}
}

export default App;

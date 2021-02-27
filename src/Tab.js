import React from 'react';

class Tab extends React.Component {
	render() {
		return (
			<li><button
				onClick={() => this.props.callback(this.props.id)}
				title={this.props.title}
				className={this.props.active ? "active" : ""}
			>{this.props.text}</button></li>
		);
	}
}

export default Tab;
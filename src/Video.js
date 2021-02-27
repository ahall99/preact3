import React from 'react';
import video1 from "./img/NickelStack.mp4";
import video2 from "./img/sierpinscoob.mp4";

// Misleading title - video page
class Video extends React.Component {
	// Overlay pretty much identical to Image
	constructor(props) {
		super(props);
		this.state = {
			overlayEnabled: false,
			overlaySrc: "",
			overlayTitle: ""
		}
		this.enableOverlay = this.enableOverlay.bind(this);
		this.disableOverlay = this.disableOverlay.bind(this);
	}
	
	enableOverlay(src, title) {
		this.setState( {
			overlayEnabled: true,
			overlaySrc: src,
			overlayTitle: title
		});
	}
	
	disableOverlay() {
		this.setState({overlayEnabled: false});
	}
	
	render() {
		return (
			<>
			<h2>Shader Videos</h2>
			<p>These are videos of unpublished shaders. While the same two are duplicated to demonstrate responsiveness, by checking the JS you can see that the overlay is not hardcoded for these two particular videos.</p>
			
			<div className="gallery">
				<VideoElement callback={this.enableOverlay} src={video1} title="Continuous Nickelback Spiral" />
				<VideoElement callback={this.enableOverlay} src={video2} title="Sierpinscoob" />

			</div>
			
			<div id="overlay" onClick={this.disableOverlay} class={this.state.overlayEnabled ? "" : "invisible"}>
				<video onClick={(e) => e.stopPropagation()} id="overlay-media" autoPlay controls loop muted title={this.state.overlayTitle} src={this.state.overlaySrc}></video>
			</div>
			</>
		);
	}
}

// Misleading title - individual video element
class VideoElement extends React.Component {
	render() {
		return (
			<video autoPlay loop muted onClick={() => this.props.callback(this.props.src, this.props.title)} src={this.props.src} title={this.props.title} />
		);
	}
}

export default Video;
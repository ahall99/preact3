import React from 'react';
import img1 from "./img/DNA.png";
import img2 from "./img/Mandelzoink.jpg";
import img3 from "./img/InverseMandelbrot.jpg";
import img4 from "./img/julia3.png";
import img5 from "./img/kaleidoscoob.png";

// Misleading title - image page
class Image extends React.Component {
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
	
	scrollToTop() {
		window.scrollTo(0, 0);
	}
	
	render() {
		// Note- I recognize it would be better to create arrays of sources/titles
		// and map over them to utilize React better (like in the navbar)
		return (
			<>
			<h2>Shader Gallery</h2>
			<p>These are still images of some of my unpublished or modified shaders. Duplicates are also included to demonstrate the responsiveness / scroll to top button.</p>
			<div className="gallery">
			
					<Photo callback={this.enableOverlay} src={img1} title="Recursive DNA Spiral" />
					<Photo callback={this.enableOverlay} src={img2} title="Mandelbrot Heightmap Zoom" />
					<Photo callback={this.enableOverlay} src={img3} title="Inverse Julia Set" />
					<Photo callback={this.enableOverlay} src={img4} title="3-Julia Set" />
					<Photo callback={this.enableOverlay} src={img5} title="Kaleidoscope Tube Simulation" />
					<Photo callback={this.enableOverlay} src={img1} title="Recursive DNA Spiral" />
					<Photo callback={this.enableOverlay} src={img2} title="Mandelbrot Heightmap Zoom" />
					<Photo callback={this.enableOverlay} src={img3} title="Inverse Julia Set" />
					<Photo callback={this.enableOverlay} src={img4} title="3-Julia Set" />
					<Photo callback={this.enableOverlay} src={img5} title="Kaleidoscope Tube Simulation" />
					<Photo callback={this.enableOverlay} src={img1} title="Recursive DNA Spiral" />
					<Photo callback={this.enableOverlay} src={img2} title="Mandelbrot Heightmap Zoom" />
					<Photo callback={this.enableOverlay} src={img3} title="Inverse Julia Set" />
					<Photo callback={this.enableOverlay} src={img4} title="3-Julia Set" />
					<Photo callback={this.enableOverlay} src={img5} title="Kaleidoscope Tube Simulation" />
					
			</div>
			
			<div id="overlay" onClick={this.disableOverlay} className={this.state.overlayEnabled? "" : "invisible"}>
				<img onClick={(e) => e.stopPropagation()} id="overlay-media" src={this.state.overlaySrc} title={this.state.overlayTitle}/>
			</div>
			
			<button onClick={this.scrollToTop} id="scroll" type="button">Scroll to top</button>
			</>
		);
	}
}

// Misleading title - individual image
class Photo extends React.Component {
	render() {
		return (
			<img onClick={() => this.props.callback(this.props.src, this.props.title)} src={this.props.src} title={this.props.title} />
		);
	}
}

export default Image;
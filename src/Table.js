import React from 'react';

class Table extends React.Component {
	render() {
		return (
			<>
			<h2>Shader Table</h2>
			<p>These are links to some of my favorite shaders on my <a href="https://www.shadertoy.com/user/amhall" title="amhall - Shadertoy">Shadertoy profile</a>.</p>
			<table>
				<thead>
					<tr>
						<th>Shader</th>
						<th>Description</th>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td><a href="https://www.shadertoy.com/view/3sXczj" title = "Triangles - amhall">Triangles</a></td>
						<td>A zooming 2D triangle fractal.</td>
					</tr>
					<tr>
						<td><a href="https://www.shadertoy.com/view/wtXyWX" title="Interactive Mandelbrot Heightmap">Interactive Mandelbrot Heightmap</a></td>
						<td>A raymarched heightmap of the <a href="https://en.wikipedia.org/wiki/Mandelbrot_set" title="Mandelbrot Set - Wikipedia">Mandelbrot set</a>.</td>
					</tr>
					<tr>
						<td><a href="https://www.shadertoy.com/view/wsVBz1" title="Sierpinski Tetrahedron - Final">Sierpinski Tetrahedron</a></td>
						<td>A raymarched <a href="https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle#Analogues_in_higher_dimensions" title="Sierpinski Triangle - Wikipedia">Sierpinski tetrahedron</a>. This was done for a school project, along with a document describing how to write this shader from scratch, with no prior computer graphics knowledge.</td>
					</tr>
				</tbody>
			</table>
			</>
		);
	}
}

export default Table;
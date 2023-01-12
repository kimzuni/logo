/*
 * © 2023 kimzuni <hello@kimzuni.com>
 * Create Date : 2023.01.12
 * Latest Date : 2023.01.12
 */



const svg_draw_favicon = {
	"name": "favicon",
	"viewBox": "0 0 64 64",
	"height": 64,
	"width": 64,
	"count": 0,
	"code": ""
}
svg_draw_favicon.code = `
	<path	d="m 1,33 h 30 v 3 l -26,24 h 26 v 3 h -30 v -3 l 26,-24 h -26 z"
		stroke-width="2"
	/>
	<path	d="m 36.75,24.75 h 22.5 v 2.25 l -19.5,18 h 19.5 v 2.25 h -22.5 v -2.25 l 19.5,-18 h -19.5 z"
		stroke-width="1.5"
	/>
	<path	d="m 26.5,4.5 h 15 v 1.5 l -13,12 h 13 v 1.5 h -15 v -1.5 l 13,-12 h -13 z"
		stroke-width="1"
	/>
	<path	d="m 53.15,0.35 h 10.5 v 1.05 l -9.1,8.4 h 9.1 v 1.05 h -10.5 v -1.05 l 9.1,-8.4 h -9.1 z"
		stroke-width="0.7"
	/>
`;



const f_svg_draw_favicon = function(svg_draw_box) {
	svg_draw_favicon.count++;
	const svg_draw_info = svg_draw_favicon;

	let svg_draw_code = `<svg viewBox="${svg_draw_info.viewBox}" draw="${svg_draw_info.name}" fill="var(--svg-draw-color, #5cc9ff)" stroke="var(--svg-draw-color, #5cc9ff)">`;
	if (svg_draw_info.count == 1) {
		svg_draw_code += `<symbol id="svg-draw-${svg_draw_info.name}">${svg_draw_info.code}</symbol>`;
	}
	svg_draw_code += `<use href="#svg-draw-${svg_draw_info.name}"/></svg>`;

	svg_draw_box.outerHTML = svg_draw_code;
}



window.addEventListener("load", function() {
	for (let svg_draw_box of document.querySelectorAll(`svg[draw="${svg_draw_favicon.name}"]`)) {
		f_svg_draw_favicon(svg_draw_box);
	}
});

/*
 * © 2023 kimzuni <hello@kimzuni.com>
 * Create Date : 2023.01.12
 * Latest Date : 2023.01.16
 */



const svg_draw_blog = {
	"name": "blog",
	"viewBox": "0 0 64 64",
	"height": 64,
	"width": 64,
	"count": 0,
	"color": "var(--svg-draw-color, #5cc9ff)",
	"code": ""
}
svg_draw_blog.code = `
	<g stroke-width="0">
		<path d="m 0,28 h 15 c 10,0 10,9 10,9 s 0,6.5 -7,9 c 8,2 8,9 8,9 s 0,9 -11,9 h -10 v -4 h 10 c 6.5,0 6.5,-6 6.5,-6 s 0,-6 -6.5,-6 h -10 v -4 h 10 c 5,0 5,-6 5,-6 s 0,-6 -5,-6 h -10 v 32 h -5 z"/>
		<path d="m 36,24 h 24 v 3.75 l -18,16.5 h 18 v 3.75 h -24 v -3.75 l 18,-16.5 h -18 z"/>
		<path d="m 26,4 h 16 v 2.5 l -12,11 h 12 v 2.5 h -16 v -2.5 l 12,-11 h -12 z"/>
		<path d="m 52.8,0 h 11.2 v 1.75 l -8.4,7.7 h 8.4 v 1.75 h -11.2 v -1.75 l 8.4,-7.7 h -8.4 z"/>
	</g>
`;



const f_svg_draw_blog = function(svg_draw_box) {
	svg_draw_blog.count++;
	const svg_draw_info = svg_draw_blog;

	let svg_draw_code = `<svg viewBox="${svg_draw_info.viewBox}" draw="${svg_draw_info.name}" fill="${svg_draw_info.color}"">`;
	if (svg_draw_info.count == 1) {
		svg_draw_code += `<symbol id="svg-draw-${svg_draw_info.name}">${svg_draw_info.code}</symbol>`;
	}
	svg_draw_code += `<use href="#svg-draw-${svg_draw_info.name}"/></svg>`;

	svg_draw_box.outerHTML = svg_draw_code;
}



window.addEventListener("load", function() {
	for (let svg_draw_box of document.querySelectorAll(`svg[draw="blog"]`)) {
		f_svg_draw_blog(svg_draw_box);
	}
});

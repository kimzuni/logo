/*
 * © 2023 kimzuni <hello@kimzuni.com>
 * Create Date : 2023.06.29
 * Latest Date : 2023.06.29
 */



const svg_draw_mail = {
	"name": "mail",
	"viewBox": "0 0 64 53",
	"height": 53,
	"width": 64,
	"count": 0,
	"color": "var(--svg-draw-color, #5cc9ff)",
	"code": ""
}
svg_draw_mail.code = `
	<path	d="m 2.5,18.5 v 32 h 59 v -32 l -29.5,16 -29.5-16 29.5,-16 29.6,16"
		fill="none"
		stroke-width="5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
`;



const f_svg_draw_mail = function(svg_draw_box) {
	svg_draw_mail.count++;
	const svg_draw_info = svg_draw_mail;

	let svg_draw_code = `<svg viewBox="${svg_draw_info.viewBox}" draw="${svg_draw_info.name}" stroke="${svg_draw_info.color}">`;
	if (svg_draw_info.count == 1) {
		svg_draw_code += `<symbol id="svg-draw-${svg_draw_info.name}">${svg_draw_info.code}</symbol>`;
	}
	svg_draw_code += `<use href="#svg-draw-${svg_draw_info.name}"/></svg>`;

	svg_draw_box.outerHTML = svg_draw_code;
}



window.addEventListener("load", function() {
	for (let svg_draw_box of document.querySelectorAll(`svg[draw="mail"]`)) {
		f_svg_draw_mail(svg_draw_box);
	}
});

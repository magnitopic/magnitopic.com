/**
 * The site mark: the 16×16 pixel-art Earth from favicon.ico, redrawn in the
 * site palette (ocean = graphite, land = plum). One module = one hard-edged
 * square, so pick a `size` that is a multiple of 16 to keep pixels crisp.
 */
const GLOBE = [
	"       11       ",
	"     111111     ",
	"   2111111122   ",
	"  212211221112  ",
	"  222211121222  ",
	" 22221111112222 ",
	" 22221111222222 ",
	"2222111112211222",
	"2221111111111211",
	" 22111112221211 ",
	" 21111122222111 ",
	"  221112222221  ",
	"  222112222221  ",
	"   2221112222   ",
	"     211112     ",
	"       11       ",
];

// Merge horizontal runs of the same colour into single rects
const runs = [];
GLOBE.forEach((row, y) => {
	let x = 0;
	while (x < row.length) {
		const c = row[x];
		if (c === " ") {
			x++;
			continue;
		}
		let end = x;
		while (end + 1 < row.length && row[end + 1] === c) end++;
		runs.push({ x, y, w: end - x + 1, land: c === "2" });
		x = end + 1;
	}
});

const PixelGlobe = ({ size = 32, className = "", title }) => (
	<svg
		viewBox="0 0 16 16"
		width={size}
		height={size}
		shapeRendering="crispEdges"
		className={className}
		role={title ? "img" : undefined}
		aria-label={title}
		aria-hidden={title ? undefined : true}
	>
		{runs.map(({ x, y, w, land }) => (
			<rect
				key={`${x}-${y}`}
				x={x}
				y={y}
				width={w}
				height="1"
				fill={land ? "var(--plum)" : "var(--graphite)"}
				opacity={land ? 1 : 0.6}
			/>
		))}
	</svg>
);

export default PixelGlobe;

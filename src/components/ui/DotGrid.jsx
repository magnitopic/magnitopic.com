/**
 * 3×3 grid of circles — the site's mark. `filled` lists the indices (0–8,
 * row-major) drawn in the accent colour; the rest are graphite.
 */
const DotGrid = ({ filled = [], size = 24, className = "", title }) => (
	<svg
		viewBox="0 0 30 30"
		width={size}
		height={size}
		className={className}
		role={title ? "img" : undefined}
		aria-label={title}
		aria-hidden={title ? undefined : true}
	>
		{Array.from({ length: 9 }, (_, i) => (
			<circle
				key={i}
				cx={5 + (i % 3) * 10}
				cy={5 + Math.floor(i / 3) * 10}
				r="4"
				fill={filled.includes(i) ? "var(--plum)" : "var(--graphite)"}
				opacity={filled.includes(i) ? 1 : 0.55}
			/>
		))}
	</svg>
);

export default DotGrid;

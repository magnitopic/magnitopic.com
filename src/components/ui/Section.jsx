/**
 * Rail + content row separated from the previous one by a hairline.
 * Left rail (3 cols) carries the index number and rotated label.
 */
export const Container = ({ as: Tag = "div", className = "", ...props }) => (
	<Tag
		className={`mx-auto w-full max-w-[1320px] px-4 md:px-6 ${className}`}
		{...props}
	/>
);

const Section = ({ id, index, label, children, className = "" }) => (
	<section
		aria-labelledby={`${id}-heading`}
		className={`border-t border-rule ${className}`}
	>
		<Container className="grid grid-cols-1 gap-x-6 gap-y-6 py-12 md:grid-cols-12 md:py-20">
			<div className="flex gap-3 md:col-span-3 md:flex-col md:justify-between">
				<span className="num text-graphite" aria-hidden="true">
					{index}
				</span>
				<h2 id={`${id}-heading`} className="rail-label">
					{label}
				</h2>
			</div>
			<div className="md:col-span-9">{children}</div>
		</Container>
	</section>
);

export default Section;

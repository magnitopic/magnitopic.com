import React from "react";
import Link from "next/link";

interface SocialsLinkButtonProps {
	link: string;
	icon: string;
	/** Accessible name for the link, e.g. "GitHub" */
	label: string;
}

const SocialsLinkButton: React.FC<SocialsLinkButtonProps> = ({
	link,
	icon,
	label,
}) => {
	return (
		<Link
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${label} (opens in new tab)`}
			className="flex items-center justify-center w-12 h-12 text-content-muted bg-white/5 hover:bg-surface-tertiary rounded-lg transition-all hover:scale-105 hover:text-content-accent border border-white/10 hover:border-primary-400/50"
		>
			{/* Icon is decorative — the aria-label on the link provides the name */}
			<i className={icon} aria-hidden="true" />
		</Link>
	);
};

export default SocialsLinkButton;

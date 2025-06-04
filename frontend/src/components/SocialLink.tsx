import { FC } from "react";

type SocialLinkProps = {
	href: string;
	label: string;
	path: string;
	iconSize?: number;
};

const SocialLink: FC<SocialLinkProps> = ({
	href,
	label,
	path,
	iconSize = 8,
}) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener"
			className="text-secondary hover:text-bgreen"
			aria-label={label}
		>
			<svg
				className={`w-${iconSize} h-${iconSize}`}
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d={path} />
			</svg>
		</a>
	);
};

export default SocialLink;

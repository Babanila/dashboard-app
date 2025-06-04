import type { FC } from "react";
import { NavLink, type NavLinkRenderProps } from "react-router";

export type NavLinksProps = {
	navItems: string[];
};

const NavLinks: FC<NavLinksProps> = ({ navItems }) => {
	return (
		<>
			{navItems.map((ni) => {
				const exactPath = ni.toLowerCase();
				return (
					<NavLink
						to={`/${exactPath}`}
						key={ni}
						className={({ isActive }: NavLinkRenderProps) => {
							return `hover:text-bgreen selection:bg-bblue ${
								isActive
									? "text-bgreen font-semibold "
									: "text-secondary font-normal"
							}`;
						}}
					>
						{ni}
					</NavLink>
				);
			})}
		</>
	);
};

export default NavLinks;

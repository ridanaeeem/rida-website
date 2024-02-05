import React from "react";
import Link from "next/link";

interface NavLinkProps {
	heading: string;
}

const NavLink: React.FC<NavLinkProps> = ({ heading }) => {
	return (
		<Link className="" href={`#${heading.toLowerCase()}`}>
			{heading}
		</Link>
	);
};

export default function Nav() {
	return (
		<nav className="flex flex-col justify-between text-xl">
			<NavLink heading="Education"></NavLink>
			<NavLink heading="Experiences"></NavLink>
			<NavLink heading="Projects"></NavLink>
		</nav>
	);
}

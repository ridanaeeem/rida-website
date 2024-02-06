import React from "react";
import Link from "next/link";

export default function Nav() {
	const NavLink = ({ heading }: { heading: string }) => {
		return (
			<Link className="" href={`#${heading.toLowerCase()}`}>
				{heading}
			</Link>
		);
	};
	return (
		<nav className="flex flex-col justify-between text-xl">
			<NavLink heading="Education"></NavLink>
			<NavLink heading="Experiences"></NavLink>
			<NavLink heading="Projects"></NavLink>
		</nav>
	);
}

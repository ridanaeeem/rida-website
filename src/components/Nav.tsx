import React from "react";
import Link from "next/link";

const NavLink = (heading: any) => {
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

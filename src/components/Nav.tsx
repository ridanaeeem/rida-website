import React from "react";
import Link from "next/link";

export default function Nav({ highlightNav }: { highlightNav: string }) {
	const NavLink = ({ heading }: { heading: string }) => {
		return (
			<Link
				className={`hover:text-white pr-5 md:p-0 text-xl ${
					highlightNav == heading ? "text-white" : "text-gray"
				}`}
				href={`#${heading.toLowerCase()}`}>
				{highlightNav == heading ? "——— " : null}
				{heading}
			</Link>
		);
	};
	return (
		<nav className="flex md:flex-col justify-between text-xl">
			<NavLink heading="Education"></NavLink>
			<NavLink heading="Experience"></NavLink>
			<NavLink heading="Projects"></NavLink>
		</nav>
	);
}

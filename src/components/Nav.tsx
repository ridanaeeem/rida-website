import React from "react";
import Link from "next/link";

export default function Nav() {
	return (
		<nav className="flex flex-col justify-between text-xl">
			<Link className="" href="#education">
				Education
			</Link>
			<Link className="" href="#experiences">
				Experiences
			</Link>
			<Link className="" href="#projects">
				Projects
			</Link>
		</nav>
	);
}

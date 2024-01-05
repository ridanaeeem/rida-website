import React from "react";
import Link from "next/link";

export default function Nav() {
	return (
		<nav className="flex justify-between text-xl">
			<div className="flex justify-start">
				<Link href="/">Home</Link>
			</div>
			<div className="flex justify-end">
				<Link className="rightNav" href="/">
					Education
				</Link>
				<Link className="rightNav" href="/">
					Experiences
				</Link>
				<Link className="rightNav" href="/">
					Projects
				</Link>
			</div>
		</nav>
	);
}

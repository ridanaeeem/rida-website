import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex justify-center text-xl">
			<div>Get in contact with me: </div>
			<a className="rightNav" href="mailto: ridan@bu.edu">
				<div className="hover-underline-animation">ridan@bu.edu</div>
			</a>
			<a className="rightNav" href="https://www.linkedin.com/in/rida-naeem-/" target="_blank">
				<div className="hover-underline-animation">LinkedIn</div>
			</a>
			<a className="rightNav" href="https://github.com/ridanaeeem" target="_blank">
				<div className="hover-underline-animation">Github</div>
			</a>
		</footer>
	);
}

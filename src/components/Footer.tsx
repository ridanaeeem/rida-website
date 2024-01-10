import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="flex text-xl fixed bottom-20">
			{/* <div>Get in contact with me: </div> */}
			<a className="invert pr-4" href="https://www.linkedin.com/in/rida-naeem-/" target="_blank">
				<img
					className="h-7 object-contain"
					src="https://cdn-icons-png.flaticon.com/512/38/38669.png"
					alt="LinkedIn logo"></img>
			</a>
			<a className="invert pr-4" href="https://github.com/ridanaeeem" target="_blank">
				<img
					className="h-7 object-contain"
					src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
					alt="GitHub logo"></img>
			</a>
			<a className="" href="mailto: ridan@bu.edu">
				<div className="hover-underline-animation">
					<div className="text-white">ridan@bu.edu</div>
				</div>
			</a>
		</footer>
	);
}

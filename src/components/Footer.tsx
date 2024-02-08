import React from "react";
import Image, { StaticImageData } from "next/image";
import linkedIn from "/public/linkedInLogo.png";
import gitHub from "/public/gitHubLogo.png";

export default function Footer() {
	return (
		<footer className="flex md:text-xl md:fixed md:bottom-20">
			{/* <div>Get in contact with me: </div> */}
			<a className="invert pr-4" href="https://www.linkedin.com/in/rida-naeem-/" target="_blank">
				{/* <Image className="object-contain" height={50} src={linkedIn} alt="LinkedIn logo" /> */}
				<img
					className="h-10 md:h-7 object-contain"
					src="https://cdn-icons-png.flaticon.com/512/38/38669.png"
					alt="LinkedIn logo"></img>
			</a>
			<a className="invert pr-4" href="https://github.com/ridanaeeem" target="_blank">
				{/* <Image className="object-contain" height={50} src={gitHub} alt="GitHub logo" /> */}
				<img
					className="h-10 md:h-7 object-contain"
					src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
					alt="GitHub logo"></img>
			</a>
			<a className="hidden md:block" href="mailto: ridan@bu.edu">
				<div className="hover-underline-animation">
					<div className="text-white">ridan@bu.edu</div>
				</div>
			</a>
		</footer>
	);
}

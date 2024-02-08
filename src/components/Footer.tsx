import React from "react";
import Image, { StaticImageData } from "next/image";
import linkedIn from "/public/linkedinLogo.png";
import gitHub from "/public/gitHubLogo.png";

export default function Footer() {
	return (
		<footer className="flex text-xl fixed bottom-20">
			{/* <div>Get in contact with me: </div> */}
			<a className="invert pr-4" href="https://www.linkedin.com/in/rida-naeem-/" target="_blank">
				<Image className="object-contain" height={50} src={linkedIn} alt="LinkedIn logo" />
			</a>
			<a className="invert pr-4" href="https://github.com/ridanaeeem" target="_blank">
				<Image className="object-contain" height={50} src={gitHub} alt="GitHub logo" />
			</a>
			<a className="" href="mailto: ridan@bu.edu">
				<div className="hover-underline-animation">
					<div className="text-white">ridan@bu.edu</div>
				</div>
			</a>
		</footer>
	);
}

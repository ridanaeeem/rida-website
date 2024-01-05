import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import boston3 from "@/media/boston3.png";

export default function Projects() {
	return (
		<div>
			<Nav></Nav>
			<div className="flex flex-col justify-center m-5">
				{/* <div className="mx-auto p-10">
					<Image className="text-center rounded-full" src={profile} alt="Rida Naeem" width={150} />
				</div> */}
				<div className="font-mono text-5xl text-[#538243] text-center">Projects</div>
				<div className="text-2xl text-[#538243] justify-center">
					<div>Software Development</div>
				</div>
				<div className="flex flex-wrap m-10 text-xl">
					<div className="card w-1/2">
						<Image
							src={boston3}
							alt="Code used to analyze mouse fear behaviors in R"
							width={500}
							height={250}></Image>
						<div>Easier Recipe</div>
						<div>Full Stack Developer</div>
					</div>
					<div className="description">
						<ul>
							<li>
								<a href="https://github.com/ridanaeeem/easier-recipe" target="_blank">
									Github Repository
								</a>
							</li>
							<li>
								<a
									href="https://www.figma.com/file/j3lVntRed8GLlV5Dr5680z/Easier-Recipe?type=design&node-id=0-1&mode=design"
									target="_blank">
									Figma planning and design
								</a>
							</li>
							<li>
								Designed and developed a MERN web application for virtual recipe storing and sharing
								with Google OAuth integration
							</li>
							<li>Implemented feature for seamless conversion between imperial and metric units</li>
							<li>Integrated multiple recipe scraper APIs to enable URL-to-recipe functionality</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}

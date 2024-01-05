import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/media/profile.jpeg";
import Nav from "@/components/Nav";

export default function Home() {
	return (
		<div>
			<Nav></Nav>
			<div className="flex flex-col justify-center text-center m-5">
				<div className="mx-auto p-10">
					<Image className="text-center rounded-full" src={profile} alt="Rida Naeem" width={150} />
				</div>
				<div className="font-mono text-5xl">
					Hi! My name is <span className="text-[#538243]">Rida</span>
				</div>
				<div className="m-10 text-xl">
					& welcome to my website! I am a graduating senior currently pursuing my Bachelor&apos;s in
					Neuroscience with a minor in Computer Science at Boston University. My{" "}
					<div className="hover-underline-animation">
						<Link href="/">academic journey</Link>
					</div>{" "}
					has equipped me with a robust analytical mindset, and my{" "}
					<div className="hover-underline-animation">
						<Link href="/">work</Link>
					</div>{" "}
					as a Research Assistant has allowed me to gain experience in data analysis and modeling for a deeper
					understanding of the brain. My coursework in computer science complements this, providing a deeper
					understanding of algorithms and computational thinking. Beyond academics, my{" "}
					<div className="hover-underline-animation">
						<Link href="/">projects</Link>
					</div>{" "}
					showcase skills in software development and UI/UX design. Eager to contribute to cutting-edge
					software engineering and data analysis, I am excited about leveraging my interdisciplinary
					background to infuse creativity and analytical rigor into impactful projects in these domains.
					<br></br>
					<br></br>
					<div className="hover-underline-animation">
						<Link href="/">Find out more about me outside of work and school here.</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

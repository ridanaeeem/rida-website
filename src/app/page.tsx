"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
	// source: https://dev.to/jmalvarez/check-if-an-element-is-visible-with-react-hooks-27h8
	function useIsVisible(ref: React.RefObject<HTMLDivElement>) {
		const [isIntersecting, setIntersecting] = useState(false);
		useEffect(() => {
			const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
			observer.observe(ref.current!);
			return () => {
				observer.disconnect();
			};
		}, [ref]);
		return isIntersecting;
	}

	// Cceate ref objects
	const educationRef = useRef<HTMLDivElement>(null);
	const experiencesRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

	// Ccll useIsVisible hook with appropriate refs
	const eduVisible = useIsVisible(educationRef);
	const expVisible = useIsVisible(experiencesRef);
	const projVisible = useIsVisible(projectsRef);

	// determine what section of page to highlight
	let highlightNav = "";
	if (projVisible) highlightNav = "Projects";
	else if (expVisible) highlightNav = "Experiences";
	else if (eduVisible) highlightNav = "Education";

	return (
		<div className="p-10">
			<div className="flex flex-col md:flex-row">
				<div className="flex z-10 py-8 pl-5 md:p-0 fixed top-0 md:top-auto left-0 md:left-auto bg-dddgreen md:bg-transparent w-full md:w-2/5 flex flex-col">
					<div className="flex justify-between pr-0">
						<Link href="/">
							<div className="box ridaname">Rida Naeem</div>
						</Link>
						<div className="md:hidden">
							<Footer></Footer>
						</div>
					</div>
					<div className="md:m-1 mt-3">
						<div className="flex justify-between">
							<Nav highlightNav={highlightNav}></Nav>

							<div className="hidden md:block flex md:text-xl md:fixed md:bottom-20">
								<Footer></Footer>
							</div>
						</div>
					</div>
				</div>

				<div className="md:m-0 w-full relative md:ml-10 md:mt-0 flex flex-col md:flex-row">
					<div className="md:w-2/5 h-80"></div>
					<div className="flex flex-col justify-center text-left md:w-3/5">
						<div className="absolute top-0 mt-40 md:mt-5">
							Welcome to my website! I&apos;m a graduating senior studying Neuroscience and Computer
							Science at Boston University. Scroll through to learn more about my{" "}
							<div className="hover-underline-animation">
								<Link href="#education">education</Link>
							</div>
							,{" "}
							<div className="hover-underline-animation">
								<Link href="#experiences">experience</Link>
							</div>
							, and{" "}
							<div className="hover-underline-animation">
								<Link href="#projects">projects!</Link>
							</div>
							<br></br>
							<br></br>
							Outside of my academics and work, I really enjoy finding opportunities to embrace my
							creative side, whether that be through playing the guitar, taking photos, or painting!
							{/* I also enjoy bouldering and skateboarding in my free time. */}
							{/* Check out some of my work{" "}
							<div className="hover-underline-animation">
								<Link href="/">here</Link>
							</div>
							, if you&apos;d like! */}
							<br></br>
							<br></br>
						</div>
						<div id="education" ref={educationRef}>
							<Education></Education>
						</div>
						<div id="experiences" ref={experiencesRef}>
							<Experiences></Experiences>
						</div>
						<div id="projects" ref={projectsRef}>
							<Projects></Projects>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

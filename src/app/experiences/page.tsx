import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import work1 from "@/media/work1.png";
import work2 from "@/media/work2.png";
import work3 from "@/media/work3.png";

export default function Experiences() {
	return (
		<div>
			<Nav></Nav>
			<div className="flex flex-col justify-center m-5">
				<div className="flex flex-row mx-auto p-10">
					<Image
						className="mx-2 rounded-full"
						src={work1}
						alt="Mouse branes sliced via cryostat and mounted on microscope slide"
						width={200}
					/>
					<Image className="mx-2 rounded-full" src={work2} alt="Dissected fruit fly brain" width={200} />
					<Image
						className="mx-2 rounded-full"
						src={work3}
						alt="Code used to analyze mouse fear behaviors in R"
						width={200}
					/>
				</div>
				<div className="font-mono text-5xl text-[#538243] text-center">Work & Leadership Experiences</div>
				<div className="m-10 text-xl">
					<div>
						My education has allowed me to have a comprehensive understanding of the interdisciplinary
						avenues in the field of Neuroscience, as well as its intersection with the broad field of
						Computer Science. I have had the opportunity to combine the two in my study of computational
						neuroscience and neural network modeling of learning behaviors. Additionally, I have learned
						fundamental concepts and in Computer Science in my programming and software development courses.
					</div>
					<br></br>
					<div className="flex justify-between text-2xl text-[#538243]">
						<div>Boston University - Boston, MA</div>
						<div>Sep 2020 - May 2024</div>
					</div>
					<ul className="">
						<li>B.A. Neuroscience, minor Computer Science</li>
						<li>GPA: 3.73</li>
					</ul>
					<br></br>
					<div className="text-2xl text-[#538243]">Relevant Coursework</div>
					<div className="flex flex-wrap justify-between">
						<ul>
							<li>Data Structures</li>
							<li>Software Engineering</li>
							<li>Web Application Development</li>
							<li>MATLAB Programming for Research</li>
							<li>Discrete Math</li>
							<li>Linear Algebra</li>
							<li>Multivariate Calculus</li>
							<li>Differential Equations</li>
						</ul>
						<ul>
							<li>Computational Models of Brain and Behavior</li>
							<li>Principles and Methods of Neural Modeling</li>
							<li>Neuroscience Design Lab (Arduino Modeling)</li>
							<li>Cellular and Molecular Biology</li>
							<li>Principles of Neuroscience</li>
							<li>Cognitive Neuroscience</li>
							<li>General & Organic Chemistry</li>
							<li>Physics</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}

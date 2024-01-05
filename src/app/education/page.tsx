import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import boston1 from "@/media/boston1.png";
import boston2 from "@/media/boston2.png";
import boston3 from "@/media/boston3.png";

export default function Education() {
	return (
		<div>
			<Nav></Nav>
			<div className="flex flex-col justify-center m-5">
				<div className="flex flex-row mx-auto p-10">
					<Image className="mx-2 rounded-full" src={boston1} alt="BU's mascot bench" width={200} />
					<Image className="mx-2 rounded-full" src={boston2} alt="Central BU" width={200} />
					<Image className="mx-2 rounded-full" src={boston3} alt="View of the Charles from BU" width={200} />
				</div>
				<div className="font-mono text-5xl text-[#538243] text-center">Educational History</div>
				<div className="m-10 text-xl">
					<div>
						My education has allowed me to have a comprehensive understanding of the interdisciplinary
						avenues in the field of Neuroscience, as well as its intersection with the broad field of
						Computer Science. I have had the opportunity to combine the two in my study of computational
						neuroscience and neural network modeling of learning behaviors. Additionally, I have learned
						fundamental concepts of Computer Science in my programming and data structures classes, and I
						have also had the opportunity to apply these concepts in my software development courses.
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
					<br></br>
					<div className="text-2xl text-[#538243]">On-Campus Involvement</div>

					<div className="flex justify-between text-2xl text-[#538243]">
						<div>PR Coordinator | Women in Neuroscience </div>
						<div>Dec 2020 - present</div>
					</div>
					<ul className="">
						<li>
							Organize and promote club events, including mentorship matching between undergraduate and
							graduate students and general body meetings{" "}
						</li>
						<li>
							Maintain club’s social media presence and communicate with other clubs to plan joint events{" "}
						</li>
					</ul>
					<br></br>

					<div className="flex justify-between text-2xl text-[#538243]">
						<div>Wizards Volunteer Tutor | Boston University Community Service Center</div>
						<div>Dec 2020 - May 2021</div>
					</div>
					<ul className="">
						<li>
							Created lesson plans and videos explaining various scientific topics through experimentation
							for local elementary, middle, and high schools with other tutors weekly
						</li>
					</ul>
					<br></br>

					<div className="flex justify-between text-2xl text-[#538243]">
						<div>Blog Writer | Leading Women Tomorrow</div>
						<div>Sep 2020 - May 2021</div>
					</div>
					<ul className="">
						<li>
							Wrote for the nonprofit’s Boston University chapter about women and minorities in STEM being
							affected by impostor syndrome{" "}
						</li>
					</ul>
					<br></br>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}

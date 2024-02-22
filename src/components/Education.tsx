import React from "react";
import Image from "next/image";

export default function Education() {
	return (
		<div>
			<div className="flex flex-col justify-center">
				<div className="box subheading text-center py-5">Education</div>
				<div className="">
					<div>
						My degree has allowed me to gain a truly interdisciplinary understanding of both Neuroscience
						and Computer Science, with coursework ranging from biology, chemistry, and physics, to the
						principles of computational modeling and computing.
					</div>
					<br></br>

					<div className="flex justify-between">
						<div className="text-emphasis">Boston University: Sep 2020 - May 2024</div>
					</div>
					<ul className="">
						<li>B.A. Neuroscience, minor Computer Science</li>
						<li>GPA: 3.73</li>
					</ul>
					<br></br>

					<div className="flex justify-between">
						<div className="text-emphasis">Relevant Coursework</div>
					</div>
					<ul className="">
						<li>
							Object Oriented Programming, Data Structures, Software Engineering, Software Engineering
							Practicum, Web Application Development, Introduction to Artifical Intelligence
						</li>
						<li>Discrete Math, Linear Algebra, Multivariate Calculus, Differential Equations</li>
						<li>
							MATLAB Programming for Research, Computational Models of Brain and Behavior, Principles and
							Methods of Neural Modeling, Neuroscience Arduino Modeling Lab
						</li>
					</ul>

					{/* <div className="">
						Furthermore, I have been involved in several on-campus organizations aiming to create a
						supportive community for various underrpreresented and marginalized communities in STEM. I
						strongly value these initiatives where I can support my peers who are facing similar struggles
						that I have.
					</div> */}

					{/* <br></br>
					<div className="text-emphasis">Wizards Tutor | Boston University Community Service Center</div>
					<ul className="">
						<li>
							Created lesson plans and videos explaining various scientific topics through experimentation
							for local elementary, middle, and high schools with other tutors weekly
						</li>
					</ul>

					<br></br>
					<div className="text-emphasis">Blog Writer | Leading Women Tomorrow</div>
					<ul className="">
						<li>
							Wrote for the nonprofit&apos;s Boston University chapter about women and minorities in STEM
							being affected by impostor syndrome{" "}
						</li>
					</ul> */}
				</div>
			</div>
		</div>
	);
}

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import easier1 from "/public/easierrecipe1.png";
import easier2 from "/public/easierrecipe2.png";
import culinary1 from "/public/culinarycommunity1.png";
import culinary2 from "/public/culinarycommunity2.png";
import pikmin1 from "/public/pikminprogress1.png";
import pikmin2 from "/public/pikminprogress2.png";
import fig1 from "/public/neural1.png";
import fig2 from "/public/neural2.png";

export default function Projects() {
	const SkillList = ({ skills }: { skills: Array<String> }) => {
		return (
			<ul className="flex flex-wrap mb-2">
				{skills.map((skill, index) => (
					<li
						className="list-none text-sm text-center border-solid border-2 border-mgreen px-[1rem] m-[0.25rem] rounded-xl bg-mgreen text-bgreen"
						key={index}>
						{skill}
					</li>
				))}
			</ul>
		);
	};

	const ProjectCard = ({
		title,
		role,
		githubRepo,
		deployment,
		skills,
		description,
		pic1,
		pic1alt,
		pic2,
		pic2alt,
	}: {
		title: string;
		role: string;
		githubRepo: string;
		deployment: string | null;
		skills: Array<string>;
		description: Array<string>;
		pic1: StaticImageData;
		pic1alt: string;
		pic2: StaticImageData;
		pic2alt: string;
	}) => {
		return (
			<div className="border-transparent border-2 p-4 hover:bg-gradient-radial from-black to-dgreen hover:border-dgreen rounded-xl">
				<a href={deployment ? deployment : githubRepo} target="_blank" rel="noopener noreferrer">
					<div className="text-emphasis text-xl">
						{title}
						<div className="">{role}</div>
					</div>
					<SkillList skills={skills} />
					<div className="flex justify-between my-2">
						<Image width={2000} height={2000} className="w-1/2 mr-1" src={pic1} alt={pic1alt} />
						<Image width={2000} height={2000} className="w-1/2 ml-1" src={pic2} alt={pic2alt} />
					</div>
					<ul className="flex flex-wrap">
						{description.map((item, index) => (
							<li className="" key={index}>
								{item}
							</li>
						))}
					</ul>
				</a>
			</div>
		);
	};

	return (
		<div>
			<div className="flex flex-col justify-center">
				<div className="box subheading text-center py-5">Projects</div>
				<ProjectCard
					title={"Easier Recipe"}
					role={"Full Stack Developer"}
					githubRepo={"https://github.com/ridanaeeem/easier-recipe"}
					deployment={null}
					skills={["MongoDB", "Express", "React", "Node", "Oauth", "Redux"]}
					description={[
						"Designed in Figma and proceeded to develop a MERN web application for virtual recipe storing and sharing with redux state management and Google OAuth integration",
						"Implemented feature for seamless conversion between imperial and metric units",
						"Integrated multiple recipe scraper APIs to enable URL-to-recipe functionality",
					]}
					pic1={easier1}
					pic1alt={"The home page of Easier Recipe"}
					pic2={easier2}
					pic2alt={"The main recipe page of Easier Recipe"}
				/>

				<ProjectCard
					title={"Pikmin Progress Tracker"}
					role={"Full Stack Developer"}
					githubRepo={"https://github.com/ridanaeeem/pikmin-progress-tracker"}
					deployment={"https://pikmin-progress-tracker.vercel.app/"}
					skills={["React", "TypeScript", "Next.js", "Tailwind"]}
					description={[
						"Created a React application using TypeScript and Next.js to locally track user progress in the mobile game Pikmin Bloom, with features for data visualization",
						"Currently implementing SQL database storage and user sign-in for cross-device use",
					]}
					pic1={pikmin1}
					pic1alt={"The home page of Pikmin Progress Tracker"}
					pic2={pikmin2}
					pic2alt={"The home page of Pikmin Progress Tracker with some pikmin selected"}
				/>

				<ProjectCard
					title={"Culinary Community"}
					role={"Front-End Developer, UI/UX Designer"}
					githubRepo={"https://github.com/ridanaeeem/culinary-community"}
					deployment={"https://culinary-community.vercel.app/"}
					skills={["MongoDB", "React", "TypeScript", "Next.js"]}
					description={[
						"Collaborated with a back-end developer to design and develop the front-end of a MERN web application, showcasing strong UI/UX design skills as part of a 24 hour BostonHacks project",
					]}
					pic1={culinary1}
					pic1alt={"The home page of Culinary Community"}
					pic2={culinary2}
					pic2alt={"The recipes page of Culinary Community"}
				/>

				<ProjectCard
					title={"Neural Modeling Projects"}
					role={"Computational Neuroscience"}
					githubRepo={""}
					deployment={""}
					skills={["MATLAB", "Mean-Field Modeling", "Neural Networks", "Data Analysis", "Scientific Design"]}
					description={[
						"Modeled changes in neuron voltage in MATLAB and Python using the Hodgin-Huxley, leaky integrate-and-fire, shunting, outstar, and instar equations/models",
						"Produced final project evaluating existing fear conditioning neural network and mean-field models, modifying them to account for sex differences in amygdala activity",
					]}
					pic1={fig1}
					pic1alt={
						"The normalized activity of neurons in a recurrent neural network with a specified signal function, visualized as a 2D plot"
					}
					pic2={fig2}
					pic2alt={
						"The normalized activity of neurons in a recurrent neural network with a specified signal function, visualized as a surface plot"
					}
				/>
			</div>
		</div>
	);
}

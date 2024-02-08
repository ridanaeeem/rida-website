import React from "react";
import Link from "next/link";
import Image from "next/image";

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
		pic,
	}: {
		title: string;
		role: string;
		githubRepo: string;
		deployment: string | null;
		skills: Array<string>;
		description: Array<string>;
		pic: string;
	}) => {
		return (
			<div className="border-transparent border-2 p-4 hover:bg-gradient-radial from-black to-ddgreen hover:border-ddgreen rounded-xl">
				<a href={deployment ? deployment : githubRepo} target="_blank" rel="noopener noreferrer">
					<div className="text-emphasis text-xl">
						{title}
						<div className="">{role}</div>
					</div>
					<SkillList skills={skills} />
					<div className="flex justify-between my-2">
						<img className="w-1/2 mr-1" src={pic} />
						<img className="w-1/2 ml-1" src={pic} />
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
					skills={["MongoDB", "Express", "React", "Node", "Oauth"]}
					description={[
						"Designed and developed a MERN web application for virtual recipe storing and sharing with Google OAuth integration",
						"Implemented feature for seamless conversion between imperial and metric units",
						"Integrated multiple recipe scraper APIs to enable URL-to-recipe functionality",
					]}
					pic={"https://i.imgur.com/UZyEUdg.png"}
				/>

				<ProjectCard
					title={"Pikmin Progress Tracker"}
					role={"Full Stack Developer"}
					githubRepo={"https://github.com/ridanaeeem/pikmin-progress-tracker"}
					deployment={"https://pikmin-progress-tracker.vercel.app/"}
					skills={["React", "TypeScript", "Next.js", "Tailwind"]}
					description={[
						"Created a React application using Next.js to track user progress in the mobile game Pikmin Bloom, implementing features for progress monitoring and data visualization",
					]}
					pic={"https://i.imgur.com/UZyEUdg.png"}
				/>

				<ProjectCard
					title={"Culinary Community"}
					role={"Front-End Developer, UI/UX Designer"}
					githubRepo={"https://github.com/ridanaeeem/culinary-community"}
					deployment={"https://culinary-community.vercel.app/"}
					skills={["MongoDB", "React", "Next.js"]}
					description={[
						"Collaborated with a back-end developer to design and develop the front-end of a MERN web application, showcasing strong UI/UX design skills as part of BostonHacks project",
					]}
					pic={"https://i.imgur.com/UZyEUdg.png"}
				/>

				<ProjectCard
					title={"Neural Modeling Projects"}
					role={"Computational Neuroscience"}
					githubRepo={"https://github.com/ridanaeeem/culinary-community"}
					deployment={"https://culinary-community.vercel.app/"}
					skills={["MATLAB", "Mean-Field Modeling", "Neural Networks", "Data Analysis", "Scientific Design"]}
					description={[
						"Modeled changes in neuron voltage in MATLAB and Python using the Hodgin-Huxley, leaky integrate-and-fire, shunting, outstar, and instar equations/models",
						"Produced final project evaluating existing fear conditioning neural network and mean-field models, modifying them to account for sex differences in amygdala activity",
					]}
					pic={"https://imgur.com/fTnicVJ.png"}
				/>
			</div>
		</div>
	);
}

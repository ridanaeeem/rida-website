import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
	const SkillList = ({ skills }: { skills: Array<String> }) => {
		return (
			<ul>
				{skills.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		);
	};

	return (
		<div>
			<div className="flex flex-col justify-center">
				{/* <div className="mx-auto p-10">
					<Image className="text-center rounded-full" src={profile} alt="Rida Naeem" width={150} />
				</div> */}
				<div className="box subheading text-center py-5">Projects</div>
				<div className="flex flex-wrap">
					<div>
						<div className="text-emphasis">
							Easier Recipe - Full Stack Developer{" "}
							<a
								className="hover-underline-animation"
								href="https://github.com/ridanaeeem/easier-recipe"
								target="_blank"
								rel="noopener noreferrer">
								(Github)
							</a>
						</div>
						<div className="flex">
							<div className="card w-1/2 pr-5 py-5">
								<img src="https://i.imgur.com/UZyEUdg.png" />
							</div>
							<div className="card w-1/2 pr-5 py-5">
								{/* <img src="https://i.imgur.com/4m5rrSe.png" /> */}
								<SkillList skills={["MongoDB", "Express", "React", "Node", "Oauth"]} />
							</div>
						</div>
						<div className="description">
							<ul>
								<li>
									Designed and developed a MERN web application for virtual recipe storing and sharing
									with Google OAuth integration
								</li>
								<li>Implemented feature for seamless conversion between imperial and metric units</li>
								<li>Integrated multiple recipe scraper APIs to enable URL-to-recipe functionality</li>
							</ul>
						</div>
					</div>

					<br></br>

					<div>
						<div className="text-emphasis">
							Pikmin Progress Tracker - Full Stack Developer{" "}
							<a
								className="hover-underline-animation"
								href="https://github.com/ridanaeeem/pikmin-progress-tracker"
								target="_blank"
								rel="noopener noreferrer">
								(Github)
							</a>{" "}
							<a
								className="hover-underline-animation"
								href="https://pikmin-progress-tracker.vercel.app/"
								target="_blank"
								rel="noopener noreferrer">
								(Deployment)
							</a>
						</div>
						<div className="flex">
							<div className="card w-1/2 pr-5 py-5">
								<img src="https://imgur.com/H3GKCys.png" />
							</div>
							<div className="card w-1/2 pr-5 py-5">
								<SkillList skills={["React", "Next.js"]} />
							</div>
						</div>
						<div className="description">
							<ul>
								<li>
									Created a React application using Next.js to track user progress in the mobile game
									Pikmin Bloom, implementing features for progress monitoring and data visualization
								</li>
							</ul>
						</div>
					</div>

					<br></br>

					<div>
						<div className="text-emphasis">
							Culinary Community - Front-End Developer, UI/UX Designer{" "}
							<a
								className="hover-underline-animation"
								href="https://github.com/ridanaeeem/culinary-community"
								target="_blank"
								rel="noopener noreferrer">
								(Github)
							</a>{" "}
							<a
								className="hover-underline-animation"
								href="https://culinary-community.vercel.app/"
								target="_blank"
								rel="noopener noreferrer">
								(Deployment)
							</a>
						</div>
						<div className="flex">
							<div className="card w-1/2 pr-5 py-5">
								<img src="https://imgur.com/SVc3RYv.png" />
							</div>
							<div className="card w-1/2 pr-5 py-5">
								<SkillList skills={["MongoDB", "React", "Next.js"]} />
							</div>
						</div>
						<div className="description">
							<ul>
								<li>
									Collaborated with a back-end developer to design and develop the front-end of a MERN
									web application, showcasing strong UI/UX design skills as part of BostonHacks
									project
								</li>
							</ul>
						</div>
					</div>

					<br></br>

					<div>
						<div className="text-emphasis">
							Neural Modeling Projects{" "}
							{/* <a
								className="hover-underline-animation"
								href="https://github.com/ridanaeeem/pikmin-progress-tracker"
								target="_blank">
								(Github)
							</a>{" "}
							<a
								className="hover-underline-animation"
								href="https://pikmin-progress-tracker.vercel.app/"
								target="_blank">
								(Deployment)
							</a> */}
						</div>
						<div className="flex">
							<div className="card w-1/2 pr-5 py-5">
								<img src="https://imgur.com/fTnicVJ.png" />
							</div>
							<div className="card w-1/2 pr-5 py-5">
								<ul>
									<li>MATLAB</li>
									<li>Mean-Field Modeling</li>
									<li>Neural Networks</li>
									<li>Data Analysis</li>
									<li>Scientific Design</li>
								</ul>
							</div>
						</div>
						<div className="description">
							<ul>
								<li>
									Modeled changes in neuron voltage in MATLAB and Python using the Hodgin-Huxley,
									leaky integrate-and-fire, shunting, outstar, and instar equations/models
								</li>
								<li>
									Produced final project evaluating existing fear conditioning neural network and
									mean-field models, modifying them to account for sex differences in amygdala
									activity
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

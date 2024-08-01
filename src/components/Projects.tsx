import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardFigma from "./ProjectCardFigma";
import easier1 from "/public/easierrecipe1.png";
import easier2 from "/public/easierrecipe2.png";
import culinary1 from "/public/culinarycommunity1.png";
import culinary2 from "/public/culinarycommunity2.png";
import pikmin1 from "/public/pikminprogress1.png";
import pikmin2 from "/public/pikminprogress2.png";
import fig1 from "/public/neural1.png";
import fig2 from "/public/neural2.png";
import journal1 from "/public/journal1.png";
import journal2 from "/public/journal2.png";
import tetris1 from "/public/tetrisGameplay.png";
import tetris2 from "/public/tetrisLearningCurve.png";
import arduino1 from "/public/arduinoTracking.png";
import arduino2 from "/public/arduinoPOC.png";

export default function Projects() {
	return (
		<div>
			<div className="flex flex-col justify-center">
				<div className="box subheading text-center py-5">Projects</div>
				<ProjectCard
					title={"Undergraduate Journal of Neuroscience"}
					role={"Software Engineer"}
					githubRepo={"https://github.com/ridanaeeem/win-journal"}
					deployment={"https://win-journal.vercel.app/"}
					skills={["MongoDB", "Next.js", "React", "TypeScript", "OAuth"]}
					description={[
						"Using Next.js and React, developed a platform for undergraduate students at Boston University to publish and share neuroscience research, as envisioned by BU Women in Neuroscience ",
						"Used MongoDB to store journal article submissions, contact form submissions, and journal issues",
						"Used Google OAuth to support profiles for users and admin privileges for Women in Neuroscience executive board to easily view and interact with user submissions and add journal issues to the site",
						"Created engaging stylistic effects, such as interactive flippable pdf of journal issues",
					]}
					pic1={journal1}
					pic1alt={"The home page of the Undergraduate Journal of Neuroscience"}
					pic2={journal2}
					pic2alt={"Part of the submissions page for the Undergraduate of Neuroscience"}
				/>

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
					title={"AI Game Bots"}
					role={"AI/ML Engineer"}
					githubRepo={"https://github.com/ridanaeeem/intro-artificial-intelligence"}
					deployment={null}
					skills={[
						"Java",
						"Reinforcement Learning",
						"Bayesian Inference",
						"Neural Networks",
						"Deep Learning",
						"Artificial Intelligence",
						"Machine Learning",
					]}
					description={[
						"In Java, developed reinforcement learning agent using a neural network to play Tetris, iterating through phases of training, updating, and evaluating the network culminating in an agent that can effectively score points and get “Tetris combos”",
						"In Java, developed probabilistic Bayesian agent to play Battleship against other bots, training agent to use Bayesian inference to make educated guesses on positions of enemy ships",
					]}
					pic1={tetris1}
					pic1alt={"Example gameplay of Tetris bot after several thousand training rounds"}
					pic2={tetris2}
					pic2alt={
						"The learning curve associated with the bot's progress as it learns to score higher in Tetris"
					}
				/>

				<ProjectCard
					title={"Arduino Automated Measurements for Fear Conditioning"}
					role={"Computer Vision"}
					githubRepo={"https://github.com/ridanaeeem/elevated-plus-maze"}
					deployment={""}
					skills={["C++", "Arduino", "Python", "OpenCV", "Experimental Design", "Data Analysis"]}
					description={[
						"Created hardware setup with motion detectors and webcam to measure mouse freezing activity",
						"Wrote Arduino code to collect measurements and Python code with OpenCV object recognition to locate mouse and automate data collection for fear conditioning experiment",
					]}
					pic1={arduino1}
					pic1alt={"Webcam footage of model mouse being tracked by a green dot in OpenCV"}
					pic2={arduino2}
					pic2alt={"Hardware setup for Arduino Proof of Concept"}
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
				{/* <ProjectCardFigma
					title={"ExploRx - Tech For Change Hackathon 2024"}
					role={"UI/UX Designer"}
					githubRepo={""}
					deployment={""}
					skills={["React", "MongoDB", "TypeScript", "Figma"]}
					figmaEmbed={
						"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoVRvMEUNaY66024w0ZwwqN%2FTFC-Hackathon%3Ftype%3Ddesign%26node-id%3D2-3%26t%3D7c3NUu6BrWcb3huc-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A3%26mode%3Ddesign"
					}
					description={[
						"Using Figma, designed mobile app for aggregating and comparing prescription and medical procedure costs with various insurance plans",
					]}
				/> */}

				{/* <ProjectCard
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
				/> */}
			</div>
		</div>
	);
}

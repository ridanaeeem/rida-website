import React from "react";
import Link from "next/link";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
	return (
		<div>
			<div className="flex flex-col justify-center">
				<div className="box subheading text-center py-5">Experiences</div>
				<div className="">
					<ExperienceCard
						job={"Undergraduate Research Assistant"}
						company={"Meyer Laboratory"}
						link={"https://www.meyerlabneuro.com/"}
						timeframe={"Sep 2022 - present"}
						skills={["Python", "R", "Jupyter Notebook", "Programming", "Data Analysis"]}
						description={[
							"Work with DeepLabCut (Python, deep learning model) to collect data on freezing behaviors",
							"Write scripts in MedState Notation for mice fear conditioning experiments",
							"Score hundreds of videos of mice in elevated plus maze, recording freezing and analyzing subsequent data in Microsoft Excel and R",
							"Handle mice during fear-conditioning and perform wet lab experiments, using a cryostat and vibratome to slice and mount mouse brains",
						]}
					/>
					<ExperienceCard
						job={"Peer Tutor & Training Leader"}
						company={"BU Educational Resource Center"}
						link={"https://www.bu.edu/erc/"}
						timeframe={"Sep 2021 - present"}
						skills={["Chemistry", "Teaching", "Organization"]}
						description={[
							"Work one-on-one with undergraduate students to improve their understanding of general chemistry and plan study strategies for four to six hours each week",
							"Run tutor training sessions, overseeing and providing feedback to tutor demonstrations",
						]}
					/>
					{/* <ExperienceCard
						job={"Library Assistant"}
						company={"Pickering Educational Resources Library"}
						link={""}
						timeframe={"Sep 2021 - present"}
						skills={["Customer Service"]}
						description={[
							"Responsible for staffing the front desk, making sure that books and other learning materials are in their proper locations, and ensuring smooth operations for dozens of patrons for five to seven hours per week",
						]}
					/> */}
					<ExperienceCard
						job={"PR Coordinator & Full Stack Developer"}
						company={"Women In Neuroscience"}
						link={"https://www.instagram.com/bostonuwin/?hl=en"}
						timeframe={"Dec 2020 - present"}
						skills={["React", "Software Engineering", "Social Media"]}
						description={[
							"Designed and currently developing scientific article-sharing platform for undergraduate students at BU doing research as part of initiative to promote undergraduate professional development",
							"Organize/promote club events and maintain club's social media presence to 300+ followers",
						]}
					/>
					<ExperienceCard
						job={"Instructor"}
						company={"Sylvan Learning"}
						link={""}
						timeframe={"Jun - Aug 2022, 2023"}
						skills={["Teaching", "Organization", "Planning"]}
						description={[
							"Planned curriculum alongside center director and led one cohort of SAT Camp, working with eight high school students twice a week to prepare for the SAT exam",
							"Worked with K-12 students for one hour each, up to three at a time to remediate math and reading skills by delivering lesson plans and assessments",
						]}
					/>
					{/* <ExperienceCard
						job={"Intern"}
						company={"Casey Cares Foundation"}
						link={""}
						timeframe={"Jun - Aug 2021"}
						skills={["Data Entry"]}
						description={[
							"Packed and shipped care packages to dozens of Casey Cares families, contacting certain families over the phone to request address and contact information as needed",
							"Used Raiser&apos;s Edge NXT to organize contact information about Casey Cares families and store a record of what care packages containe",
							"Organized and mailed hundreds of pajamas from annual pajama drive to local hospitals",
						]}
					/> */}
				</div>
			</div>
		</div>
	);
}

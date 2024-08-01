import React from "react";
import Link from "next/link";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
	return (
		<div>
			<div className="flex flex-col justify-center">
				<div className="box subheading text-center py-5">Experience</div>
				<div className="">
					<ExperienceCard
						job={"Data Engineering Intern"}
						company={"DOE Office of Clean Energy Demonstrations"}
						link={""}
						timeframe={"Jun 2024 - present"}
						skills={["Python", "SAS", "Jupyter Notebook", "Privacy", "Anonymization"]}
						description={[
							"Selected as part of DOE Scholars Program to aid Science, Engineering, Analysis, and Data division with executing data anonymization and privacy goals",
							"Researched and implemented advanced data anonymization techniques (k-anonymization, l-diversity, t-closeness) on large datasets via Python (pandas, NumPy) for office reference",
							"Presented research and code on various techniques, advising office on best practices and use cases ",
							"Gained experience in data management processes for a multi-billion-dollar project portfolio",
						]}
					/>
					<ExperienceCard
						job={"Undergraduate Research Assistant"}
						company={"Meyer Laboratory"}
						link={"https://www.meyerlabneuro.com/"}
						timeframe={"Sep 2022 - May 2024"}
						skills={["Python", "R", "Jupyter Notebook", "Programming", "Data Analysis"]}
						description={[
							"Worked with DeepLabCut (Python, deep learning model) to collect data on freezing behaviors",
							"Analyzed freezing data from hundreds of videos of mice in elevated plus maze in Excel and R, presenting analysis via Jupyter Notebooks ",
							"Handled mice during fear-conditioning and performed wet lab experiments, using a cryostat and vibratome to slice and mount mouse brains ",
						]}
					/>
					<ExperienceCard
						job={"Peer Tutor & Training Leader"}
						company={"BU Educational Resource Center"}
						link={"https://www.bu.edu/erc/"}
						timeframe={"Sep 2021 - May 2024"}
						skills={["Chemistry", "Teaching", "Organization"]}
						description={[
							"Worked one-on-one with undergraduate students to improve their understanding of general chemistry and plan study strategies for four to six hours each week",
							"Led tutor training sessions, overseeing and critiquing tutor demonstrations for dozens of new tutors",
						]}
					/>
					{/* <ExperienceCard
						job={"Library Assistant"}
						company={"Pickering Educational Resources Library"}
						link={""}
						timeframe={"Sep 2021 - May 2024"}
						skills={["Customer Service"]}
						description={[
							"Responsible for staffing the front desk, making sure that books and other learning materials are in their proper locations, and ensuring smooth operations for dozens of patrons for five to seven hours per week",
						]}
					/> */}
					{/* <ExperienceCard
						job={"PR Coordinator & Full Stack Developer"}
						company={"Women In Neuroscience"}
						link={"https://www.instagram.com/bostonuwin/?hl=en"}
						timeframe={"Dec 2020 - present"}
						skills={["React", "Software Engineering", "Social Media"]}
						description={[
							"Designed and currently developing scientific article-sharing platform for undergraduate students at BU doing research as part of initiative to promote undergraduate professional development",
							"Organize/promote club events and maintain club's social media presence to 300+ followers",
						]}
					/> */}
					{/* <ExperienceCard
						job={"Instructor"}
						company={"Sylvan Learning"}
						link={""}
						timeframe={"Jun - Aug 2022, 2023"}
						skills={["Teaching", "Organization", "Planning"]}
						description={[
							"Planned curriculum alongside center director and led one cohort of SAT Camp, working with eight high school students twice a week to prepare for the SAT exam",
							"Worked with K-12 students for one hour each, up to three at a time to remediate math and reading skills by delivering lesson plans and assessments",
						]}
					/> */}
				</div>
			</div>
		</div>
	);
}

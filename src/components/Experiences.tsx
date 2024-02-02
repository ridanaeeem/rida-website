import React from "react";
import Link from "next/link";
import Image from "next/image";
import work1 from "@/media/work1.png";
import work2 from "@/media/work2.png";
import work3 from "@/media/work3.png";

export default function Experiences() {
	return (
		<div>
			<div className="flex flex-col justify-center">
				<div className="box subheading text-center py-5">Experiences</div>
				<div className="flex flex-row mx-auto my-10">
					{/* <Image
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
					/> */}
				</div>
				<div className="">
					<div>
						My degree has allowed me to gain a truly interdisplinary understanding of both Neuroscience and
						Computer Science, with coursework ranging from biology, chemistry, and physics, to the
						principles of computational modeling and computing.
					</div>
					<br></br>

					<div className="flex justify-between">
						<div className="text-emphasis">Undergraduate Research Assistant | Meyer Laboratory</div>
						<div>Sep 2022 - present</div>
					</div>
					<ul className="">
						<li>Work with DeepLabCut and Python to collect data on mouse freezing behaviors</li>
						<li>Write scripts in MedState Notation for mice fear conditioning experiments</li>
						<li>
							Score hundreds of videos of mice in elevated plus maze, recording freezing and analyzing
							subsequent data in Microsoft Excel and R
						</li>
						<li>
							Handle mice during fear-conditioning and perform wet lab experiments, using a cryostat and
							vibratome to slice and mount mouse brains{" "}
						</li>
					</ul>
					<br></br>

					<div className="flex justify-between">
						<div className="text-emphasis">Peer Tutor | Boston University Educational Resource Center</div>
						<div>Sep 2021 - present</div>
					</div>
					<ul className="">
						<li>
							Work one-on-one with undergraduate students to improve their understanding of general
							chemistry and plan study strategies for four to six hours each week
						</li>
						<li>Run tutor training sessions, overseeing and providing feedback to tutor demonstrations</li>
					</ul>
					<br></br>

					<div className="flex justify-between">
						<div className="text-emphasis">Library Assistant | Pickering Educational Resources Library</div>
						<div>Sep 2021 - present</div>
					</div>
					<ul className="">
						<li>
							Responsible for staffing the front desk, making sure that books and other learning materials
							are in their proper locations, and ensuring smooth operations for dozens of patrons for five
							to seven hours per week
						</li>
					</ul>
					<br></br>

					<div className="flex justify-between">
						<div className="text-emphasis">Instructor | Sylvan Learning</div>
						<div>Jun - Aug 2022, 2023</div>
					</div>
					<ul className="">
						<li>
							Planned curriculum alongside center director and led one cohort of SAT Camp, working with
							eight high school students twice a week to prepare for the SAT exam
						</li>
						<li>
							Worked with K-12 students for one hour each, up to three at a time to remediate math and
							reading skills by delivering lesson plans and assessments
						</li>
					</ul>
					<br></br>

					<div className="flex justify-between">
						<div className="text-emphasis">Intern | Casey Cares Foundation</div>
						<div>Jun - Aug 2021</div>
					</div>
					<ul className="">
						<li>
							Packed and shipped care packages to dozens of Casey Cares families, contacting certain
							families over the phone to request address and contact information as needed{" "}
						</li>
						<li>
							Used Raiser&apos;s Edge NXT to organize contact information about Casey Cares families and
							store a record of what care packages contained{" "}
						</li>
						<li>Organized and mailed hundreds of pajamas from annual pajama drive to local hospitals</li>
					</ul>
					<br></br>
				</div>
			</div>
		</div>
	);
}

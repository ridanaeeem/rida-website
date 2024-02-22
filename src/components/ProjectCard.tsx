import SkillList from "./SkillList";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function ProjectCard({
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
}) {
	return (
		<div className="project-card border-transparent border-2 p-4 hover:bg-gradient-radial from-black to-dgreen hover:border-dgreen rounded-xl">
			<a href={deployment ? deployment : githubRepo} target="_blank" rel="noopener noreferrer">
				<div className="card-title text-emphasis text-xl">
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
}

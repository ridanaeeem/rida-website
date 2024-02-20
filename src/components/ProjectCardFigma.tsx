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
	figmaEmbed,
}: {
	title: string;
	role: string;
	githubRepo: string;
	deployment: string | null;
	skills: Array<string>;
	description: Array<string>;
	figmaEmbed: string;
}) {
	return (
		<div className="border-transparent border-2 p-4 hover:bg-gradient-radial from-black to-dgreen hover:border-dgreen rounded-xl">
			<a href={deployment ? deployment : githubRepo} target="_blank" rel="noopener noreferrer">
				<div className="text-emphasis text-xl">
					{title}
					<div className="">{role}</div>
				</div>
				<SkillList skills={skills} />
				<div className="my-2">
					<iframe
						className="h-[650px] md:h-[600px] lg:h-[850px]"
						width="100%"
						src={figmaEmbed}
						allowFullScreen
					/>
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

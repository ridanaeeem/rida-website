import SkillList from "./SkillList";
import Link from "next/link";

export default function ExperienceCard({
	job,
	company,
	timeframe,
	link,
	skills,
	description,
}: {
	job: string;
	company: string;
	timeframe: string;
	link: string | null;
	skills: Array<string>;
	description: Array<string>;
}) {
	return (
		<div className="border-transparent border-2 p-4 hover:bg-gradient-radial from-black to-dgreen hover:border-dgreen rounded-xl">
			<a href={link ? link : "/"} target="_blank" rel="noopener noreferrer">
				<div className="text-emphasis text-xl">{job}</div>
				<div className="flex justify-between my-2">
					<div className="text-emphasis">{company}</div>
					<div className="">{timeframe}</div>
				</div>
				<SkillList skills={skills} />
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

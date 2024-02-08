import React from "react";

export default function SkillList({ skills }: { skills: Array<String> }) {
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
}

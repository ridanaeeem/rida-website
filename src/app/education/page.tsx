import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import boston1 from "@/media/boston1.png";
import boston2 from "@/media/boston2.png";
import boston3 from "@/media/boston3.png";

export default function Home() {
	return (
		<div>
			<Nav></Nav>
			<div className="flex flex-col justify-center text-center m-5">
				<div className="flex flex-row mx-auto p-10">
					<Image className="mx-2 rounded-full" src={boston1} alt="Rida Naeem" width={200} />
					<Image className="mx-2 rounded-full" src={boston2} alt="Rida Naeem" width={200} />
					<Image className="mx-2 rounded-full" src={boston3} alt="Rida Naeem" width={200} />
				</div>
				<div className="font-mono text-5xl text-[#538243]">Educational History</div>
				<div className="m-10 text-xl">
					<div>Boston University</div>
					<div>Sep 2020 - May 2024</div>
					<div>B.A. Neuroscience, minor Computer Science</div>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/media/profile.jpeg";
import Nav from "@/components/Nav";

export default function Home() {
	return (
		<div>
			<Nav></Nav>
			<div className="flex flex-col justify-center text-center m-5">
				<div className="mx-auto p-10">
					<Image className="text-center rounded-full" src={profile} alt="Rida Naeem" width={150} />
				</div>
				<div className="font-mono text-5xl text-[#538243]">Projects</div>
				<div className="m-10 text-xl">rida</div>
			</div>
		</div>
	);
}

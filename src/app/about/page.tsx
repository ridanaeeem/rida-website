import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/media/profile.jpeg";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
	return (
		<div>
			<Nav></Nav>
			<div className="flex flex-col justify-center text-center m-5">
				<div className="mx-auto p-10">
					<Image className="text-center rounded-full" src={profile} alt="Rida Naeem" width={200} />
				</div>
				<div className="font-mono text-5xl text-[#538243]">A little bit about me...</div>
				<div className="m-10 text-xl">
					Outside of my academics and work, I really enjoy finding opportunities to embrace my creative side,
					whether that be through playing the guitar, taking photos, or painting! I also enjoy bouldering and
					skateboarding in my free time. Check out some of my work below!
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/media/profile.jpeg";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<div>
			<div className="flex m-10">
				<div className="w-2/5 fixed">
					<Link href="/">
						<div className="box text-[9rem]">Rida Naeem</div>
					</Link>
					<div className="m-2">
						<Nav></Nav>
						<br></br>
						<Footer></Footer>
						<div className="mx-auto p-10">
							{/* <Image className="text-center rounded-full" src={profile} alt="Rida Naeem" width={200} />  */}
						</div>
					</div>
				</div>

				<div className="w-2/5"></div>

				<div className="w-3/5 relative ml-10">
					<div className="flex flex-col justify-center text-left">
						<div className="text-lg absolute top-0 mt-5">
							Welcome to my website! I&apos;m a graduating senior pursuing my Bachelor&apos;s in
							Neuroscience with a minor in Computer Science at Boston University. Scroll through to learn
							more about my{" "}
							<div className="hover-underline-animation">
								<Link href="#education">education</Link>
							</div>
							,{" "}
							<div className="hover-underline-animation">
								<Link href="#experiences">experience</Link>
							</div>
							, and{" "}
							<div className="hover-underline-animation">
								<Link href="#projects">projects!</Link>
							</div>
							<br></br>
							<br></br>
							Outside of my academics and work, I really enjoy finding opportunities to embrace my
							creative side, whether that be through playing the guitar, taking photos, or painting! I
							also enjoy bouldering and skateboarding in my free time. Check out some of my work{" "}
							<div className="hover-underline-animation">
								<Link href="/">here</Link>
							</div>
							, if you&apos;d like!
							<br></br>
							<br></br>
						</div>
						<div id="education">
							<Education></Education>
						</div>
						<div id="experiences">
							<Experiences></Experiences>
						</div>
						<div id="projects">
							<Projects></Projects>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

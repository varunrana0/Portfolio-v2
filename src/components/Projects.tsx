import { myInfo } from "@/intro";
import { Image, Kbd } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";

interface IProject {
	name: string;
	url: string;
	skills: string[];
	projectImg: string;
}

const Projects = () => {
	return (
		<div className="py-8 sm:py-16">
			<h3 className="text-white text-3xl tracking-tighter font-semibold mb-4">
				Projects
			</h3>
			{myInfo?.projects?.map((project: IProject, index: number) => (
				<Link
					href={project.url}
					target="_blank"
					key={index}
					className="border mt-4 border-white/5 backdrop-blur-xl bg-white/5  p-5 rounded-lg flex flex-col sm:flex-row items-start gap-5 sm:gap-10 h-full w-full hover:bg-white/10 transition-all">
					<Image
						as={NextImage}
						isZoomed
						isBlurred
						width={1200}
						height={1000}
						src={project.projectImg}
						fallbackSrc={project.projectImg}
						alt="project"
						radius="md"
						loading="eager"
						className="hidden sm:block sm:h-36 sm:w-40 flex-none aspect-square"
					/>
					<div className="flex flex-col gap-4 flex-1">
						<p className="text-white capitalize font-semibold text-xl">
							{project?.name}
						</p>
						<div className="max-w-lg mt-2 flex flex-wrap gap-2">
							{project?.skills?.map(
								(skill: string, index: number) => (
									<Kbd
										className="text-gray-400 capitalize font-semibold bg-transparent border-1 border-white/20 p-2 rounded-md"
										key={index}>
										{skill}
									</Kbd>
								),
							)}
						</div>
					</div>
					<RiExternalLinkFill color="white" />
				</Link>
			))}
		</div>
	);
};

export default Projects;

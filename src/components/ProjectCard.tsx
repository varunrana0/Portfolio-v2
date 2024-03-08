import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import { Image } from "@nextui-org/react";

interface IProject {
    name: string;
    url: string;
    skills: string[];
    projectImg: string;
}

interface IMotionLinkProps extends LinkProps {
    project: IProject;
}

const ProjectCard = ({ project }: IMotionLinkProps) => {
    const MotionLink = motion(Link);

    return (
        <MotionLink
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom(0.8)}
            href={project.url}
            target="_blank"
            className="relative p-4 rounded-xl flex flex-col items-center justify-center h-full w-full hover:bg-white/10 transition-all gap-4 bg-gradient-to-br from-transparent to-gray-800"
        >
            <Image
                isZoomed
                width={1200}
                height={1000}
                src={project.projectImg}
                alt={project.name}
                loading="lazy"
                decoding="async"
                className="h-52 relative aspect-square hover:scale-105 overflow-hidden rounded-md"
            />
            <p className="text-white capitalize font-semibold text-lg text-center">
                {project.name}
            </p>
        </MotionLink>
    );
};

export default ProjectCard;

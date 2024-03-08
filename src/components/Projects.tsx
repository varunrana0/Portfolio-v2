"use client";

import { myInfo } from "@/intro";
import ProjectCard from "./ProjectCard";

interface IProject {
    name: string;
    url: string;
    skills: string[];
    projectImg: string;
}

const Projects = () => {
    return (
        <div className="py-8 sm:py-16 flex flex-col items-center justify-center gap-8">
            <h3 className="text-white text-3xl tracking-tighter font-semibold mb-4">
                Work
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {myInfo?.projects?.map((project: IProject, index: number) => (
                    <ProjectCard
                        key={project.name + index}
                        project={project}
                        href={""}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;

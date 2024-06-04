// type import
import { projects } from "../../demoData/demoProjects.ts";

type mainContentProps = {
  project: projects[];
  selectedProject: string;
};

import RenderProjectsIntoMainContent from "./RenderProjectsIntoMainContent.tsx";

export default function MainContent({
  project,
  selectedProject,
}: mainContentProps) {
  return (
    <div className="w-auto">
      <div className="flex p-4 md:p-6 lg:p-8 ">
        <span className="font-thin mr-2 text-xs md:text-lg lg:text-2xl self-center">
          Project Title:{" "}
        </span>
        <div className="font-semibold text-xs md:text-lg lg:text-2xl self-center transition-transform">
          {selectedProject}
        </div>
      </div>
      <RenderProjectsIntoMainContent
        project={project}
        selectedProject={selectedProject}
      ></RenderProjectsIntoMainContent>
    </div>
  );
}

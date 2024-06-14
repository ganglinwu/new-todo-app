// type import
import { SetStateAction } from "react";
import { projects } from "../../demoData/demoProjects.ts";

// component import
import ProjectScrollArea from "./subcomponents/ProjectScrollArea.tsx";

type sidebarProps = {
  projects: projects[];
  selectedProject: string;
  onSelect: (selectedProject: string) => void;
  setProjects: React.Dispatch<SetStateAction<projects[]>>;
};

export default function Sidebar({
  projects,
  selectedProject,
  onSelect,
  setProjects,
}: sidebarProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <ProjectScrollArea
        projects={projects}
        selectedProject={selectedProject}
        onSelect={onSelect}
        setProjects={setProjects}
      ></ProjectScrollArea>
    </div>
  );
}

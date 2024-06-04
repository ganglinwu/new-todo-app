// type import
import { projects } from "../../demoData/demoProjects.ts";

// component import
import ProjectScrollArea from "./subcomponents/ProjectScrollArea.tsx";

type sidebarProps = {
  projects: projects[];
  selectedProject: string;
  onSelect: (selectedProject: string) => void;
};

export default function Sidebar({
  projects,
  selectedProject,
  onSelect,
}: sidebarProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <ProjectScrollArea
        projects={projects}
        selectedProject={selectedProject}
        onSelect={onSelect}
      ></ProjectScrollArea>
    </div>
  );
}

import { projects } from "../../demoData/demoProjects.ts";
import ProjectScrollArea from "./subcomponents/ProjectScrollArea.tsx";

type sidebarProps = {
  demoProjects: projects[];
  selectedProject: string;
  onSelect: (selectedProject: string) => void;
  onAddProject: (arg0: boolean) => void;
};

export default function Sidebar({
  demoProjects,
  selectedProject,
  onSelect,
}: sidebarProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <ProjectScrollArea
        demoProjects={demoProjects}
        selectedProject={selectedProject}
        onSelect={onSelect}
      ></ProjectScrollArea>
    </div>
  );
}

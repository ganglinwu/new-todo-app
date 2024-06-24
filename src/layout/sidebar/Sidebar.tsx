// type import
import { SetStateAction } from "react";
import { userData, projects } from "../../types";

// component import
import ProjectScrollArea from "./subcomponents/ProjectScrollArea.tsx";

type sidebarProps = {
  projects?: projects[];
  selectedProject: string;
  onSelect: (selectedProject: string) => void;
  setProjects: React.Dispatch<SetStateAction<projects[] | undefined>>;
  userData: userData;
  setUserData: React.Dispatch<SetStateAction<userData>>;
};

export default function Sidebar({
  projects,
  selectedProject,
  onSelect,
  setProjects,
  userData,
  setUserData,
}: sidebarProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <ProjectScrollArea
        projects={projects}
        selectedProject={selectedProject}
        onSelect={onSelect}
        setProjects={setProjects}
        userData={userData}
        setUserData={setUserData}
      ></ProjectScrollArea>
    </div>
  );
}

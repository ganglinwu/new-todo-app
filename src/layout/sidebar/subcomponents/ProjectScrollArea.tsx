import { ListPlus } from "lucide-react";
import { ScrollArea } from "../../../../@/components/ui/scroll-area.tsx";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../../@/components/ui/hover-card.tsx";

import { projects, userData } from "../../../types";
import bgColourByUrgencyExpiry from "../../../utils/bgColourByUrgencyExpiry.ts";
import isTaskExpired from "../../../utils/isTaskExpired.ts";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../../../@/components/ui/popover.tsx";
import AddProject from "../../addProject/AddProject.tsx";
import { SetStateAction, useState } from "react";
import { Button } from "../../../../@/components/ui/button.tsx";
import { deleteAllProj } from "../../../utils/deleteProj.ts";

type projectScrollAreaProps = {
  projects?: projects[];
  selectedProject: string;
  onSelect: (selectedProject: string) => void;
  userData: userData;
  setUserData: React.Dispatch<SetStateAction<userData>>;
  setProjects: React.Dispatch<SetStateAction<projects[] | undefined>>;
};

export default function ProjectScrollArea({
  projects,
  selectedProject,
  onSelect,
  setProjects,
  userData,
  setUserData,
}: projectScrollAreaProps) {
  const [deleteHover, setDeleteHover] = useState(false);
  return (
    <ScrollArea className="shadow-xl border border-border rounded-l">
      <div className="hover:bg-secondary flex justify-between p-2">
        <h4 className="font-light text-xs md:text-lg lg:text-2xl self-center">
          Add Project
        </h4>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex items-center aspect-square w-5 md:w-8 lg:w-10"
            >
              <ListPlus></ListPlus>
            </button>
          </PopoverTrigger>
          <PopoverContent className="transition-transform">
            <AddProject
              projects={projects}
              setProjects={setProjects}
            ></AddProject>
          </PopoverContent>
        </Popover>
      </div>
      <div className="bg-secondary">
        <div
          className={`${selectedProject === "All Projects" ? `${deleteHover ? "bg-red-300" : "bg-accent"}` : `${deleteHover ? "bg-red-300" : "hover:bg-blue-300"}`} transition-all flex justify-between pr-2 md:pr-4`}
          onClick={() => onSelect("All Projects")}
        >
          <h4 className="font-semibold p-2 text-xs md:text-lg md:p-4 lg:text-2xl lg-p-6 self-center">
            All Projects
          </h4>
          <Button
            className="z-10 bg-red-500 px-1 md:px-2 h-6 md:h-8 self-center rounded-xl border-none shadow-xl hover:bg-red-800 text-white text-xs md:text-lg "
            onMouseOver={() => {
              setDeleteHover(true);
            }}
            onMouseLeave={() => {
              setDeleteHover(false);
            }}
            onClick={() => deleteAllProj(userData, setUserData)}
          >
            Delete All
          </Button>
        </div>

        {projects ? (
          projects.map((project) => (
            <div
              key={project.projectName}
              className={`${selectedProject === project.projectName ? "bg-accent" : "hover:bg-blue-300"} transition-colors`}
              onClick={() => onSelect(project.projectName)}
            >
              <HoverCard>
                <HoverCardTrigger>
                  <h4 className="font-semibold p-2 text-xs md:text-lg md:p-4 lg:text-2xl lg-p-6 self-center">
                    {project.projectName}
                  </h4>
                </HoverCardTrigger>
                <HoverCardContent className="bg-white">
                  <h6>Tasks:</h6>
                  {project.tasks &&
                    project.tasks.map((task) => (
                      <div
                        key={task.taskName}
                        className={`${isTaskExpired(task) ? "bg-gray-500" : bgColourByUrgencyExpiry(task)} p-2 border border-b-accent`}
                      >
                        {task.taskName}
                      </div>
                    ))}
                </HoverCardContent>
              </HoverCard>
            </div>
          ))
        ) : (
          <div>No Projects, create one!</div>
        )}
      </div>
    </ScrollArea>
  );
}

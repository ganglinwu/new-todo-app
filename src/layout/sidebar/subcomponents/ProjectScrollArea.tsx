import { ListPlus } from "lucide-react";
import { ScrollArea } from "../../../../@/components/ui/scroll-area.tsx";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../../@/components/ui/hover-card.tsx";

import { projects } from "../../../demoData/demoProjects.ts";
import bgColourByUrgencyExpiry from "../../../utils/bgColourByUrgencyExpiry.ts";
import isTaskExpired from "../../../utils/isTaskExpired.ts";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../../../@/components/ui/popover.tsx";
import AddProject from "../../addProject/AddProject.tsx";

type projectScrollAreaProps = {
  projects: projects[];
  selectedProject: string;
  onSelect: (selectedProject: string) => void;
};

export default function ProjectScrollArea({
  projects,
  selectedProject,
  onSelect,
}: projectScrollAreaProps) {
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
            <AddProject></AddProject>
          </PopoverContent>
        </Popover>
      </div>
      <div className="bg-secondary">
        <div
          className={`${selectedProject === "All Projects" ? "bg-accent" : "hover:bg-blue-300"} transition-colors`}
          onClick={() => onSelect("All Projects")}
        >
          <h4 className="font-semibold p-2 text-xs md:text-lg md:p-4 lg:text-2xl lg-p-6 self-center">
            All Projects
          </h4>
        </div>
        {projects.map((project) => (
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
                {project.tasks.map((task) => (
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
        ))}
      </div>
    </ScrollArea>
  );
}

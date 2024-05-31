import { ListPlus } from "lucide-react";
import { ScrollArea } from "../../@/components/ui/scroll-area.tsx";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../@/components/ui/hover-card.tsx";

import { projects } from "../demoData/demoProjects.ts";
import bgColourByUrgencyExpiry from "../utils/bgColourByUrgencyExpiry.ts";
import isTaskExpired from "../utils/isTaskExpired.ts";

type sidebarProps = {
  demoProjects: projects[];
  selectedProject: string;
  onSelect: (selectedProject: string) => void;
};

export default function Sidebar({
  demoProjects,
  selectedProject,
  onSelect,
}: sidebarProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <ScrollArea className="shadow-xl border border-border rounded-l">
        <div className="hover:bg-secondary flex justify-between p-2">
          <h4 className="font-light text-xs md:text-lg lg:text-2xl self-center">
            Add Project
          </h4>
          <button
            type="button"
            className="flex items-center aspect-square w-5 md:w-8 lg:w-10"
          >
            <ListPlus></ListPlus>
          </button>
        </div>
        <div className="bg-secondary">
          {demoProjects.map((project) => (
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
                <HoverCardContent className="bg-white z-60">
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
    </div>
  );
}

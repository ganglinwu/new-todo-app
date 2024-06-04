// shadcn component import
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../@/components/ui/popover.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../@/components/ui/card.tsx";

// util function imports
import isTaskExpired from "../../utils/isTaskExpired";
import bgColourByUrgencyExpiry from "../../utils/bgColourByUrgencyExpiry";
import shouldThisProjectCardBeRendered from "../../utils/shouldThisProjectCardBeRendered.ts";

// type import
import { projects } from "../../demoData/demoProjects";

type RenderProjectsIntoMainContentProps = {
  project: projects[];
  selectedProject: string;
};

export default function RenderProjectsIntoMainContent({
  project,
  selectedProject,
}: RenderProjectsIntoMainContentProps) {
  return (
    <div className="mr-4 text-xs md:text-lg lg:text-2xl overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 w-[max-content]">
        {project.map((project) => (
          <Card
            key={project.projectName}
            className={`${shouldThisProjectCardBeRendered(project.projectName, selectedProject) ? "" : "hidden"} border-none w-[150px] md:w-[300px] lg-:w-[450px] -z-10`}
          >
            <CardHeader>
              <CardTitle className="ml-2 mt-2 p-2 self-center">
                {project.projectName}
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              {project.tasks.map((task) => (
                <div
                  key={task.taskName}
                  className={`${isTaskExpired(task) ? "bg-gray-500" : bgColourByUrgencyExpiry(task)} p-2 border border-b-accent rounded-xl mb-2 md:mb-4 shadow-xl`}
                >
                  <div className="p-2">
                    Task:{" "}
                    <span className="font-thin text-wrap">{task.taskName}</span>
                  </div>
                  <div className="p-2">
                    Due Date:{" "}
                    <span className="font-thin text-wrap">
                      {task.taskDueDate ? task.taskDueDate.toString() : ""}
                    </span>
                  </div>
                  <div className="p-2">
                    Duration:{" "}
                    <span className="font-thin text-wrap">
                      {task.taskDuration} minutes
                    </span>
                  </div>
                  <div className="p-2">
                    Urgency:{" "}
                    <span className="font-thin text-wrap">
                      {task.taskUrgency}
                    </span>
                  </div>
                  <Popover>
                    <PopoverTrigger className="border hover:bg-accent bg-secondary rounded-xl outline-none shadow-lg p-1 md:p-1 lg:p-2">
                      Edit Task
                    </PopoverTrigger>
                    <PopoverContent>Placeholder</PopoverContent>
                  </Popover>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

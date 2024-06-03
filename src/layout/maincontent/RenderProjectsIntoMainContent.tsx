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
  demoProject: projects[];
  selectedProject: string;
};

export default function RenderProjectsIntoMainContent({
  demoProject,
  selectedProject,
}: RenderProjectsIntoMainContentProps) {
  return (
    <div className="grid md:grid-cols-magic md:gap-4 grid-cols-magicSmallScreen gap-1 text-xs md:text-lg lg:text-lg">
      {demoProject.map((project) => (
        <Card
          key={project.projectName}
          className={`${shouldThisProjectCardBeRendered(project.projectName, selectedProject) ? "" : "hidden"}`}
        >
          <CardHeader>
            <CardTitle className="p-2">{project.projectName}</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            {project.tasks.map((task) => (
              <div
                key={task.taskName}
                className={`${isTaskExpired(task) ? "bg-gray-500" : bgColourByUrgencyExpiry(task)} p-2 border border-b-accent`}
              >
                <div>Task: {task.taskName}</div>
                <div>
                  Due Date:{" "}
                  {task.taskDueDate ? task.taskDueDate.toString() : ""}
                </div>
                <div>Duration: {task.taskDuration} minutes</div>
                <div>Urgency: {task.taskUrgency}</div>
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
  );
}

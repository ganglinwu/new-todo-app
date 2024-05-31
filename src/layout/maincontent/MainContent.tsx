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

// type import
import { projects } from "../../demoData/demoProjects.ts";

type mainContentProps = {
  demoProject: projects[];
  selectedProject: string;
};

// util import
import bgColourByUrgencyExpiry from "../../utils/bgColourByUrgencyExpiry.ts";
import isTaskExpired from "../../utils/isTaskExpired.ts";

export default function MainContent({
  demoProject,
  selectedProject,
}: mainContentProps) {
  return (
    <div>
      <div className="flex p-4 md:p-6 lg:p-8">
        <span className="font-thin mr-2 text-xs md:text-lg lg:text-2xl self-center">
          Project Title:{" "}
        </span>
        <div className="font-semibold text-xs md:text-lg lg:text-2xl self-center transition-transform">
          {selectedProject}
        </div>
      </div>
      <div className="grid md:grid-cols-magic md:gap-4 grid-cols-magicSmallScreen gap-1 text-xs md:text-lg lg:text-lg">
        {demoProject.map((project) => (
          <Card key={project.projectName}>
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
                      Edit Task{" "}
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

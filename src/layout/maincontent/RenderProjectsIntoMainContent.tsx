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
import { projects } from "../../types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

type RenderProjectsIntoMainContentProps = {
  project?: projects[];
  selectedProject: string;
};

export default function RenderProjectsIntoMainContent({
  project,
  selectedProject,
}: RenderProjectsIntoMainContentProps) {
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);
  const [displacement, setDisplacement] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className="mr-4 text-xs md:text-lg lg:text-2xl overflow-x-hidden relative"
      id="projectContainer"
      ref={containerRef}
    >
      <div
        className="flex whitespace-nowrap gap-3 w-[max-content] transition-transform relative"
        style={{ transform: `translateX(${displacement}px` }}
      >
        {project ? (
          project.map((proj) => (
            <Card
              key={proj.projectName}
              className={`${shouldThisProjectCardBeRendered(proj.projectName, selectedProject) ? "" : "hidden"} border-none w-[150px] md:w-[300px] lg-:w-[450px] -z-10`}
            >
              <CardHeader>
                <CardTitle className="ml-2 mt-2 p-2 self-center">
                  {proj.projectName}
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                {proj.tasks ? (
                  proj.tasks.map((task) => (
                    <div
                      key={task.taskName}
                      className={`${isTaskExpired(task) ? "bg-gray-500" : bgColourByUrgencyExpiry(task)} p-2 border border-b-accent rounded-xl mb-2 md:mb-4 shadow-xl`}
                    >
                      <div className="p-2">
                        Task:{" "}
                        <span className="font-thin text-wrap">
                          {task.taskName}
                        </span>
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
                          {task.taskDuration ? (
                            <span>{task.taskDuration} minutes</span>
                          ) : (
                            ""
                          )}
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
                  ))
                ) : (
                  <div>No tasks available, would you like to create one?</div>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <div>No Projects, create one to start!</div>
        )}
      </div>
      {isLeftArrowVisible && (
        <div
          className="top-5 left-0 absolute bg-gradient-to-r-[50%] bg-white"
          onClick={() => {
            setDisplacement((d) => {
              const newDisplacement = d + 200;
              if (newDisplacement >= 0) {
                setIsLeftArrowVisible(false);
                return 0;
              } else {
                setIsRightArrowVisible(true);
                return newDisplacement;
              }
            });
          }}
        >
          <ArrowLeft></ArrowLeft>
        </div>
      )}
      {isRightArrowVisible && (
        <div
          className="top-5 right-0 absolute w-10 bg-gradient-to-r from-white to-transparent from-50%"
          onClick={() =>
            setDisplacement((d) => {
              const newDisplacement = d - 200;
              if (!containerRef.current) {
                return d;
              }
              if (
                newDisplacement <=
                -1 *
                  (containerRef.current.scrollWidth -
                    containerRef.current.clientWidth)
              ) {
                setIsRightArrowVisible(false);
                return (
                  -1 *
                  (containerRef.current.scrollWidth -
                    containerRef.current.clientWidth)
                );
              } else {
                setIsLeftArrowVisible(true);
                return newDisplacement;
              }
            })
          }
        >
          <ArrowRight></ArrowRight>
        </div>
      )}
    </div>
  );
}

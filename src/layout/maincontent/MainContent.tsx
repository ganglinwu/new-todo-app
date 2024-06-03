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
import RenderProjectsIntoMainContent from "./RenderProjectsIntoMainContent.tsx";

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
      <RenderProjectsIntoMainContent
        demoProject={demoProject}
        selectedProject={selectedProject}
      ></RenderProjectsIntoMainContent>
    </div>
  );
}

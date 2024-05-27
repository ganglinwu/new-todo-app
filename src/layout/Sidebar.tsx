import { ListPlus } from "lucide-react";
import { ScrollArea } from "../../@/components/ui/scroll-area.tsx";

import { demoProjects } from "../demoData/demoProjects.ts";

export default function Sidebar() {
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
            <h4 className="font-semibold p-2 text-xs md:text-lg md:p-4 lg:text-2xl lg-p-6 self-center">
              {project.projectName}
            </h4>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

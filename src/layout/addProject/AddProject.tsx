import { SetStateAction } from "react";
import { Button } from "../../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../@/components/ui/card.tsx";
import { Input } from "../../../@/components/ui/input.tsx";
import { Label } from "../../../@/components/ui/label.tsx";
import { Project, projects } from "../../demoData/demoProjects.ts";

type addProjectProps = {
  projects: projects[];
  setProjects: React.Dispatch<SetStateAction<projects[]>>;
};

export default function AddProject({ projects, setProjects }: addProjectProps) {
  return (
    <Card className="w-[250px] md:w-[500px] bg-secondary p-2">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl lg:text-2xl">
          Create project
        </CardTitle>
        <CardDescription className="pb-4 text-sm md:text-lg ">
          Working on something new? Let's start here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="font-bold text-sm md:text-lg">
                Name
              </Label>
              <Input
                id="projectname"
                placeholder="Name of your project"
                className="px-1 py-1/2 text-sm md:text-lg"
              />
            </div>
          </div>
          <Button
            variant="outline"
            className="rounded-xl px-2 py-1 md:px-3 md:py-1.5 md:text-lg my-2 md:my-4"
            type="button"
            onClick={() => {
              const projectName = document.getElementById("projectname")?.value;
              if (!projectName) {
                alert("Please ensure project name is not blank!");
              }
              const newProj = new Project(projectName);
              projects.push(newProj);
              setProjects(projects);
            }}
          >
            Add Project
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

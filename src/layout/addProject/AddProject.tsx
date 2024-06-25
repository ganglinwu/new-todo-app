import { SetStateAction, useState } from "react";
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
import { Project } from "../../demoData/demoProjects.ts";
import { projects } from "../../types";

type addProjectProps = {
  projects?: projects[];
  setProjects: React.Dispatch<SetStateAction<projects[] | undefined>>;
};

export default function AddProject({ projects, setProjects }: addProjectProps) {
  const [input, setInput] = useState("");
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>
          <Button
            variant="outline"
            className="rounded-xl px-2 py-1 md:px-3 md:py-1.5 md:text-lg my-2 md:my-4"
            type="button"
            onClick={() => {
              const projectName = input;
              if (!projectName) {
                alert("Please ensure project name is not blank!");
              }
              const newProj = new Project(projectName);
              if (projects === undefined) {
                projects = [];
              }
              // check if project with same name already exists
              const sameNameProjects = projects.filter(
                (project) => project.projectName === input,
              );
              if (sameNameProjects.length) {
                alert(
                  "A project with the same name already exists. Please use another name.",
                );
              } else {
                setProjects([...projects, newProj]);
                alert("Project created");
              }
            }}
          >
            Add Project
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

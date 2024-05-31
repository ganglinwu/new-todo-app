import { Button } from "../../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../@/components/ui/card.tsx";
import { Input } from "../../../@/components/ui/input.tsx";
import { Label } from "../../../@/components/ui/label.tsx";

type addProjectProps = {
  setShowAddProject: (arg0: boolean) => void;
};

export default function AddProject({ setShowAddProject }: addProjectProps) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[350px] md:w-[500px] lg:w-[650px]  bg-secondary p-2">
        <CardHeader>
          <CardTitle className="md:text-xl lg:text-2xl">
            Create project
          </CardTitle>
          <CardDescription className="">
            Working on something new? Let's start here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of your project"
                  className="px-1 py-1/2"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Describe your project here"
                  className="px-1 py-1/2"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <Button
            className="hover:bg-red-300 border border-red-600 transition-colors rounded-xl px-2 py-1"
            variant="outline"
            onClick={() => setShowAddProject(false)}
          >
            Cancel
          </Button>
          <Button variant="outline" className="rounded-xl px-2 py-1">
            Add Project
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

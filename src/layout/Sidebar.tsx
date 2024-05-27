import { ScrollArea } from "../../@/components/ui/scroll-area.tsx";
import { Separator } from "../../@/components/ui/separator.tsx";

export default function Sidebar() {
  return (
    <div className="p-4">
      <ScrollArea className="shadow-xl border border-blue-300 rounded-l p-2">
        <h4>Project 1</h4>
        <Separator></Separator>
        <h4>Project 2</h4>
        <Separator></Separator>
      </ScrollArea>
    </div>
  );
}

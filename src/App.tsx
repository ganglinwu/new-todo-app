// layout component imports
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";

import { demoProjects } from "./demoData/demoProjects";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(
    demoProjects[0].projectName,
  );
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-3 md:grid-cols-4">
        <div className="col-span-1">
          <Sidebar
            demoProjects={demoProjects}
            selectedProject={selectedProject}
            onSelect={setSelectedProject}
          ></Sidebar>
        </div>
        <div className="col-span-2 md:col-span-3">
          <MainContent
            demoProject={demoProjects}
            selectedProject={selectedProject}
          ></MainContent>
        </div>
      </div>
    </div>
  );
}

export default App;

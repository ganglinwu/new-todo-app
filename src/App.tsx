// layout component imports
import Header from "./layout/header/Header.tsx";
import MainContent from "./layout/maincontent/MainContent.tsx";
import Sidebar from "./layout/sidebar/Sidebar.tsx";

import { demoProjects } from "./demoData/demoProjects";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState("All Projects");
  return (
    <div className="flex flex-col relative z-1">
      <Header></Header>
      <div className="grid grid-cols-3 md:grid-cols-4">
        <div className="col-span-1">
          <Sidebar
            projects={demoProjects}
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

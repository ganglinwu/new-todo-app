// layout component imports
import AddProject from "./layout/addProject/AddProject.tsx";
import Header from "./layout/header/Header.tsx";
import MainContent from "./layout/maincontent/MainContent.tsx";
import Sidebar from "./layout/sidebar/Sidebar.tsx";

import { demoProjects } from "./demoData/demoProjects";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(
    demoProjects[0].projectName,
  );
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  return (
    <div className="flex relative z-1">
      <div className="">
        {showAddProjectForm && (
          <AddProject setShowAddProject={setShowAddProjectForm}></AddProject>
        )}
      </div>
      <div className={`${showAddProjectForm ? "" : ""}`}>
        <Header></Header>
        <div className="grid grid-cols-3 md:grid-cols-4">
          <div className="col-span-1">
            <Sidebar
              demoProjects={demoProjects}
              selectedProject={selectedProject}
              onSelect={setSelectedProject}
              onAddProject={setShowAddProjectForm}
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
    </div>
  );
}

export default App;

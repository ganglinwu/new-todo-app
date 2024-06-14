// layout component imports
import Header from "./layout/header/Header.tsx";
import MainContent from "./layout/maincontent/MainContent.tsx";
import Sidebar from "./layout/sidebar/Sidebar.tsx";

import { userProjectData } from "./demoData/demoProjects";
import { useState, useEffect } from "react";
import { initializeProjects } from "./utils/initializeProjects.ts";

function App() {
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [userProjects, setUserProjects] = useState(userProjectData);
  const [projects, setProjects] = useState(userProjects.projects);
  useEffect(() => {
    let newUserProjectData = {
      userName: userProjects.userName,
      timeUpdated: new Date(),
      projects: projects,
    };
    setUserProjects(newUserProjectData);
    localStorage.setItem("userProjects", JSON.stringify(newUserProjectData));
  }, [projects]);
  // useEffect(() => {
  //   initializeProjects(userProjects, setUserProjects);
  // }, [userProjects]);
  return (
    <div className="flex flex-col relative z-1">
      <Header></Header>
      <div className="grid grid-cols-3 md:grid-cols-4">
        <div className="col-span-1">
          <Sidebar
            projects={projects}
            selectedProject={selectedProject}
            onSelect={setSelectedProject}
            setProjects={setProjects}
          ></Sidebar>
        </div>
        <div className="col-span-2 md:col-span-3">
          <MainContent
            project={projects}
            selectedProject={selectedProject}
          ></MainContent>
        </div>
      </div>
    </div>
  );
}

export default App;

// layout component imports
import Header from "./layout/header/Header.tsx";
import MainContent from "./layout/maincontent/MainContent.tsx";
import Sidebar from "./layout/sidebar/Sidebar.tsx";

import { demoUserData } from "./demoData/demoProjects";
import { useState, useEffect } from "react";
import { initializeUserData } from "./utils/initializeUserData.ts";

function App() {
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [userData, setUserData] = useState(() => initializeUserData());
  const [projects, setProjects] = useState(userData.projects);
  useEffect(() => {
    let newUserData = {
      userName: userData.userName,
      timeUpdated: new Date(),
      projects: projects,
    };
    setUserData(newUserData);
    localStorage.setItem("userData", JSON.stringify(newUserData));
  }, [projects]);
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
            setUserData={setUserData}
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

// layout component imports
import Header from "./layout/header/Header.tsx";
import MainContent from "./layout/maincontent/MainContent.tsx";
import Sidebar from "./layout/sidebar/Sidebar.tsx";

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
    <div className="flex flex-col max-h-screen">
      <Header></Header>
      <div className="grid grid-cols-[40%_60%] md:grid-cols-[20%_80%] overflow-auto whitespace-nowrap">
        <Sidebar
          projects={projects}
          selectedProject={selectedProject}
          onSelect={setSelectedProject}
          setProjects={setProjects}
          userData={userData}
          setUserData={setUserData}
        ></Sidebar>
        <div className="sticky top-0 z-10">
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

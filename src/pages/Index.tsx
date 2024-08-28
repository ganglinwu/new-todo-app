// layout component imports
import MainContent from "../layout/maincontent/MainContent.tsx";
import Sidebar from "../layout/sidebar/Sidebar.tsx";

import { useState, useEffect, useContext } from "react";
import { initializeUserData } from "../utils/initializeUserData.ts";

import { assertIsData } from "../utils/assertIsData.ts";
import { UserContext } from "../context/userContext.ts";

export default function Index() {
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const { userData, setUserData } = useContext(UserContext);
  const [projects, setProjects] = useState(userData.projects);

  // useEffect(() => {
  //   let newUserData = {
  //     userName: userData.userName,
  //     projects: projects,
  //   };
  //   setUserData(newUserData);
  //   localStorage.setItem("userData", JSON.stringify(newUserData));
  // }, [projects]);

  // TODO: DB read one-time. also think about how to integrate with localStorage
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api/data", {
        method: "GET",
        credentials: "include",
        signal: signal,
      });
      const data = await res.json();
      return data;
    };

    fetchData().then((data) => {
      try {
        assertIsData(data);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    });

    return () => {
      controller.abort();
    };
  }, []);
  //
  //TODO: cache DB read?
  // TODO: DB write?
  return (
    <>
      <div className="flex flex-col max-h-screen">
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
    </>
  );
}

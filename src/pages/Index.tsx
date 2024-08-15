// layout component imports
import Header from "../layout/header/Header.tsx";
import MainContent from "../layout/maincontent/MainContent.tsx";
import Sidebar from "../layout/sidebar/Sidebar.tsx";
import LoginPage from "../pages/LoginPage.tsx";

import { useState, useEffect } from "react";
import { initializeUserData } from "../utils/initializeUserData.ts";

export default function Index() {
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [userData, setUserData] = useState(() => initializeUserData());
  const [projects, setProjects] = useState(userData.projects);
  const [token, setToken] = useState(); //JWT
  const [isAuth, setIsAuth] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let newUserData = {
      userName: userData.userName,
      projects: projects,
    };
    setUserData(newUserData);
    localStorage.setItem("userData", JSON.stringify(newUserData));
  }, [projects]);

  useEffect(() => {
    console.log("useEffect for isLoggedin isAuth check triggered");
    fetch(`http://localhost:3001/auth`, {
      method: "POST",
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        console.log("response from server: authorized");
        setIsAuth(true);
        setIsLoggedIn(true);
      } else {
        setIsAuth(false);
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedin, isAuth]);

  // TODO: DB read one-time. also think about how to integrate with localStorage
  // useEffect(()=> {
  //   setIsLoading(true)
  //   const fetchFromDB = async (){
  //     try {
  //     const res = await fetch("")
  //     const data = await res.json()
  //     // typecheck data from DB
  //     if (typeof data === userData) {
  //     setUserData(data)
  // } catch (err) {
  // return <div>something went wrong<div>
  // }
  //     }
  //   }
  //   setIsLoading(false)
  // }, [])
  //
  //TODO: cache DB read?
  // TODO: DB write?
  return (
    <>
      {!isLoggedin && <LoginPage setIsLoggedIn={setIsLoggedIn} />}
      {isAuth && (
        <div className="flex flex-col max-h-screen">
          <Header setIsLoggedIn={setIsLoggedIn}></Header>
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
      )}
    </>
  );
}

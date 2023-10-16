"use client";
import FormHook from "@/components/Form/FormHook";
import React, { Dispatch, SetStateAction, useState } from "react";


const switchPAge = ({currentPage,setCurrentPage }:{currentPage:string,setCurrentPage:Dispatch<SetStateAction<string>> }) => {
    if (currentPage === "loginPage") {
      setCurrentPage("loginPage");
    } else if(currentPage === "register"){
      setCurrentPage("register");
    }
  };
const TestAccount = () => {
  const [currentPage, setCurrentPage] = useState("loginPage");

  
  console.log(currentPage);

  return (
    <div>
      {currentPage === "register" && <FormHook title="sign" />}
      {currentPage === "loginPage" && <FormHook title="register" />}
      <button onClick={()=>switchPAge({setCurrentPage:setCurrentPage , currentPage:currentPage } )}>Enter</button>
    </div>
  );
};

export default TestAccount;

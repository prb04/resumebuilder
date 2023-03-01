import React from "react";
import HeaderR from "./HeaderR";
import ProfessionalR from "./ProfessionalR";
import EducationR from "./EducationR";
import SkillsR from "./AdditionalSkillR";

const Main = () => {
  return (
    <div className="">
      <div className="page">
        <HeaderR />
        <ProfessionalR />
        <EducationR />
        <SkillsR />
      </div>
    </div>
  );
};

export default Main;

import React, { useContext } from "react";
import myClasses from "./Right.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

const AdditionalSkillsR = () => {
  const { content, control, contentFake } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  let title;
  if (contentUse.additional.length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Additional Skills</strong>
      </h3>
    );
  }

  let bulletsData = contentUse.additional.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });
  return (
    <div className={myClasses.professionalResume}>
      <div className={myClasses.end}>
        {title}
        <ul className="my-2">{bulletsData}</ul>
      </div>
    </div>
  );
}

export default AdditionalSkillsR;

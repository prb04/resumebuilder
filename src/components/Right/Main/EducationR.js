import React, { useContext } from "react";
import myClasses from "./Right.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

const EducationR = () => {
  const { content, control, contentFake } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  let title;
  if (Object.keys(contentUse.education).length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Education</strong>
      </h3>
    );
  }

  let bulletEducation;
  if (!contentUse.education.additional) {
    bulletEducation = "";
  } else {
    bulletEducation = (
      <ul>
        <li>{contentUse.education.additional}</li>
      </ul>
    );
  }

  return (
    <div className={myClasses.professionalResume}>
      <div className="">
        {title}
        <div className={myClasses.compNames}>
          <p>
            <strong>{contentUse.education.institution} </strong>{" "}
          </p>
          {contentUse.education.gradYearStart}{" "}
          {contentUse.education.gradYearEnd
            ? "- " + contentUse.education.gradYearEnd
            : contentUse.education.gradYearStart
            ? "- Present"
            : null}
        </div>
        <div className={myClasses.compNames}>
          <p>{contentUse.education.major}</p>
          {contentUse.education.city}
        </div>
        {bulletEducation}
      </div>
    </div>
  );
};

export default EducationR;

import React, { useContext } from "react";
import myClasses from "./Right.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

const ProfessionalR = () => {
  const { content, control, contentFake } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  let title;
  if (Object.keys(contentUse.professional).length < 3) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Professional Experience</strong>
      </h3>
    );
  }

  let bulletProfessional1 = contentUse.professional.desc1.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  let bulletProfessional2 = contentUse.professional.desc2.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  return (
    <div className={myClasses.professionalResume}>
      <div className="">
        {title}
        <div className={myClasses.compNames}>
          <p>
            <strong>{contentUse.professional.company1}</strong>
          </p>
          {contentUse.professional.start1}{" "}
          {contentUse.professional.end1
            ? "- " + contentUse.professional.end1
            : contentUse.professional.start1
            ? "- Present"
            : null}
        </div>
        <div className={myClasses.compNames}>
          <p>{contentUse.professional.position1}</p>
          {contentUse.professional.local1}
        </div>
        <ul>{bulletProfessional1}</ul>
        <div className={myClasses.compNames}>
          <p>
            <strong>{contentUse.professional.company2}</strong>
          </p>
          {contentUse.professional.start2}{" "}
          {contentUse.professional.end2
            ? "- " + contentUse.professional.end2
            : contentUse.professional.start2
            ? "- Present"
            : null}
        </div>
        <div className={myClasses.compNames}>
          <p>{contentUse.professional.position2}</p>
          {contentUse.professional.local2}
        </div>
        <ul>{bulletProfessional2}</ul>
      </div>
    </div>
  );
};

export default ProfessionalR;

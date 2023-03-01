import React, { useContext } from "react";
import myClasses from "./Right.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

const HeaderR = () => {
  const { content, control, contentFake } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  let divider;
  if (Object.keys(contentUse.header).length > 0) {
    divider = <hr className={myClasses.dividerRight} />;
  } else {
    divider = "";
  }

  return (
    <div>
      <div className={myClasses.headerResume}>
        <div className={myClasses.contentHeader}>
          <h1 className={myClasses.h1Name}>{contentUse.header.name}</h1>
          <p>
            {contentUse.header.address}
            <br />
            {contentUse.header.city} {contentUse.header.state}
            {"  "}
            {contentUse.header.zip}
            <br />
            {contentUse.header.phone}
            <br />
            {contentUse.header.email}
          </p>
          <br />
          <p
            style={{
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            {contentUse.header.summary}
          </p>
          {divider}
        </div>
      </div>
    </div>
  );
};

export default HeaderR;

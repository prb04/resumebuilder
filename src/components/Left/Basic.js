import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Professional from "./Professional";
import Education from "./Education";
import AdditionalSkills from "./AdditionalSkills";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import myClasses from "./Left.module.css";
import { green, red } from "@material-ui/core/colors";
import logo from "../../assets/resume.png";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Clear";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { ResumeContext } from "../../contexts/ResumeContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  rootAdd: {
    background: "linear-gradient(135deg, #000 0%, #404040 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #F2F3F4",
    color: "white",
    height: 30,
    textAlign: "center",
    fontSize: 10,
    marginTop: 20,
    marginRight: 20,
    fontWeight: 700,
  },
  rootRemove: {
    background: "linear-gradient(45deg, #0E0B38 11.2%, #EF2525 91.1%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    textAlign: "center",
    minWidth: 130,
    fontSize: 10,
    marginTop: 20,
    marginRight: 20,
    fontWeight: 700,
  },

  headerLink: {
    color: "#000a12 ",
  },
}));

const Left = () => {
  const { setContent } = useContext(ResumeContext);
  const { control, addData, removeData } = useContext(ResumeContext);
  const classes = useStyles();

  function useData(e) {
    e.preventDefault();
    addData();
  }

  function clearData(e) {
    e.preventDefault();
    removeData();
  }

  useEffect(() => {
    console.log(window.location.pathname);
  });
  const handleDeleteDate = (event) => {
    event.preventDefault();
    localStorage.clear();
    setContent({
      header: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    });
  };
  const handleSaveToPDF = (event) => {
    event.preventDefault();
    window.print();
  };

  let expData;
  if (control) {
    expData = (
      <Button
        color="secondary"
        onClick={clearData}
        className={classes.rootRemove}
      >
        remove example
      </Button>
    );
  } else {
    expData = (
      <Button color="primary" onClick={useData} className={classes.rootAdd}>
        example
      </Button>
    );
  }

  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <div styles={{ flexGrow: 2 }}>
          <Link to="/" style={{ display: "inline" }}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div styles={{ flexGrow: 1 }}>{expData}</div>
        <div className={myClasses.root}>
          <div className={myClasses.btns}>
            <Button href="#" onClick={handleDeleteDate}>
              <Tooltip title="Delete All Data" placement="right">
                <Avatar className={classes.red}>
                  <ClearIcon />
                </Avatar>
              </Tooltip>
            </Button>
            <Button href="#" onClick={handleSaveToPDF}>
              <Tooltip title="Save to PDF" placement="right">
                <Avatar className={classes.green}>
                  <PictureAsPdfIcon />
                </Avatar>
              </Tooltip>
            </Button>
          </div>
        </div>
      </div>

      <div className="">
        <Router>
          <div className={myClasses.topLeft}>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/header"
            >
              Header
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/professional"
            >
              Experience
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/education"
            >
              Education
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/additional"
            >
              Skills
            </Button>
          </div>
          <div>
            <hr className={myClasses.hr} />
            <div className={myClasses.formsSection}>
              <Switch>
                <Route path="/basic/header">
                  <Header />
                </Route>
                <Route path="/basic/professional">
                  <Professional />
                </Route>
                <Route path="/basic/education">
                  <Education />
                </Route>
                <Route path="/basic/additional">
                  <AdditionalSkills />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Left;

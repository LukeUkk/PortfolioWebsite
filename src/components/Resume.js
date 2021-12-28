import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Particles from "./Particles";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    width: "82%",
    margin: "2% 10% 2% 10%",
    borderRadius: "4px",
    border: "1px solid #223333",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Particles />

      <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        <Typography variant="body1" align="center" className={classes.body1}>
            Breif Overview
        </Typography>
      </Typography>

      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            <Typed strings={["FullStack Web Developer"]} typeSpeed={50} />
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Effective Consumable Solutions
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
              I worked with the MD on the design of the “GreenAgenda” web page, the website was made using wordpress.org. Also while I was employed here, I redesigned their customer facing website to make it moden & responsive. This was an important task as their website was the main source of income.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
             <Typed strings={["FullStack Web Developer"]} typeSpeed={50} />

          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            DIVA Telecom
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
             I was employed by Diva to finish creating their Laravel based internal management system, which each employee used daily to record and edit everything about their customers and more, 
             The project started at the beginning of 2017 and it wasn't kept upto date so I gained alot of experience when it came to debugging other peoples code. 
             While at the company I was tasked with planing and making a promotional landing page, converting the design teams mockups into a usable web application, this ended up generating sales.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            <Typed strings={["Software Developer"]} typeSpeed={50} />
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            ESP Projects
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Working at ESP Projects I was mainly tasked with working on their Laravel internal management system, Called the "Intranet" after a year of development the MD saw the value of reselling the Intranet to there customers, so the rest of my time here was spent working on custom Laravel applications for clients using various API's but also working on the reselling of the Intranet as a SAAS product.
          </Typography>
        </Box>
        
        
         <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        > 
          ...
        </Typography>
        {/*<Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Company Role
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            company name where worked
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            ...
          </Typography>
        </Box>*/}
      </Box>
    </Box>
  );
};

export default Resume;

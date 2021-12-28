import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import $ from 'jquery'; 
import "../App.css";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';




import projectHeaderImg1 from "../images/ECS_index.png";
import projectHeaderImg2 from "../images/DIVA_homepagecake.jpg";
import projectHeaderImg3 from "../images/GOLHome.JPG";
import projectHeaderImg4 from "../images/ESP_Dash.PNG";
import projectHeaderImg6 from "../images/react.png";
import Particles from "./Particles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  
}));

var projects = [
  {
    name: "Effective Consumable Solutions",
    description: `The Above is showing the landing page that I redesigned and developed for ECS. This was made using pure CSS3 & HTML5 with a reactive design, backend was Majento.`,
    image: projectHeaderImg1,
    additonalImages: [
        projectHeaderImg6,
    ]
  },
  {
    name: "DIVA Telecom",
    description: `The above is the home page of the management system I created for DIVA, the page shows important things to be actioned.
    The home page includes a change log where employees can see what changes have been made and if it affects anything they use so they are aware. This site was made using Laravel.`,
    image: projectHeaderImg2,
    // ideal way is to have additonalImages in here 
  },
  {
    name: "Gaming Forum",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: projectHeaderImg3,
    live_demo_link: "https://gol-clan.org",
  },
  {
    name: "ESP Projects",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: projectHeaderImg4,
  },

];

const EcsAdditonalImages = [
    projectHeaderImg1,
];

const DivaAdditonalImages = [
  projectHeaderImg2,
];

const GOLAdditonalImages = [
  projectHeaderImg3,
];

const ESPAdditonalImages = [
  projectHeaderImg4,
];

console.log(EcsAdditonalImages)

var cardID = null;
function openCloseCarousel(e) {
  e.preventDefault();

  if (e.target.id != '') {  
    cardID = e.target.id;
  }
  
  var carousel = $('#carousel_'+cardID);
  var carouselParent = carousel.closest('.carousel-root');

  if(carouselParent.css("display") == "none"  && cardID != 'carousel_') {
    carouselParent.show();
    $('.carouselCloseButton').show();
  } else {
    carouselParent.hide();
    $('.carouselCloseButton').hide();
  }
}
class CloseButton extends Component {
  render() {
    return <div className="carouselCloseButton" onClick={openCloseCarousel}><CloseIcon/> </div>;
  }
}
// For each carousel / For each slide
class ECSCarousel extends Component {
  render() {
      return (
        
        //projects.map((project, i) => (
          <Carousel>
            {EcsAdditonalImages.map((img, i) => (
              <div key={i} id="carousel_0">
                  <img  key={img} src={img} />
                  <p className="legend">Legend 1</p>
              </div>
            ))}
          </Carousel>
        //))
      );
  }
};

class DIVACarousel extends Component {
  render() {
      return (
          <Carousel>
            {DivaAdditonalImages.map((img, i) => (
              <div key={i}  id="carousel_1">
                  <img  key={img} src={img} />
                  <p className="legend">Legend 1</p>
              </div>
            ))}
          </Carousel>
      );
  }
};

class GOLCarousel extends Component {
  render() {
      return (
          <Carousel>
            {GOLAdditonalImages.map((img, i) => (
              <div key={i}  id="carousel_2">
                  <img  key={img} src={img} />
                  <p className="legend">Legend 1</p>
              </div>
            ))}
          </Carousel>
      );
  }
};

class ESPCarousel extends Component {
  render() {
      return (
          <Carousel>
            {ESPAdditonalImages.map((img, i) => (
              <div key={i}  id="carousel_3">
                  <img  key={img} src={img} />
                  <p className="legend">1</p>
              </div>
            ))}
          </Carousel>
      );
  }
};
// TODO make 4x DemoCaraousel class or a for loop like below
// in each have photo of websites
// Call 4x DemoCarousel Below 
// Use css to hide all carousel 
// Then on click a project show relevent DemoCarousel
const Portfolio = () => {
  const classes = useStyles();
  
  return (
    
    <Box component="div" className={classes.mainContainer}>
      <Particles />
      <ECSCarousel />
      <DIVACarousel />
      <GOLCarousel />
      <ESPCarousel />
      <CloseButton />
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  id={i}
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                  onClick={openCloseCarousel}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                { 
                  (
                    (project.live_demo_link) 
                      ? 
                    <Button size="small" color="primary" target="_blank" href={project.live_demo_link} >
                      Live Demo
                    </Button> : ''
                  ) 
                }

              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default Portfolio;

import React from 'react';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.about}>
      <h1>ABOUT</h1>
        <div className={classes.details}>
          <h2>Hi! I am Likhan Sarkar</h2>
          <h3>I write code everyday to solve problems at work. I have worked on languages like React.js , Node.js, Javascript, HTML , CSS, C++ and Java.
                I also love to participate in online hackathons whenever I get time off work. I am passionate to create Technology which will solve problems and have an effect in the real world.</h3>
          <a href={"https://drive.google.com/file/d/1o5-Wmz3DjcaEVIJvFJhkzxDsfC-JzY5k/view?usp=sharing"}>Checkout my resume</a>
          <h5>Contact Me Here!</h5>
          <h4 className={classes.eph}>Email: <a href="mailto:likhansarkar007@gmail.com">likhansarkar007@gmail.com</a></h4>
          <h4 className={classes.eph}>Phone: <p>(+91) 8420614409</p></h4>
        </div>
        <div className={classes.image}>
        </div>
      </div>
  );
}

export default About;
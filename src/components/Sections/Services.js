import React from 'react' ;
import { FaReact,FaNodeJs,FaJava,FaHtml5,FaCss3Alt} from 'react-icons/fa';
import {SiCplusplus} from 'react-icons/si'
import classes from './Services.module.css';

const Services =() => {
  return (
      <div className={classes.services}>
          <h1>SKILLS</h1>
          <div className={classes.skills}>
              <h3>TECHNOLOGIES I HAVE WORKED ON </h3> 
              <h2>My skills</h2>
          </div>
          <ul className={classes.skillicons}>
              <li><FaReact className={classes.skilliconsimage}/><h2>React.Js</h2></li>
              <li><FaHtml5 className={classes.skilliconsimage}/><h2>HTML</h2></li>
              <li><FaCss3Alt className={classes.skilliconsimage}/><h2>CSS</h2></li>
              <li><FaNodeJs className={classes.skilliconsimage}/><h2>Node.Js</h2></li>
              <li><SiCplusplus className={classes.skilliconsimage}/><h2>C++</h2></li>
              <li><FaJava className={classes.skilliconsimage}/><h2>Java SE</h2></li>
          </ul>
      </div>
  );
}

export default Services;
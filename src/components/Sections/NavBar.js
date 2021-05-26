import React from 'react' ;
import { FaGithub,FaFacebook,FaInstagram,FaLinkedinIn,FaReact, FaHeart} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr'
import classes from './NavBar.module.css';
import Modal from './Modal.js';

const NavBar =(props) => {
    return (
      <Modal onClose={props.onClose}>
      <GrClose onClick={props.onClose} className={classes.closeIcon}/>
      <div className={classes.navBar}>
      <h5>Contact Me Here!</h5>
      <h4> {"Email:"}</h4><a href="mailto:likhansarkar007@gmail.com">likhansarkar007@gmail.com</a>
      <p> Phone: (+91) 8420614409</p>
      </div>
      <div className={classes.navfooter}>
                <ul>
                    <li><a href="https://github.com/sarkarification"><FaGithub  className={classes.skilliconsimage}/></a></li>
                    <li><a href="https://www.facebook.com/likhan.trueblue"><FaFacebook className={classes.skilliconsimage}/></a></li>
                    <li><a href="https://www.instagram.com/_sarkarification_/"><FaInstagram className={classes.skilliconsimage}/></a></li>
                    <li><a href="https://linkedin.com/in/likhan-sarkar/"><FaLinkedinIn className={classes.skilliconsimage}/></a></li>
                </ul>
                Designed by Likhan Sarkar using <FaReact /> and with <FaHeart />.
                <br></br>
                <br></br>
                Please visit my <FaGithub /> to support.
        </div>
      </Modal>

    );
}
  
export default NavBar;

  





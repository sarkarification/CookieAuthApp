import React from 'react';
import { FaGithub,FaFacebook,FaInstagram,FaLinkedinIn,FaReact, FaHeart} from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
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
    );
}

export default Footer;
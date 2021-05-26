import React from 'react';
import classes from './WorkExp.module.css';

const WorkExp = () => {
    return (
        <div className={classes.WorkExp}>
            <h1>WORK</h1>
            <div className={classes.workplacedetails}>
                <h3>WORK EXPERIENCE</h3>
                <h2>My work experience</h2>
                <div className={classes.workplaceitem}>
                    <div className={classes.wiprologo}></div>
                    <h2>Wipro Technologies Limited <h3>Frontend Developer</h3> <h4>2018 - Present</h4></h2>
                    <ul>
                        <li>Developed various applications for a client in the investment Banking Domain. </li>
                        <li>Worked on Developing UI using ReactJs, JavaScript, HTML, CSS and integrating them with REST API's. </li>
                        <li>Collaborated with multiple teams to create optimal solutions. Maintained the same applications and working on bug fixes. </li>
                        <li>Won multiple awards for fixing critical bugs and delivering complex components on a timely basis.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkExp;
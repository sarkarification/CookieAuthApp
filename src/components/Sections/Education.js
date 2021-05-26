import React from 'react';
import classes from './Education.module.css';

const Education =() => {
  return (
      <div className={classes.education}>
          <h1>EDUCATION</h1>
          <div className={classes.educationdetails}>
                <h3>ACADEMIA</h3>
                <h2>My education qualifications</h2>
                <button>BACHELOR DEGREE OF COMPUTER SCIENCE</button>
            </div>
      </div>
  );
}

export default Education;
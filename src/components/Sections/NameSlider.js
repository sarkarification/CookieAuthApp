import React from 'react' 
import classes from './NameSlider.module.css';

// let lastScrollY = 0;

const NameSlider =() => {

  // useEffect(()=> {window.addEventListener('scroll',handleScroll)}, [])

  // const handleScroll = () => {
  //   lastScrollY = window.scrollY;
  //   // console.log(lastScrollY)};

  return (
    <div className={classes.sliderDiv}>
      <h2>HELLO! I'M</h2>
      <h1>LIKHAN SARKAR</h1>
      <h2>I'M A WEB DEVELOPER</h2>
    </div>
  );
}

export default NameSlider;
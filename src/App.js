import React,{useState} from 'react' 
import {BiUpArrow} from 'react-icons/bi'
import classes from './App.module.css';
import Header from './components/Sections/Header';
import NameSlider from './components/Sections/NameSlider';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import WorkExp from './components/Sections/WorkExp';
import Footer from './components/Sections/Footer';
import NavBar from './components/Sections/NavBar';

// import Education from './components/Sections/Education';

const App =() => {

  const [showNav, setShowNav]= useState(false);

  const showNavHandler = () => {
    setShowNav(true)
  }

  const hideNavHandler = () => {
    setShowNav(false)
  }

  const handleScroll = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
    
  }

  return (
    <div className={classes.appContainer}>
      {showNav && <NavBar onClose={hideNavHandler} />}
      <div className={classes.app}>
        <Header onShow={showNavHandler}/>
        <NameSlider />
        <About />
        <Services />
        <WorkExp />
        {/* <Education /> */}
        <div className={classes.buttonContainer}>
          <button className={classes.button} onClick={handleScroll}><BiUpArrow className={classes.buttonimage}/></button>
        </div>
        <Footer />
        
      </div>
    </div>
  );
}

export default App;

// lastScrollY = window.scrollY;

//         if (lastScrollY > 50) {
//             this.tempModal.current.style.width = "100px";
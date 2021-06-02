import classes from "./NotesPage.module.css";
import Wrapper from "./Wrapper";

const NotesPage = (props) => {
  return (
    <Wrapper>
      <section className={classes.container}>
        <h1>NOTES</h1>
        <h2>Personal messages to you </h2>
        <section className={classes.imagecontainer}>
          <h1>Meena, 23</h1>
          <h2>Tap to review 50+ notes</h2>
        </section>
        <section className={classes.intContainer}>
          <div>
            <h1>Interested In You</h1>
            <h2>Premium members can view all their likes at once</h2>
          </div>
          <div>
            <button>Upgrade</button>
          </div>
        </section>
        <section className={classes.likedpicsContainer}>
          <div className={classes.d1}>
            <h2>Teena</h2>
          </div>
          <div className={classes.d2}>
            <h2>Beena</h2>
          </div>
        </section>
      </section>
      {/* <footer>
        <div>
          <img src="">
        </div>
      </footer> */}
    </Wrapper>
  );
};

export default NotesPage;

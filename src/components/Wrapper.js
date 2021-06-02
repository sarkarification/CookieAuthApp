import Header from "./Header";

const Wrapper = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Wrapper;

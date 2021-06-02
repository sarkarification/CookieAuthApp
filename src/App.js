import { useState } from "react";
import NotesPage from "./components/NotesPage";
import { useCookies } from "react-cookie";
import PhoneAuthPage from "./components/PhoneAuthPage";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [authData, setAuthData] = useState(false);

  const authDataHandler = () => {
    setAuthData(true);
    // console.log("app.js");
    // console.log(authData);
  };

  setCookie("Cookie", "__cfduid=df9b865983bd04a5de2cf5017994bbbc71618565720", {
    path: "/",
  });

  return (
    <>
      {!authData && <PhoneAuthPage authData={authDataHandler} />}
      {authData && <NotesPage />}
    </>
  );
}

export default App;

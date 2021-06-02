import ReactDOM from "react-dom";
import { AuthContextProvider } from "./store/auth-context";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <CookiesProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </CookiesProvider>,
  document.getElementById("root")
);

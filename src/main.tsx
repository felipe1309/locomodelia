import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./app"
import { Provider } from "react-redux";
import store from "./app/store";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);

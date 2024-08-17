import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appstore from "./utils/appStore";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;

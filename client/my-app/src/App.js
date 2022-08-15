import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import Update from "./components/update/update";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Main} exact></Route>
        <Route path="/update" component={Update}></Route>
      </Switch>
    </div>
  );
}

export default App;

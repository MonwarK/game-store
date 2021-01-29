import Homepage from "./pages/homepage.component";
import XboxPage from "./pages/shop/shop.component"
import { Route, Switch } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/xbox" exact component={XboxPage} />
      </Switch>
    </div>    
  );
}

export default App;

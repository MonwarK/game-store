import Homepage from "./pages/homepage.component";
import { Route, Switch } from "react-router-dom";

const XboxPage = () => {
  return(
    <div>
      <h1>XBOX</h1>
    </div>
  )
}

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

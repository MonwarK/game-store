import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import { Route, Switch } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
        </Switch>
    </div>    
  );
}

export default App;

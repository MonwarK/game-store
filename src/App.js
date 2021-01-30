import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import Header from "./components/header/header.component"
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import "./App.css"

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
  //Sets User to nothing
  let unsubscribeFromAuth = () => null;

  useEffect(()=> {

    //If the user ahs logged in, 'ununsubscribeFromAuth' function will be setting user value
    unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });

          console.log(currentUser);
        }
        setCurrentUser(userAuth)
      }
    );

    //Always set function
    return () => unsubscribeFromAuth();
    
  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/signin" exact component={SignInAndSignUp} />
        </Switch>
    </div>    
  );
}

export default App;

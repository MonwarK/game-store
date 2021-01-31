import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import Header from "./components/header/header.component"
import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { setCurrentUser } from "./redux/user/user.actions";
import { Route, Switch, Redirect } from "react-router-dom";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import "./App.css"

function App({currentUser,setCurrentUser}) {
  
  //Sets User to nothing
  let unsubscribeFromAuth = () => null;

  useEffect(()=> {

    //If the user has logged in, 'ununsubscribeFromAuth' function will be setting user value
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
        }
        setCurrentUser(userAuth)
      }
    );

    //Always set function
    return () => unsubscribeFromAuth();
    
  }, [])

  return (
    <div>
      <Header/>
        <Switch>
          <Route 
            path="/" 
            exact 
            component={HomePage}             
          />
          <Route 
            path="/shop" 
            exact 
            component={ShopPage}             
          />
          <Route 
            path="/signin" 
            exact 
            render={
              () => currentUser 
              ? (<Redirect to="/" />) 
              : (<SignInAndSignUp />) 
            }            
          />
        </Switch>
    </div>    
  );
}

const mapStateToProps = ({ users }) => ({
  currentUser: users.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

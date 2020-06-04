import React, {Component} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


firebase.initializeApp({
  apiKey: "AIzaSyBTxz8wIFzQpO03W7ROdjRDMpou-hjkfLU",
  authDomain: "travshare-d7769.firebaseapp.com"
})

class Auth extends Component {

  constructor()
  {
    super()
    this.state =
    {
      isSignedIn:false
    }
  }
    uiConfig =
    {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ],
    callbacks:
    {
      signInSuccessWithAuthResult: () => false
    }
    }
    componentDidMount = () =>
    {
        firebase.auth().onAuthStateChanged(user =>
        {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }
  render () {
      return (
        <div>
        {this.state.isSignedIn ?
        (
            <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img src={firebase.auth().currentUser.photoURL}  alt="My Awesome"/>
            </span>
        )
        :
        (
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        )}
        </div>
      )
  }
}

export default Auth;

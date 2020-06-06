import React, {Component} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './Homepage/nav.css';
import SignedIn from './SignedIn/SignedIn';


firebase.initializeApp({
  apiKey: "AIzaSyBTxz8wIFzQpO03W7ROdjRDMpou-hjkfLU",
  authDomain: "travshare-d7769.firebaseapp.com"
})


const css = `
.firebaseui-card-content {
    padding:0px 0px;
    display:table;
    position: relative;
    left: 20%;
}
.firebaseui-idp-list
{
  display:flex;
  flex-direction:column;
}
.firebaseui-idp-button.mdl-button
{
  height:58px;
}
`

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
    signInSuccessUrl: window.location.href,
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
    if (!this.state.isSignedIn) {
    return (
      <div className="social">
        <h1>Travshare</h1>
        <br />
        <p>Signin with your social account</p>
        <p>We won't post anything anywhere</p>
        <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        <style>
          {css}
        </style>
      </div>
    );
  }
  return (
    <div>
      <SignedIn ></SignedIn>
    </div>
  );
  }
}

export default Auth;

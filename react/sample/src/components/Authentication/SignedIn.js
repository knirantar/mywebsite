import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth';
import {Link} from 'react-router-dom'

class SignedIn extends React.Component {

  componentDidMount(props){
console.log(this.props.location.state.isSignedIn);}

  render () {
      const name = firebase.auth().currentUser.displayName;
      return (
        <div>
          <p>Welcome {name}You are now signed-in!</p>
            <Link to="/"><button onClick={() => firebase.auth().signOut()}>Sign-out</button></Link>
        </div>
      );
  }
}


export default SignedIn;

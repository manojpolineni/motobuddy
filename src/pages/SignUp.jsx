import React, { useState, useEffect } from 'react';
import {  f7,  Page,    Link,    LoginScreenTitle,  List,  ListInput,  ListButton,    BlockFooter} from 'framework7-react';
import firebase from 'firebase';
import axios from "axios";
require('firebase/auth');
const SignUp = ({$f7,router}) => {
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const clearState = () => {
    setPassword('')
    setEmail('')
    setMobile('')
  }
  const  Sign_out = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      window.location.href="/"
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  const signup = (e) => {
    e.preventDefault();
    let data = {
      useremail,
      password,
      mobile
    }
    const postuser = data => {
      axios.post("http://localhost:4000/signups/signup-user", data)
        .then(d => {
          console.log(d);
        })
        .catch(err => alert(err))
    }
    firebase.auth().createUserWithEmailAndPassword(useremail,password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    alert("Successfully SignedUp");
    console.log(mobile);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
   console.log(data)
    clearState();
    postuser(data);
  }
   const Google_signup = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = '/home'
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    f7.dialog.alert(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
  }
return (
  <Page loginScreen>
    <label></label>
    <LoginScreenTitle id="signup">Sign Up Page</LoginScreenTitle>
    <List form>
    <ListInput
       label="Phone"
       type="tel"
       placeholder="Your phone number"
       value={mobile}
       onInput={(e) => {
         setMobile(e.target.value);
       }}
  />
      <ListInput
        label="Email"
        type="email"
        placeholder="Your email"
        value={useremail}
        onInput={(e) => {
          setEmail(e.target.value);
        }}
      />
      <ListInput
        label="Password"
        type="password"
        placeholder="Your password"
        value={password}
        onInput={(e) => {
          setPassword(e.target.value);
        }}
      />
    </List>
    <List>
      <ListButton onClick={signup}>Sign Up</ListButton>
    <button onClick={Google_signup} className="button">Google signup</button> 
      <BlockFooter>
        <br />
        <br/>
        <br />
      </BlockFooter>
    </List>
  </Page> 
);
};
export default SignUp;
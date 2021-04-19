import React, { useState, useEffect } from 'react';
import {  f7,  Page,    Link,    LoginScreenTitle,  List,  ListInput,  ListButton,    BlockFooter} from 'framework7-react';
import firebase from 'firebase';
require('firebase/auth');
// import './styles.css';
const firebaseConfig = {
  apiKey: "AIzaSyA6d9s6G7a35RY8ZnwI3X_DvBULGb1uMpE",
    authDomain: "motobuddy-app.firebaseapp.com",
    projectId: "motobuddy-app",
    storageBucket: "motobuddy-app.appspot.com",
    messagingSenderId: "755860262766",
    appId: "1:755860262766:web:90573000184fe99a9c7b7f"
  // apiKey: "AIzaSyACNhiEnEtfXPbe4WV0DYPySuRBtGSpM8k",
  // authDomain: "coupons-840f7.firebaseapp.com",
  // projectId: "coupons-840f7",
  // storageBucket: "coupons-840f7.appspot.com",
  // messagingSenderId: "613220229648",
  // appId: "1:613220229648:web:cf68e7e4bbec90c4016095"
};
firebase.initializeApp(firebaseConfig);
const LogInPage = ({$f7,router}) => {
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signin = () => {
    firebase.auth().signInWithEmailAndPassword(useremail,password).then((userCredential)=>{
      var user = firebase.auth().currentUser;
      console.log((user.emailVerified))
      if(user){
      // var user = userCredential.user;
        // console.log('user successfully logged in');
        // window.location.href = '/home'
        alert("logged in successfully");
        window.location.href = '/home'
      }else{
        f7.dialog.alert('User is not verified, Please check your email and verify with link');
      }
    }).catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      f7.dialog.alert(errorMessage);
      console.log(errorMessage,errorCode);
    })
  }
  var user = firebase.auth().currentUser;
  console.log(user);
  // const Google_sign = () => {
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //   firebase.auth()
  // .signInWithPopup(provider)
  // .then((result) => {
  //   /** @type {firebase.auth.OAuthCredential} */
  //   var credential = result.credential;
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   var token = credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   window.location.href = '/home'
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   f7.dialog.alert(errorMessage);
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  // });
  // }
  // const Facebook_signin = () => {
  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   firebase
  // .auth()
  // .signInWithPopup(provider)
  // .then((result) => {
  //   var credential = result.credential;
  //   // The signed-in user info.
  //   var user = result.user;
  //   console.log('successfully signed in facebook')
  //   window.location.href = '/user-list'
  //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //   var accessToken = credential.accessToken;
  //   // ...
  // })
  // .catch((error) => {
  //   // Handle Errors here.
  //   console.log('Not signed in facebook')
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   f7.dialog.alert(errorMessage);
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  // });
 // }
 const forgot = ()=> {
   window.location = '/forgot-password'
 }
  return (
    <Page loginScreen>
      <label></label>
      <LoginScreenTitle>Sign In Page</LoginScreenTitle>
      <List form>
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
        <ListButton onClick={signin}>Sign In</ListButton>
        <BlockFooter>
          <ListButton onClick={forgot}>forgot password?</ListButton>
          <br />
          <Link href="/signup/">Sign Up</Link>
          <br/>
          {/* <button onClick={Facebook_signin} className="button">Facebook signin </button>
          <button onClick={Google_sign} className="button">Google signin</button> */}
          <br />
        </BlockFooter>
      </List>
    </Page> 
  );
};
export default LogInPage;
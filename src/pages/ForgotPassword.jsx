import React, { useState, useEffect } from 'react';
import {  f7,  Page,  Block,  Link,    LoginScreenTitle,  List,  ListInput,  ListButton,    BlockFooter} from 'framework7-react';
import firebase from 'firebase';
require('firebase/auth');
const ForgotPassword = ({$f7,router}) =>{
    const [useremail, setEmail] = useState('');
   const forgot_password = () => {
   firebase.auth().sendPasswordResetEmail(useremail).then((userCredential) => {
   var user = firebase.auth().currentUser;
  if(user) {
      alert("we sent a link")
  } else {
      f7.dialog.alert("entered wrong mail")
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
    return ( 
     <div>
         <Page>
         <Page loginScreen>
      <LoginScreenTitle>forgot password Page</LoginScreenTitle>
      <List form>
        <ListInput
          label="Email"
          type="email"
          placeholder="enter Your email"
        value={useremail}
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
        </List>
        <List>
        <ListButton onClick={forgot_password}>Submit</ListButton>
        </List>
        </Page>
         </Page>
     </div>
    )
}
export default ForgotPassword
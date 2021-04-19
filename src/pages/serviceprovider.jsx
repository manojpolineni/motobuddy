import React, { useState, useEffect } from 'react';
import {  f7,  Page,    Link,    LoginScreenTitle,  List,  ListInput,  ListButton,    BlockFooter} from 'framework7-react';
// import firebase from 'firebase';
import axios from "axios";
// require('firebase/auth');



const serviceprovider = ({$f7,router}) => {
  const [name, setName] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [emailid, setEmail] = useState('');
  const [work, setWork] = useState('');
  const [location, setLocation] = useState('');
  const clearState = () => {
   setName(''),
   setMobileno(''),
   setEmail(''),
   setWork(''),
   setLocation('')

  }

  const Service = (e) => {
    e.preventDefault();
    let data = {
      name,
      mobileno,
      emailid,
      work,
      location
    }
    const postuser = data => {
      axios.post("http://localhost:4000/services/service-add", data)
        .then(d => {
          console.log(d);
          alert("Succefull Registered");
        })
        .catch(err => alert(err))
    }
    console.log(data)
    clearState();
    postuser(data);
  }
return (
    

  <Page loginScreen>
    
    <label></label>
    <LoginScreenTitle id="signup">Service  Registraion  page</LoginScreenTitle>
    <List form>
    <ListInput
       label="name"
       type="text"
       placeholder="Enter your name"
       value={name}
       onInput={(e) => {
         setName(e.target.value);
       }}
  />

      <ListInput
        label="Mobileno"
        type="tel"
        placeholder="enter your mobileno"
        value={mobileno}
        onInput={(e) => {
          setMobileno(e.target.value);
        }}
      />
      <ListInput
        label="Email-id"
        type="text"
        placeholder="Enter your email-id"
        value={emailid}
        onInput={(e) => {
          setEmail(e.target.value);
        }}
      />
       <ListInput
        label="work"
        type="text"
        placeholder="enter the work"
        value={work}
        onInput={(e) => {
          setWork(e.target.value);
        }}
      />
       <ListInput
        label="location"
        type="text"
        placeholder="Your location"
        value={location}
        onInput={(e) => {
          setLocation(e.target.value);
        }}
      />
       
      
    </List>
    <List>
      <ListButton onClick={Service}>Submit</ListButton>
      <BlockFooter>
       
        <br />
        <br/>
        <br />
      </BlockFooter>
    </List>
  
  </Page> 

 
      
);
};
export default serviceprovider;
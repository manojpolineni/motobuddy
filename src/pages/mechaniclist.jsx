import React, { useState, useEffect } from 'react';
import {  f7,  Page,    Link,    LoginScreenTitle,  List,  ListInput,  ListButton,    BlockFooter} from 'framework7-react';
// import firebase from 'firebase';
import axios from "axios";
// require('firebase/auth');



const mechaniclist = ({$f7,router}) => {
  const [name, setName] = useState('');
  const [work, setWork] = useState('');
   const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [fee, setFee] = useState('');
  const clearState = () => {
   setName(''),
   setWork(''),
   setExperience(''),
   setLocation(''),
   setFee('')

  }

  const Service = (e) => {
    e.preventDefault();
    let data = {
      name,
      work,
      experience,
      location,
      fee
    }
    const postuser = data => {
      axios.post("http://localhost:4000/mechanics/mechanic-add", data)
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
    {/* <LoginScreenTitle id="signup">Service  Registraion  page</LoginScreenTitle> */}
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
        label="work"
        type="text"
        placeholder="enter your work"
        value={work}
        onInput={(e) => {
          setWork(e.target.value);
        }}
      />
      <ListInput
        label="Experience"
        type="text"
        placeholder="Enter your years of experience"
        value={experience}
        onInput={(e) => {
          setExperience(e.target.value);
        }}
      />
       <ListInput
        label="location"
        type="text"
        placeholder="enter the location"
        value={location}
        onInput={(e) => {
          setLocation(e.target.value);
        }}
      />
       <ListInput
        label="fee"
        type="text"
        placeholder="Your amount"
        value={fee}
        onInput={(e) => {
          setFee(e.target.value);
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
export default mechaniclist;
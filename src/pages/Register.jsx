import React, { useState, useRef } from 'react';
import {
  Page,
  Navbar,
  Block,
  Button,
  Popup,
  NavRight,
  Link,
  BlockTitle,
  f7,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,   
} from 'framework7-react';
import firebase from 'firebase';
import axios from "axios";
require('firebase/auth');

export default () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const popup = useRef(null);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [mobile, setMobile] = useState('');
  const [msg, setMail] = useState('');
//   const [color, setColor] = useState('');
//   const [vehiclenumber, setVehicleNumber] = useState('');
  const [showMessage, setShowMessage] = useState('');
  const clearState = () => {
      setMake('')
      setModel('')
      setMobile('')
      setMail('')
    //   setYear('')
    //   setColor('')
    //   setVehicleNumber('')
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
        make,
        model,
        mobile,
        msg
        // year,
        // color,
        // vehiclenumber
    }
    console.log(data)
    postuser(data);
       
         clearState();
        setShowMessage(true);

        axios.post("http://localhost:4000/vehicles/vehicle-add", data)
            .then(d => {
                console.log(d);
                alert("Data inserted Suucessfully");
            })
            .catch(err =>alert(err))
        postuser(data);
        // clearState();
        setShowMessage(true);
    }
    
    const postuser = data => {
}
const hi = () => {
    window.location.href = "/service"
  }
  const log  = () => {
    window.location.href = "/login"
  }
  const Register = () => {
    // Create popup
    if (!popup.current) {
      popup.current = f7.popup.create({
        content: `
          
        `.trim(),
      });
    }
    // Open it
    popup.current.open();
  };

  return (
    
      
    <Page>
      <Navbar title="WELCOME"></Navbar>
      <Block>
      
        <p>
          <Button fill  id="vehicle-btn" onClick={log} >
            User Login
          </Button>
        </p>
        <p>
          <Button fill  id="vehicle-btn" onClick={hi}>
              Join as Professional
          </Button>
        </p>
      </Block>
      <Popup
        className="demo-popup"
        opened={popupOpened}
        onPopupClosed={() => setPopupOpened(false)}
      >
        <Page>
          <Navbar title="Book a Serive">
            <NavRight>
              <Link popupClose>Close</Link>
            </NavRight>
          </Navbar>
        </Page>
      </Popup>
</Page>
      
    
  );
};
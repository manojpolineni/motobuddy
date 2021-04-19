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
    window.location.href = "/vehicle-list"
  }
  const mechanics = () => {
    window.location.href = "/addmechanic"
  }
  const Admin = () => {
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
      <Navbar title="This is Admin Page"></Navbar>
      <Block>
      
        <p>
          <Button fill  id="vehicle-btn" >
            Users
          </Button>
        </p>
        <p>
          <Button fill  id="vehicle-btn" >
              Service Providers
          </Button>
        </p>
        <p>
          <Button fill  id="vehicle-btn" onClick={hi} >
              All Bookings
          </Button>
        </p>
        <p>
          <Button fill  id="vehicle-btn"onClick={mechanics} >
              Add mechanic
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
          <Page loginScreen>
    
    <label></label>
    <LoginScreenTitle id="signup">Book  Your Service Here</LoginScreenTitle>
    <List form>
    
                         <ListInput
                                type="select"
                                defaultValue="vehicle"
                                value={make}
                                onInput={(e) => {
                                setMake(e.target.value);
                                }}
                                 >
                                <option value="vehicle">Select Your Vehicle</option>
                                <option value="Honda">Honda</option>
                                <option value="Bajaj">Bajaj</option>
                                <option value="Enter vehicle">Enter Vehicle</option>
                                <option value="Honda shine">Honda Shine</option>
                                <option value="Honda Sp">Honda Sp</option>
                                <option value="Pulsar 150">Pulsar 150</option>
                                <option value="Pulsar 220">Pulsar 220</option>
                                <option value="Royal Enfield">Royal Enfield</option>
                                <option value="Apache">Apache</option>
                                <option value="KTM">KTM DUKE 250</option>
                                <option value="Others">Others</option>
                            </ListInput>
                            <ListInput
                                type="select"
                                defaultValue="Service"
                                // onChange={handleModel}
                                value={model}
                                onInput={(e) => {
                                setModel(e.target.value);
                            }}
                            >
                                <option value="Select service">Select service</option>
                                <option value="General service">General service</option>
                                <option value="Water service">Water service</option>
                                <option value="Break down">Break down</option>
                                <option value="Chain packet">Chain packet</option>
                                <option value="Starting problem">Starting problem</option>
                                <option value="Jump start">Jump start</option>
                                <option value="Other services">Others</option>
                            </ListInput>
                            
                            
                            <ListInput
                                type="tel"
                                placeholder="Mobile Number"
                                value={mobile}
                                onInput={(e) => {
                                setMobile(e.target.value);
                                }}
                            ></ListInput>
                            <ListInput
                                type="text"
                                placeholder="E mail"
                                value={msg}
                                onInput={(e) => {
                                setMail(e.target.value);
                                }}
                            ></ListInput>
      
      
    </List>
    <List>
    <Button fill id="add" onClick={handleSubmit}>Book a Service</Button>

      <BlockFooter>
       
        <br />
        <br/>
        <br />
      </BlockFooter>
    </List>
  
  </Page> 
        </Page>
      </Popup>
</Page>
      
    
  );
};
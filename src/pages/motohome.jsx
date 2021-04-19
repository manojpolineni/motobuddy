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
  Searchbar,  
} from 'framework7-react';
import firebase from 'firebase';
import axios from "axios";
require('firebase/auth');

export default () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const popup = useRef(null);
  const [service, setService] = useState('');
  const [stype, setType] = useState('');
  const [provider, setProvider] = useState('');
  const [bdate, setDate] = useState('');
//   const [color, setColor] = useState('');
//   const [vehiclenumber, setVehicleNumber] = useState('');
  const [showMessage, setShowMessage] = useState('');
  const clearState = () => {
      setService('')
      setType('')
      setProvider('')
      setDate('')
    //   setYear('')
    //   setColor('')
    //   setVehicleNumber('')
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
        service,
        stype,
        provider,
        bdate
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
  const motohome = () => {
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
      <Navbar title="Welcome">
      {/* <Searchbar
          searchContainer=".search-list"
          searchIn=".item-title"
          // disableButton={!theme.aurora}
        ></Searchbar> */}
      </Navbar>
      <Block>
      
        <p>
          <Button fill popupOpen=".demo-popup" id="vehicle-btn">
            Book Service
          </Button>
        </p>
        <p>
          <Button fill  id="vehicle-btn" onClick={hi}>
              My Bookings
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
                                defaultValue="Serice"
                                value={service}
                                onInput={(e) => {
                                setService(e.target.value);
                                }}
                                 >
                                <option value="service">Select Your Serive</option>
                                <option value="Service-1">Service-1</option>
                                <option value="Service-2">Service-2</option>
                                <option value="Service-3">Service-3</option>
                                <option value="Service-4">Service-4</option>
                                <option value="Service-5">Service-5</option>

                            </ListInput>
                            <ListInput
                                type="select"
                                defaultValue="Service Type"
                                // onChange={handleModel}
                                value={stype}
                                onInput={(e) => {
                                setType(e.target.value);
                            }}
                            >
                                <option value="Select service"> Service Type</option>
                                <option value="Service Type-1">Service Type-1</option>
                                <option value="Service Type-2">Service Type-2</option>
                                <option value="Service Type-3">Service Type-3</option>
                                <option value="Service Type-4">Service Type-4</option>
                                <option value="Service Type-5">Service Type-5</option>
                            </ListInput>
                            <ListInput
                                type="select"
                                defaultValue="Service Provider"
                                // onChange={handleModel}
                                value={provider}
                                onInput={(e) => {
                                setProvider(e.target.value);
                            }}
                            >
                                <option value="Select Provider"> Service Provider</option>
                                <option value="Service Provder-1">Service Provder-1</option>
                                <option value="Service Provder-2">Service Provder-2</option>
                                <option value="Service Provder-3">Service Provder-3</option>
                                <option value="Service Provder-4">Service Provder-4</option>
                                <option value="Service Provder-5">Service Provder-5</option>
                            </ListInput>
                            
                            <ListInput
                                type="date"
                                placeholder="Date"
                                value={bdate}
                                onInput={(e) => {
                                setDate(e.target.value);
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
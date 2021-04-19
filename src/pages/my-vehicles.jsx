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
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [vehiclenumber, setVehicleNumber] = useState('');
  const [showMessage, setShowMessage] = useState('');
  const clearState = () => {
      setMake('')
      setModel('')
      setYear('')
      setColor('')
      setVehicleNumber('')
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
        make,
        model,
        year,
        color,
        vehiclenumber
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
  const createPopup = () => {
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
      <Navbar title="My Vehicles"></Navbar>
      <Block>
      <p>
          <Button fill  id="vehicle-btn" onClick={hi}>
            Show My Vehicles
          </Button>
        </p>
        <p>
          <Button fill popupOpen=".demo-popup" id="vehicle-btn">
            Add Vehicle
          </Button>
        </p>
       
      </Block>
      <Popup
        className="demo-popup"
        opened={popupOpened}
        onPopupClosed={() => setPopupOpened(false)}
      >
        <Page>
          <Navbar title="Add Vehicle">
            <NavRight>
              <Link popupClose>Close</Link>
            </NavRight>
          </Navbar>
          <Page loginScreen>
    
    <label></label>
    <LoginScreenTitle id="signup">Add Your Vehicle</LoginScreenTitle>
    <List form>
    
                         <ListInput
                                type="select"
                                defaultValue="Please select your mark"
                                value={make}
                                onInput={(e) => {
                                setMake(e.target.value);
                                }}
                                 >
                                <option value="mark">Make</option>
                                <option value="Honda">Honda</option>
                                <option value="Bajaj">Bajaj</option>
                            </ListInput>
                            <ListInput
                                type="select"
                                defaultValue="please select your model"
                                // onChange={handleModel}
                                value={model}
                                onInput={(e) => {
                                setModel(e.target.value);
                            }}
                            >
                                <option value="model">Model</option>
                                <option value="shine">shine</option>
                                <option value="pulsar">pulsar</option>
                            </ListInput>
                            <ListInput type="select" defaultValue="Year" 
                             value={year}
                             onInput={(e) => {
                             setYear(e.target.value);
                             }}
                            >
                                <option value="year">Year</option>
                                <option value="one">2001</option>
                                <option value="two">2002</option>
                                <option value="three">2003</option>
                                <option value="four">2004</option>
                                <option value="five">2005</option>
                            </ListInput>
                            <ListInput type="select" defaultValue="Color"
                            value={color}
                            onInput={(e) => {
                            setColor(e.target.value);
                            }}
                            >
                                <option value="color">Color</option>
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="yellow">Yellow</option>
                            </ListInput>
                            <ListInput
                                type="text"
                                placeholder="Vehicle Number"
                                value={vehiclenumber}
                                onInput={(e) => {
                                setVehicleNumber(e.target.value);
                                }}
                            ></ListInput>
      
    </List>
    <List>
    <Button fill id="add" onClick={handleSubmit}>Add Vehicle</Button>

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
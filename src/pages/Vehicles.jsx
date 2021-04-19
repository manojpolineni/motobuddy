import React, { useState, useRef } from "react";
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
    ListInput,
    Icon,
    List,
    NavTitle,
    Row,
    Col,
} from "framework7-react";
import axios from 'axios';
// const bowman = '';
// const Message = () => {
//     return <h6 style={{ color: "green" }}>User Created Successfully</h6>
// }
const AddVehicle1 = (props) => {

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
    const handleMake = (event) => {
        event.preventDefault();
        let make = event.target.value;
        setMake(make);
    }
    const handleModel = (event) => {
        event.preventDefault();
        let model = event.target.value;
        setModel(model);
    }
    const handleYear = (event) => {
        event.preventDefault();
        let year = event.target.value;
        setYear(year);
    }
    const handleColor = (event) => {
        event.preventDefault();
        let color = event.target.value;
        setColor(color);
    }
    const handleVehicleNumber = (event) => {
        event.preventDefault();
        let vehicleNumber = event.target.value;
        setVehicleNumber(vehicleNumber);
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
    const userlist = () => {
        window.location.href = "/user-list"
    }
    return (
        <Page>
      <Block>
      <Button className="list"><a href='/vehicles/'>My Vehicles</a></Button>
                {/* <NavTitle
                            style={{
                                "margin-top": "40px",
                                "font-size": "25px",
                                "font-family": "Sans-serif",
                                "margin-left": "200px"
                            }}
                        >
                            Add Vehicle here
            </NavTitle> */}
                {/* <NavRight>
                            <Link popupClose style={{ "margin-left": "530px", "margin-top": "-1000px", "font-size": "20px" }}>X</Link>
                        </NavRight> */}
            </Block>
            <Block>
                <div class="row">
                    <div class="col-5"></div>
                    <div class="align-items-center" style={{display:"flex",width:"340px","height":"350px","margin-top":"80px"}}
                       
                        // style={{
                        //     border: "1px solid black",
                        //     width: "320px",
                        //     height: "450px",
                        // }}
                    >
                        <Block style={{"box-shadow":"2px 2px 5px 5px",width:"380px","height":"380px"}}>
                        <List inlineLabels noHairlinesMd>
                            <ListInput
                                type="select"
                                defaultValue="please select your mark"
                                onChange={handleMake} >
                                <option value="mark">please select your make</option>
                                <option value="Honda">Honda</option>
                                <option value="Bajaj">Bajaj</option>
                            </ListInput>
                            <ListInput
                                type="select"
                                defaultValue="please select your model"
                                onChange={handleModel}
                            >
                                <option value="model">please select your model</option>
                                <option value="shine">shine</option>
                                <option value="pulsar">pulsar</option>
                            </ListInput>
                            <ListInput type="select" defaultValue="Year" onChange={handleYear}>
                                <option value="year">Year</option>
                                <option value="one">2001</option>
                                <option value="two">2002</option>
                                <option value="three">2003</option>
                                <option value="four">2004</option>
                                <option value="five">2005</option>
                            </ListInput>
                            <ListInput type="select" defaultValue="Color" onChange={handleColor}>
                                <option value="color">Color</option>
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="yellow">Yellow</option>
                            </ListInput>
                            <ListInput
                                type="text"
                                placeholder="Enter your Vehicle number"
                                onChange={handleVehicleNumber}
                            ></ListInput>
                        </List>
                        <Button
                            large
                            fill
                            style={{
                                width: "150px",
                                "margin-left": "70px",
                                "background-color": "orange",
                            }}
                            onClick={handleSubmit}
                        >
                            Submit
                </Button>
                
                
                </Block>
                        <div class="col-40"></div>
                    </div>
                    <div class="col-40"></div>
                </div>
            </Block>
        </Page>


    );
};
export default AddVehicle1;
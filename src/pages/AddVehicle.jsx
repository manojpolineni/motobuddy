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
const AddVehicle = (props) => {

    const [name, setName] = useState('');
    const [fullname, setFullname] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [emailid, setEmailid] = useState('');
    const [location, setLocation] = useState('');
    const [showMessage, setShowMessage] = useState('');
    const clearState = () => {
        setName('')
        setFullname('')
        setMobileno('')
        setEmailid('')
        setLocation('')
    }
    const handleName = (event) => {
        event.preventDefault();
        let name = event.target.value;
        setName(name);
    }
    const handleFullname = (event) => {
        event.preventDefault();
        let fullname = event.target.value;
        setFullname(fullname);
    }
    const handleMobileno = (event) => {
        event.preventDefault();
        let mobileno = event.target.value;
        setMobileno(mobileno);
    }
    const handleEmailid = (event) => {
        event.preventDefault();
        let emailid = event.target.value;
        setEmailid(emailid);
    }
    const handleLocation = (event) => {
        event.preventDefault();
        let location = event.target.value;
        setLocation(location);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            name,
            fullname,
            mobileno,
            emailid,
            location
        }
        console.log(data)
        postuser(data);
       
        clearState();
        setShowMessage(true);

        axios.post("http://localhost:4000/profiles/profile-user", data)
            .then(d => {
                console.log(d);
                alert("Data inserted Suucessfully");
            })
            .catch(err =>alert(err))
        postuser(data);
        clearState();
        setShowMessage(true);
    }
    const postuser = data => {

    }
    // const userlist = () => {
    //     window.location.href = "/user-list"
    // }
    return (
        <Page>
      <Block>

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
                                type="text"
                                placeholder="Enter your name"
                                onChange={handleName}
                            ></ListInput>
                             <ListInput
                                type="text"
                                placeholder="Enter your Full name"
                                onChange={handleFullname}
                            ></ListInput>
                             <ListInput
                                type="text"
                                placeholder="Enter your Mobile number"
                                onChange={handleMobileno}
                            ></ListInput>
                             <ListInput
                                type="text"
                                placeholder="Enter your Email id"
                                onChange={handleEmailid}
                            ></ListInput>
                             <ListInput
                                type="text"
                                placeholder="Enter your Location"
                                onChange={handleLocation}
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
                            Profile
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
export default AddVehicle;
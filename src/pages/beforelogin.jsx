
import React from 'react';
import Image from "../static/icons/Service1.jpeg";
import Image1 from "../static/icons/Service2.jpeg";
import Image2 from "../static/icons/Service3.jpeg";
import Image3 from "../static/icons/Service4.jpeg";
import Image4 from "../static/icons/Service5.jpeg";
import Image5 from "../static/icons/Service6.jpeg";
import Image6 from "../static/icons/Service7.jpeg";
import Image7 from "../static/icons/Service8.jpg";
import Image8 from "../static/icons/Service9.jpg";
import Image9 from "../static/icons/Service10.jpg";
import {
  Page,
  AccordionContent,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  MenuItem,
  Row,
  Col,
  Button,
  BlockFooter,
  ListInput,
  MenuDropdown,
  MenuDropdownItem,
  SwiperSlide,
  Swiper,
} from 'framework7-react';
import  { useEffect, useState } from "react";
import axios from "axios";

const BeforeLoginPage = (props) => 
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');
  const [showMessage, setShowMessage] = useState('');
  const clearState = () => {
    setName('')
    setEmail('')
    setNumber('')
    setDob('')
  }
  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      number,
      dob
    }
    console.log(data)
    postuser(data);
    clearState();
    setShowMessage(true);
    alert("Booking Successfully Completed");
    // window.location.href = '/user-list'
  }
  const postuser = data => {
    axios.post("http://localhost:4000/users/create-user", data)
      .then(d => {
        console.log(d);
      })
      .catch(err => alert(err))
  }
  const userlist = () => {
    window.location.href = "/user-list"
  }

return(
  <Page name="home" style={{"background-color":"silver"}}>

    <Navbar large sliding={false}>

      <NavLeft style={{ "margin-top": "80px", "margin-left": "50px", "color": "green" }}>MotoBuddy</NavLeft>
      <NavRight>
        <Button className="list"><a href='/login/'>LogIn/SignUp</a></Button>
        <Button className="list"><a href='/login/'>Register as Professional</a></Button>
        </NavRight>
    </Navbar>
    <Block >
      <div class="row">
        <div class="col-50" style={{ "background-color":"white", border: "1px solid rgba(0,0,0,0.2)","box-shadow":"2px 2px 5px 5px",marginLeft:"50px", width: "400px", height: "450px", }} >
          <BlockTitle style={{textAlign:"center", fontSize:"20px"}}>Book Your Service</BlockTitle>
          <List form onSubmit={onSubmit} inlineLabels noHairlinesMd>
            <ListInput  className="list1" type="select" defaultValue="please select your mark" value={name} onChange={e => setName(e.target.value)} >
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
            <ListInput className="list1" type="select" defaultValue="please select your model" value={email}
                onChange={e => setEmail(e.target.value)}  >
              <option value="Select service">Select service</option>
              <option value="General service">General service</option>
              <option value="Water service">Water service</option>
              <option value="Break down">Break down</option>
              <option value="Chain packet">Chain packet</option>
              <option value="Starting problem">Starting problem</option>
              <option value="Jump start">Jump start</option>
              <option value="Other services">Others</option>
              <option value=""></option>
            </ListInput>
            <ListInput className="list1" type="tel" placeholder="Mobile No" value={number}
                onChange={e => setNumber(e.target.value)}></ListInput>
                <Button type="submit" large fill style={{ "width": "150px", "margin-top":"60px", "margin-left": "100px", "background-color": "black" }}>
            BOOK NOW
            </Button>
          </List>
          
  
    
          
        </div>
        <div class="col-70" style={{"margin-top":"-20px"}}>
        <Swiper pagination navigation scrollbar>
      <SwiperSlide><p>
      <div class="carousel">
      <img src={Image7} width= "1800" height= "700" 
            class="lazy lazy-fade-in demo-lazy" />
            </div>
        </p></SwiperSlide>
      <SwiperSlide><p>
      <div class="carousel">
      <img src={Image8} width = "1800" height= "700"
            class="lazy lazy-fade-in demo-lazy" />
            </div>
        </p></SwiperSlide>
      <SwiperSlide><p>
      <div class="carousel">
      <img src={Image9} width= "1800" height= "700" 
            class="lazy lazy-fade-in demo-lazy" />
            </div>
             
        </p></SwiperSlide>
    </Swiper> 
        </div>
      </div>
      </Block>
      <NavTitle style={{ "margin-left": "100px", "font-size": "40px" }}>Our Popular Services</ NavTitle>
    <Block>
      {/* <div class="block-title">Our Popular Services</div> */}
      {/* <div
        data-pagination='{"el": ".swiper-pagination"}'
        data-space-between="15"
        data-slides-per-view="3"
        class="swiper-container swiper-init demo-swiper"
      >
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper">
          <div class="swiper-slide"> <img src={Image3} alt="image" style={{"margin-top":"20px", width: "390px", height: "430px"}}></img></div>
          <div class="swiper-slide">Service 2</div>
          <div class="swiper-slide">Service 3</div>
          <div class="swiper-slide">Service 4</div>
          <div class="swiper-slide">Service 5</div>
          <div class="swiper-slide">Service 6</div>
          <div class="swiper-slide">Service 7</div>
          <div class="swiper-slide">Service 8</div>
          <div class="swiper-slide">Service 9</div>
          <div class="swiper-slide">Service 10</div>
        </div>
      </div> */}
        <Swiper navigation speed={500} slidesPerView={3} spaceBetween={30}>
      <SwiperSlide styftle={{"background-color":"white"}}><div ><img src={Image4} alt="image" style={{"margin-top":"10px", width: "560px", height: "300px","margin-left":"5px"}}></img></div>
      <div>
        <h1 style={{"margin-left":"20px"}}>Water Service</h1>
        </div>
        <div>
        <Button outline style={{"width":"100px","margin-left":"430px","color":"black","margin-top":"-50px"}}>Book Now</Button>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{"background-color":"white"}}><div><img src={Image5} alt="image" style={{"margin-top":"10px", width: "560px", height: "300px","margin-left":"5px"}}></img></div>
      <div><h1 style={{"margin-left":"20px"}}>Oil Service</h1></div>
      <div>
        <Button outline style={{"width":"100px","margin-left":"430px","color":"black","margin-top":"-50px"}}>Book Now</Button>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{"background-color":"white"}}><div><img src={Image6} alt="image" style={{"margin-top":"10px", width: "560px", height: "300px","margin-left":"5px"}}></img></div>
      <div><h1 style={{"margin-left":"20px"}}>Wheel Service</h1></div>
      <div>
        <Button outline style={{"width":"100px","margin-left":"430px","color":"black","margin-top":"-50px"}}>Book Now</Button>
        </div>
      </SwiperSlide>
     
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
    </Block>
    <NavTitle style={{ "margin-left": "100px", "font-size": "40px" }}>Trusted Mechanics</ NavTitle>
    <Block style={{"background-color":"white"}}>
      <div class="row">

        <div class="col-10" style={{ width: "550px", height: "400px", }}>
          <img src={Image} alt="image" style={{ "margin-top":"20px",width: "390px", height: "430px" }}></img>
        </div>  <div style={{ width: "600px", "height": "400px" }}>
          <ul class="mechanic-list" style={{ "margin-left": "20px","font-size":"25px","padding-top":"100px" }}>
            <li >Expert mechanics for your every need</li>
            <li>Best-in-class workmanship</li>
            <li>Top of the line equipment for the best service experience</li>
          </ul>
        </div>
        <div class="col-40" style={{ width: "550px", height: "550px", "font-size": "25px" }}>
          <div class="col-50"></div>
        </div>
      </div>
    </Block>
    <NavTitle style={{ "margin-left": "100px", "font-size": "40px" }}>Track your service in real time</ NavTitle>
    <Block style={{"background-color":"white"}}>
      <div class="row">
        <div class="col-10" style={{ width: "550px", height: "550px", }}>
          <img src={Image3} alt="image" style={{"margin-top":"20px", width: "390px", height: "430px"}}></img>
        </div>  <div style={{  width: "600px", "height": "400px" }}>
        <ul class="tracking-list" style={{ "margin-left": "20px","font-size":"25px","padding-top":"100px" }}>
            <li>Live SMS updates to keep a track on vehicle status</li>
            <li>Photo updates right from vehicle check-in to delivery</li>
            <li>100% transparency in service</li>
          </ul>
        </div>
        <div class="col-40" style={{ width: "550px", height: "550px", "font-size": "25px" }}>
          <div class="col-50"></div>
        </div>
      </div>
    </Block>
    <NavTitle style={{ "margin-left": "100px", "font-size": "40px" }}>Genuine Spare Parts</ NavTitle>
    <Block style={{"background-color":"white"}}>
      <div class="row">
        <div class="col-10" style={{ width: "550px", height: "550px", }}>
          <img src={Image2} alt="image" style={{ "margin-top":"20px",width: "390px", height: "430px" }}></img>
        </div>  <div style={{  width: "600px", "height": "400px" }}>
        <ul class="mechanic-list" style={{ "margin-left": "20px","font-size":"25px","padding-top":"100px" }}>
            <li>Expert mechanics for your every need</li>
            <li>Best-in-class workmanship</li>
            <li>Top of the line equipment for the best service experience</li>
          </ul>
        </div>
        <div class="col-40" style={{ width: "550px", height: "550px", "font-size": "25px" }}>
          <div class="col-50"></div>
        </div>
      </div>
    </Block>
    <NavTitle style={{ "margin-left": "100px", "font-size": "40px" }}>Door Step service</ NavTitle>
    <Block style={{"background-color":"white"}}>
      <div class="row">
        <div class="col-10" style={{ width: "550px", height: "550px", }}>
          <img src={Image1} alt="image" style={{ "margin-top":"30px", width: "390px", height: "430px"}}></img>
        </div>  <div style={{  width: "600px", "height": "400px" }}>
        <ul class="tracking-list" style={{ "margin-left": "20px","font-size":"25px","padding-top":"100px" }}>
            <li>Live SMS updates to keep a track on vehicle status</li>
            <li>Photo updates right from vehicle check-in to delivery</li>
            <li>100% transparency in service</li>
          </ul>
        </div>
        <div class="col-40" style={{ width: "550px", height: "550px", "font-size": "25px" }}>
          <div class="col-50"></div>
        </div>
      </div>
    </Block>
    <Block>
    <NavTitle style={{ "margin-left": "100px", "font-size": "40px" }}>Frequently Asked Questions</ NavTitle>
    <Block  style={{"background-color":"white", "width":"100%","border":"1px solid black"}}>
    <List accordionList>
      <ListItem accordionItem title="Question 1">
        <AccordionContent>
          <Block>
            <p>
              Answer
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      {/* <ListItem accordionItem title="Nested List">
        <AccordionContent>
          <List>
            <ListItem title="Item 1"></ListItem>
            <ListItem title="Item 2"></ListItem>
            <ListItem title="Item 3"></ListItem>
            <ListItem title="Item 4"></ListItem>
          </List>
        </AccordionContent>
      </ListItem> */}
      <ListItem accordionItem title="Question 2">
        <AccordionContent>
          <Block>
            <p>
              Answer
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      {/* <ListItem accordionItem title="Integer semper">
        <AccordionContent>
          <Block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque
              nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer
              semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est
              rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra
              blandit suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem> */}
      <ListItem accordionItem title="Question 3">
        <AccordionContent>
          <Block>
            <p>
              Answer
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    <ListItem accordionItem title="Question 4">
        <AccordionContent>
          <Block>
            <p>
              Answer
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Question 5">
        <AccordionContent>
          <Block>
            <p>
              Answer
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>
    </Block>
    </Block>
    {/* <div class="page-content"> 
        <div class="toolbar-bottom">
        <div class="toolbar-inner">
          <a class="tab-link"><b>About</b></a>
          <a class="tab-link"><b>Terms & Conditions</b></a>
          <a class="tab-link"><b>Privacy Policy</b></a>
          <a class="tab-link"><b>Reviews</b></a>
          <a class="tab-link"><b>Contact Us</b></a>
        </div>
      </div>
        </div> */}
    <div className="page-content1">
      <div className="toolbar-bottom">
        <a className="tab-link"><b>About</b></a>
        <a className="tab-link"><b>Terms & Conditions</b></a>
        <a className="tab-link"><b>Privacy Policy</b></a>
        <a className="tab-link"><b>Reviews</b></a>
        <a className="tab-link"><b>Contact Us</b></a>
      </div>
    </div>
  </Page>

);
      }
export default BeforeLoginPage;
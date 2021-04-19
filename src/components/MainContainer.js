import React, { createContext } from "react";
import { Page } from "framework7-react";
 import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from '../pages/home';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
//  import CreateUser from "./user/create-user.component";
//  import EditUser from "./user/edit-user.component";
import BeforeLogIn from '../pages/beforelogin';
 import UserList from "./user/user-list.component";
 import createPopup from '../pages/my-vehicles';
import firebase from 'firebase';
import VehicleList from "./user/vehicle-list.component";
import motohome from "../pages/motohome";
import admin from "../pages/admin";
import serviceprovider from "../pages/serviceprovider";
import Register from "../pages/Register";
import LogInPage from "../pages/login";
import mechaniclist from "../pages/mechaniclist";
import ForgotPassword from "../pages/forgotpassword";

require('firebase/auth');
export const appContext = createContext();
 const MainContainer = ()=> {
  const  Sign_out = () => {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        window.location.href="/"
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }
    const pathname = window.location.pathname;
    return (
      <Page className="main-container" >
        <div className="display-flex maxHeight" style={{ padding: "6px 10px" }}>
            <div className="dashboard-navbar">
                <Router>
                <button onClick={Sign_out} className="btn btn-danger" style={{position:"absolute",left:"1300px",width:"150px"}}>Sign Out</button>
                    <Switch>
                        <Route exact path="/" component={LogInPage}/> 
                        
                         {/* <Route path= "/create-user" component={CreateUser}/>
                        <Route path= "/edit-user" component={EditUser}/> */}
                        <Route path= "/user-list" component={UserList}/> 
                        <Route path= "/home" component={motohome}/>
                        <Route path= "/vehicle-list" component={VehicleList}/>
                        <Route path= "/admin" component={admin}/>
                        <Route path= "/service" component={serviceprovider}/>
                        <Route path= "/register" component={Register}/>
                        <Route path= "/login" component={LogInPage}/>
                        <Route path= "/addmechanic" component={mechaniclist}/>
                        <Route path= "/forgot-password" component={ForgotPassword}/>

                    </Switch>
                </Router>
              </div>
              <div
                className="display-flex justify-content-flex-end align-items-center flex-wrap content"
                style={{ width: "20%" }}
              >
              </div>
            </div>
      </Page>
    );
}
export default MainContainer;















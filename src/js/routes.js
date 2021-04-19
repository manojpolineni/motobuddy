import BeforeLoginPage from '../pages/beforelogin.jsx';
import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import AddVehicle1 from '../pages/Vehicles.jsx';

import MainContainer from "../components/MainContainer";
import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';
import createPopup from '../pages/my-vehicles.jsx';
import AddVehicle from '../pages/AddVehicle.jsx';
// import UserList from '../pages/vehicle-list.jsx';
// import UserList from "./user/user-list.component.js";
import LogInPage from '../pages/login.jsx';
import SignUp from '../pages/SignUp.jsx';
import UserList from '../components/user/user-list.component.js';
import User from '../../../server/models/User.js';
import motohome from '../pages/motohome.jsx';
import serviceprovider from '../pages/serviceprovider.jsx';
import Register from '../pages/Register';

var routes = [
  {
    path: '/',
    component: MainContainer,
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path:'/service/',
    component:serviceprovider,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/login/',
    component: LogInPage,
  },
  {
    path: '/signup/',
    component: SignUp,
  },
  {
    path: '/My Vehicles/',
    component: createPopup,
  },
  {
    path: '/bookings/',
    component: UserList,
  },
  // {
  //   path: '/my vehicles/vehicles/',
  //   component:Vehicle,
  // },
  {
    path: '/profile/',
    component:AddVehicle,
  },
  // {
  //   path: '/user-list/',
  //   component:UserList,
  // },
   {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;

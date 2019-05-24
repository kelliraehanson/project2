import React from 'react';
import { withRouter, Route } from "react-router-dom";
import './App.css';
import Navbar1 from "./nav.js";
import Cards from "./cards.js";
import Blue from "./doggos/blue.js";
import Shadow from "./doggos/shadow.js";
import Frank from "./doggos/frank.js";
import Skip from "./doggos/skip.js";
import Lady from "./doggos/lady.js";
import Alvin from "./doggos/alvin.js";
import Archie from "./doggos/archie.js";
import Libby from "./doggos/libby.js";
import Puddy from "./doggos/puddy.js";
import Footer from "./footer.js";
import About from "./about.js";
import Form1 from "./form.js";

const App = (props) => {
  return (
    <div className="app">
    <Navbar1/>


        <Route exact path="/" component={Cards} />
        <Route path="/blue" component={Blue} />
        <Route path="/shadow" component={Shadow} />
        <Route path="/frank" component={Frank} />
        <Route path="/skip" component={Skip} />
        <Route path="/lady" component={Lady} />
        <Route path="/alvin" component={Alvin} />
        <Route path="/archie" component={Archie} />
        <Route path="/libby" component={Libby} />
        <Route path="/puddy" component={Puddy} />
        <Route path="/about" component={About} />
        {/* <Route path="/about" component={About} /> */}

        {/* Following are protected routes, user must be logged in to route */}
        {/* {user && <Route exact path="/blogs" component={BlogsView} />}
        {user && <Route path="/profile" component={ProfileView} />}
        {user && <Route path="/dashboard" component={DashboardView} />} */}
      {/* <Cards/>
      <Form1/> */}
      <Footer/>
    </div>
  );
};

export default App

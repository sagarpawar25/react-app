import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import Home from './componants/Home';
import About from './componants/About';
import Contactus from './componants/Contactus';


import React, { Component } from 'react';
import Navbar from './componants/navbar';
import Footer from './componants/Footer';

class App extends Component {
  state = {
    /* Home -start */
    /*  description start */
    homedescription:{ header:"Main message will appear here",
    subheader: "This is deescription message which describe your services. This is deescription message which describe your services",
    button1 : {name:"Explore", link:"/contactus", style:"bg-primary"},
    button2 : {name:"Learn More", link:"/about", style:"btn-outline-light"},
  },
  
    /*  description End */
    /* Home -End */
    company:{
      name: "BrandName",
      shortabout: "Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      logo: "assets/img/navbar-logo.svg"},

 productlist:[
  {id:1, name:"Fancy Product", img:"product/cam.jpg", price:"40-80", price_icon:"fa fa-inr", starts:"3", btn_name:"View Options", btn_style:"", btn_action:"/about"},
  {id:2, name:"Special Item", img:"product/watch.jpg", price:"40-80", price_icon:"fa fa-inr", starts:"4", btn_name:"View Options", btn_style:"", btn_action:"/about"},
  {id:3, name:"Sale Item", img:"product/cam.jpg", price:"40-80", price_icon:"fa fa-inr", starts:"3", btn_name:"View Options", btn_style:"", btn_action:"/about" , sale:true},
  {id:4, name:"Popular Product", img:"product/watch.jpg", price:"40-80", price_icon:"fa fa-inr", starts:"3", btn_name:"View Options", btn_style:"", btn_action:"/about" },
  {id:5, name:"Fancy1 Product", img:"product/cam.jpg", price:"40-80", price_icon:"fa fa-inr", starts:"5", btn_name:"View Options", btn_style:"", btn_action:"/about", sale:true},
  {id:6, name:"Fancy3 Product", img:"product/watch.jpg", price:"40-80", price_icon:"fa fa-inr", starts:"3", btn_name:"View Options", btn_style:"", btn_action:"/about"},
 ],

    contactlist:[
      { id: 1, type:"address", value: " Malad, Mumbai -400097, India", icon:"fa fa-map-marker"},
      { id: 2, type:"call", value: " Call us on +91-9876-654322", icon:"fa fa-phone"},
      { id: 3, type:"chat", value: " Chat on Whatsapp 9876543210", icon:"fa fa-whatsapp"},
      { id: 4, type:"mail", value: " Mail us patilsumit674@gmail.com", icon:"fa fa-envelope"},
    ],

    customerslieder:{
      name:"Happy Customers",
      id:"happycustomers",
    happycustomers:[
      {id:"1", src:"customer/1.jpg"},
      {id:"2", src:"customer/2.jpg"},
      {id:"3", src:"customer/3.jpg"},
      {id:"4", src:"customer/4.jpg"},
      {id:"5", src:"customer/5.jpg"},
      {id:"6", src:"customer/6.jpg"},
    ],
  },
  testimonialslieder:{
    name:"Testimonials",
    id:"testimonials",
  testimonial: [
    { id: "1",
      content:
        'Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.',
      author: 'Sarah M., Director of Events',
  
    },
    { id: "2",
      content:
        'I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.',
      author: 'Sarah M., CCHS Foundation',
 
    },
    { id: "3",
      content:
        "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
      author: 'Alexander B., Pan-Mass Challenge',

    },
    { id: "4",
      content:
        'MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.',
      author: 'Amy C., One Less Orphan Fund',

    },
  ],},
    contact:{
    call:"Call us on +91-9876-654322",
    chat:"Chat on Whatsapp 9876543210",
    },
    models:
      {
        title: "Models", 
        list:[
          {id: 1, name:"Ather 1", path:"/"},
          {id: 2, name:"Ather 2", path:"/"}
        ]
      }
    ,

    socialmedia:[
      { id: 1, type:"facebook", link:"fb", icon:"fa fa-facebook"},
      { id: 2, type:"twitter", link:"tw", icon:"fa fa-twitter"},
      { id: 3, type:"instagram", link:"inst", icon:"fa fa-instagram"},
      { id: 4, type:"git", link:"git", icon:"fa fa-github"},
    ],

     /* NU - N for Navbar U - Usefull links*/
    navbar: [
      { id: 1, navbar:true, usefullink:false, name: "Home", path:"/"},
      { id: 2, navbar:true, usefullink:true, name: "About", path:"/about"},
      { id: 3, navbar:true, usefullink:true, name: "Contact Us", path:"/contactus"},
      { id: 4, navbar:true, usefullink:false, name: "Services", path:"/services" },
      { id: 5, navbar:false, usefullink:true, name: "Privacy Policy", path:"/privacy"},
      { id: 6, navbar:false, usefullink:true, name: "Terms & Conditions", path:"/tnc" },
    ],
    developer: {name:"ABC INFOTECH", copyright_year:"2022",url:"https://www.apartmentmitra.in"},
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
    ],

    location: {
      name:"Map", target:"_blank" ,link:"https://www.google.com/maps/place/Maple+Heights,+Malad,+Shivaji+Nagar,+Kurar+Village,+Malad+East,+Mumbai,+Maharashtra+400097/@19.1893755,72.8647067,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7b7106842c3dd:0x6f94b247c3caff9f!8m2!3d19.1893373!4d72.864702", style:"bg-primary text-white",
    }
  };


  render() {
  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Navbar navbar={this.state.navbar} company={this.state.company} />
    <Router>
      <Routes>
      <Route exact path="/" element={<Home homedescription={this.state.homedescription} phone={this.state.contact} productlist={this.state.productlist} customerslieder={this.state.customerslieder} testimonialslieder={this.state.testimonialslieder} />} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contactus" element={<Contactus location={this.state.location}/>} />
      <Route exact path="" element={<Contactus/>} />
      {/*<Route path="*" element={<NotFound/>}/>*/}
      </Routes>
    </Router>

    <Footer developer={this.state.developer} socialmedia={this.state.socialmedia} contactlist={this.state.contactlist} usefullinks={this.state.navbar} models={this.state.models} company={this.state.company}/>

    </>
  );
  }
}


export default App;

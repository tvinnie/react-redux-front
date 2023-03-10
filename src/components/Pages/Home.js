import React, {Component} from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import image from '../assets/img/header-bg.jpg';


import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Timeline from '../Common/Timeline';
import Team from "../Common/Team";
import Clients from "../Common/Clients";
import Footer from '../Common/Footer';
import Contact from "./Contact";

class Home extends Component{
    
    render(){
        return(
            <div>
                <Header 
                title="Welcome To Our Studio!"
                subtitle="IT'S NICE TO MEET YOU"
                buttonText="TELL ME MORE"
                link="/services"
                showButton = {true}
                image = {image}
                />


                <Services />
                <Portfolio />
                <Timeline />
                <Team />
                <Clients />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home;
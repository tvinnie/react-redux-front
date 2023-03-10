import React, {Component} from "react";
import Header from "../Common/Header";
import image from '../assets/img/about/5.jpg'

import Timeline from "../Common/Timeline";

class About extends Component{

render(){
    return(
        <div>
            <Header 
            title="About Us"
            subtitle="It's reall a great story"
            showButton = {false}
            image = {image}
            />
            
          
        <Timeline />
    </div>
    )
}
}

export default About;
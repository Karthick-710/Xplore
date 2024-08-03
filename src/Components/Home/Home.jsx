import React, { useEffect } from "react"
import './home.scss'
import './home.css'
import '../../App.css'
import video from '../Assets/wd.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home =() =>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return(
        <section className="home">
            <div className="overlay"></div>
               <video src={video} muted autoPlay loop type="video/mp4" ></video>
           <div className="homeContent container"> 
           <div className="textDiv">
            <span  data-aos="fade-up" className="smallText">
                Our Packages
            </span>
            <h1 data-aos="fade-up" className="homeTitle">
                Search your Holiday
            </h1>
            </div>

            <div data-aos="fade-up" className="carddiv grid">
                <div className="destInput">
                    <label htmlFor="city">Search Destination</label>
                    <div className="input flex">
                        <input type="text"placeholder="Enter"></input>
                        <GrLocation className="icon"/>
                    </div>
                </div>
                <div className="dateInput">
                    <label htmlFor="date">Select Date</label>
                    <div className="input flex">
                        <input type="date"></input>
                        
                    </div>
                </div>
                <div className="priceInput">
                    
                    <div className="total flex">
                        <label htmlFor="lab_price">max</label>
                        <h3 className="total">$5000</h3>
                        
                    </div>
                    <div className="input flex">
                        <input type="range" max="5000" min="1000" />
                    </div>
                </div>
                <div className="search flex">
                    <HiFilter className="icon"/>
                    <span>More Filters</span>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className="homeFooter flex">
                <div className="right">
                    <FiFacebook className="icon"/>
                    <AiOutlineInstagram className="icon"/>
                    <SiTripadvisor className="icon"/>

                </div>
            <div className="left">
                <BsListTask className="icon"/>
                <TbApps className="icon" />
               
            </div>
            </div>

            </div>
        </section>
        
    )
}

export default Home;
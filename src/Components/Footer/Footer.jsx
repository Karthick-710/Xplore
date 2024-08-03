import React,{useEffect} from "react";
import './footer.scss'
import bg from '../Assets/foot.jpg'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer =() =>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section data-aos="fade-up" className="footer section">
            <div className="bgDiv">
                <img src={bg}  />
            </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>Pack u'r Bags Now!</small>
                    <h2>Find The Destination of Your Type..!</h2>
                </div>
                <div data-aos="fade-up" className="inputDiv flex">
                    <input type="text" placeholder="Email:" />
                    <button data-aos="fade-up" className="btn flex" type="submit">
                        Ping Us<FiSend className="icon"/>
                    </button>
                </div>
            </div>
            <div data-aos="fade-up" className="footerCard">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex"><MdOutlineTravelExplore className="icon"/>Xplore</a>
                    </div>
        <div className="paragraph">
            <h3>Helloo,</h3>
           <p> Xplore is a platform that tries to give your trip as a Memorable Moment in Your Lifetime.
            We Try to bring a Travel plan according to your taste and plan a Suitable Personalise Trip
            to give you a Once in Life Experience. We as a Team assure you to provide a best plan to 
            make your valuable time Unforgettable with Us </p><br />
            Regards,
            <h3>Team Xplore</h3>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                
            </body>
            </html>
        </div>

                </div>
            </div>
        </div>

        </section>
    )
}

export default Footer;
import React,{useEffect} from "react";
import './main.scss'
import '../../App.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.png'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'


import {HiOutlineLocationMarker } from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data=[
{
    id:1,
    imgSrc:img1,
    destTitle:'Newzealand',
    rate:'Adventure',
    location:'Auckland',
    fees:'$1700',
    describtion:"Auckland is the destination which is a epitome of Nature and Luxury,This Place has best beach and many other tourists attaractions.it is very much suited for adventures trips."
},
{
    id:2,
    imgSrc:img2,
    destTitle:'South Korea',
    rate:'Vibe',
    location:'Seoul',
    fees:'$2400',
    describtion:"Seoul is an Exciting and go-to destinations if you plan to explore a totally new Environment,This place has an Unique Culture and many other attarctive traditional destinations.Moreover if You are a fan of BTS or K-dramas don't Think Just click below ! "
},

{
    id:3,
    imgSrc:img3,
    destTitle:'Turkey',
    rate:'Cultural',
    location:'istanbul',
    fees:'$1600',
    describtion:"The Historical land of Turkey is one of finest budget friendly Destination that has hand-picked places to visit. "
},
{
    id:4,
    imgSrc:img4,
    destTitle:'Japan',
    rate:'Anime x Explore',
    location:'Tokyo',
    fees:'$2500',
    describtion:"The Land of Anime has many destinations especially for the Anime Lovers and not just that there are many more Cultural,Historical and Exciting Places to be Visited.. So what more Otaku Gangs Click Below!! "
},
{
    id:5,
    imgSrc:img5,
    destTitle:'Greece',
    rate:'Xplore^s Choice',
    location:'Athens',
    fees:'$2600',
    describtion:"A Perfect Mix of Ancient and Modern Arena, Greece is a Perfect plan for your Holidays whether it is Solo trip,Gang Travel,Couples Trip etc.. it Suits Everything! "
},
{
    id:6,
    imgSrc:img6,
    destTitle:'Egypt',
    rate:'Historical',
    location:'Cairo',
    fees:'$2000',
    describtion:"Egypt,A place that has a vast historical background and Unbelievable Archeological Wonders is a place to visit once in your lifetime.  "
},
{
    id:7,
    imgSrc:img7,
    destTitle:'Iceland',
    rate:'Natural Marvels',
    location:'Reykjevik',
    fees:'$3000',
    describtion:"Fill your eyes with Something Extradinory, Get ready to Watch a Natural Marvel and Rare Phenomenon on this trip to Iceland"
},


]
const Main =() =>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section className="main container">
        <div className="secTitle">
            <h2>Mostly Serached</h2>
        </div>
       <div className="secContent grid">
{
    Data.map(({id,imgSrc,destTitle,rate,location,describtion,fees}) =>{
        return(
            <div key={id} data-aos="fade-up" className="singledest">
                <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle}/>
                </div>
                <div className="cardInfo">
                    <h3 className="destTitle">{destTitle}</h3>
                    <span className="continent flex">
                        <HiOutlineLocationMarker className="icon"/>
                        <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                        <div className="grade">
                            <span>Rated:{rate}<small>+1</small></span>
                        </div>
                        <div className="price">
                            <h4>{fees}</h4>
                        </div>
                    </div>
                    <div className="desc">
                        <p>{describtion}</p>
                    </div>
                    <button className="btn flex">
                        Details <HiOutlineClipboardCheck />
                    </button>
                </div>
            </div>
        )
    })
}
           
        </div>
        </section>
    )
}

export default Main;
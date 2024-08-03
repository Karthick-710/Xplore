import React,{useState} from "react";
import './navbar.scss'
import '../../App.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar =() =>{
const [active,setAct]=useState('navBar')

const showNav=()=>{
    setAct('navBar activeNav')
}

const removeNav=()=>{
    setAct('navBar')
}
    return(
      <section className="navBar">
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore className="icon"/>Xplore</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Home
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Packages
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">About us
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Pages
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Report
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Contact
                        </a>
                    </li>

                    <button className="btn"><a href="#">Book Now!</a></button>
                </ul>


                <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon" />
            </div>
        </header>
        </section>
    )
}

export default Navbar;
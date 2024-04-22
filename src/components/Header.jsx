import React from "react"

import { Link } from 'react-router-dom';
import scrollTo from "./Functions";

function Header() {
  return (
    <header>
        <div className="logo"><a href="/">RD Aswin</a></div>

        <nav>
            <li ><Link to={'/'} onClick={()=>scrollTo('hero-section')}>Portfolio</Link></li>
            <li><Link to={'/about'} onClick={()=>{scrollTo('about-section')}}>About</Link></li>
            <li><Link to={'/skills'} onClick={()=>{scrollTo('skills-section')}}>Skills</Link></li>
            <li><Link to={'/projects'} onClick={()=>{scrollTo('projects-section')}}>Projects</Link></li>
            <li><Link to={'/testimonials'} onClick={()=>{scrollTo('testimonials-section')}}>Testimonials</Link></li>
            <li><Link to={'/contact'} onClick={()=>{scrollTo('contact-section')}}>Contact</Link></li>
        </nav>
    </header>
  )
}

export default Header

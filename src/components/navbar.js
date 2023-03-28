import React, { Component } from 'react'
import { MdPermMedia } from 'react-icons/md'
import { IoIosHome, IoMdCall } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'
import { FaBriefcase } from 'react-icons/fa'
import { GrGallery, GrUserWorker } from 'react-icons/gr'


class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <h2 className='navMenu'>SamDuut Media <i className='logo'><MdPermMedia /></i> </h2>

        <ul className='navLinks'>
            <li className='navLink'>
                <a href='/'>
                    <i className='navLinkLogo'> <IoIosHome /> </i> Home
                </a>
                
            </li>
            <li className='navLink'>
                <a href='/about'>
                <i className='navLinkLogo'> <FcAbout /> </i> About
                </a>
            </li>
            <li className='navLink'>
                <a href='/gallery'>
                    <i className='navLinkLogo'> <GrGallery /> </i> Gallery
                </a>
                
            </li>
            <li className='navLink'>
                 <a href='/services'>
                    <i className='navLinkLogo'> <FaBriefcase /> </i> Services
                 </a>
            </li>
            <li className='navLink'>
                <a href='/portfolio'>
                    <i className='navLinkLogo'> <GrUserWorker /> </i> Portfolio
                </a>
                
            </li>
            <li className='navLink'>
                 <a href='/contact'>
                    <i className='navLinkLogo'> <IoMdCall /> </i> Contact
                </a>
            </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
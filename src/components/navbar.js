import React, { Component } from 'react'
import { MdClose, MdOutlineMessage, MdPermMedia } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowUp, IoIosHome, IoMdCall } from 'react-icons/io'
import { FaBars, FaBriefcase,FaUser } from 'react-icons/fa'
import { TfiGallery } from 'react-icons/tfi'
import './navbar.css'
import GalleryDropdown from './galleryDropdown'
import ServicesDropdown from './servicesDropdown'


class Navbar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       clicked : true,
       galleryDropdown : false,
       servicesDropdown : false,
       activeMenu: 'main',
       myClass : ''
    }
  }

  handleMyClassGallery = () =>{
    this.setState({activeMenu : 'gallery'})
    this.setState({myClass : 'gallery'})
  }

  handleMyClassServices = () =>{
    this.setState({activeMenu : 'services'})
    this.setState({myClass : 'services'})
  }

  handleClick = () =>{
    this.setState({clicked : !this.state.clicked})
  }

  handleGalleryDropdown = () =>{
    this.setState({galleryDropdown : !this.state.galleryDropdown})
  }

  handleServicesDropdown = () =>{
    this.setState({servicesDropdown : !this.state.servicesDropdown})
  }

  render() {
    return (
      <nav className='navbar'>
        <h4 className='nav-menu'>SamDuut Media <i className='logo'><MdPermMedia /></i> </h4>

        <div className='bar-icon' onClick={this.handleClick}>  { this.state.clicked ? <MdClose /> : <FaBars />  }  </div>
        
          <ul className={ this.state.clicked ? 'nav-links active' : 'nav-links'}>
              <li className='nav-link'>
                  <i className='nav-link-logo'> <IoIosHome /> </i> Home               
              </li>
              <li className='nav-link'>
                  <i className='nav-link-logo'> <MdOutlineMessage /> </i> About
              </li>
              <li className='nav-link' onClick={this.handleGalleryDropdown} onMouseEnter={this.handleGalleryDropdown} onMouseLeave={this.handleGalleryDropdown} >             
                  <i className='nav-link-logo'> <TfiGallery /> </i> Gallery <i className='nav-link-logo'> { this.state.galleryDropdown ? <IoIosArrowUp /> : <IoIosArrowDown /> } </i> 
                  { this.state.galleryDropdown && <GalleryDropdown /> }
              </li>
              <li className='nav-link'onClick={this.handleServicesDropdown} onMouseEnter={this.handleServicesDropdown} onMouseLeave={this.handleServicesDropdown}>
                  <i className='nav-link-logo' > <FaBriefcase /> </i> Services <i className='nav-link-logo'> { this.state.servicesDropdown ? <IoIosArrowUp /> : <IoIosArrowDown /> } </i>
                  { this.state.servicesDropdown && <ServicesDropdown /> }
              </li>
              <li className='nav-link'>
                  <i className='nav-link-logo'> <FaUser /> </i> Portfolio 
              </li>
              <li className='nav-link'>
                  <i className='nav-link-logo'> <IoMdCall /> </i> Contact
              </li>
          </ul>
        
       
      </nav>
    )
  }
}

export default Navbar
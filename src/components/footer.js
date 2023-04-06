import React from 'react'
import './footer.css'
import ReadMore from './readMore'
import { MdOutlineFacebook } from 'react-icons/md'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { IoMdCall } from 'react-icons/io'
import { servicesDropdownItems } from './servicesDropdownItems'

function Footer() {
  return (
    <div className = 'my-footer' >

        <div className='about'>
          <h4 className='about-topic'>About</h4>
          <p className='about-content'>
          <ReadMore >
          Blessed be the God and Father of our Lord Jesus Christ, who according to His abundant mercy has begotten us again to a living hope through the resurrection of Jesus Christ from the dead, 4to an inheritance incorruptible and undefiled and that does not fade away, reserved in heaven for you, 5who are kept by the power of God through faith for salvation ready to be revealed in the last time.
          </ReadMore>
          </p>
        </div>
      

      <div className='social'>
        <h4 className='social-topic'>Social</h4>
        <p className='social-content'>
          <a href='facebook.com' className='facebook-handle'> <i className='facebook-logo'> <MdOutlineFacebook /> </i> SamDuut Media </a>
          <a href='instagram.com' className='instagram-handle'> <i className='instagram-logo'> <FaInstagram /> </i> SamDuut Media </a>
          <a href='twitter.com' className='twitter-handle'> <i className='twitter-logo'> <FaTwitter /> </i> SamDuut Media </a>
          <a href='youtube.com' className='youtube-handle'> <i className='youtube-logo'> <FaYoutube /> </i> SamDuut Media </a>
          <a href='akitestapps@gmail.com' className='email-handle'> <i className='email-logo'> <GoMail /> </i> samDmedia@gmail.com </a>
        </p>
      </div>

      <div className='services'>
        <h4 className='services-topic'>Services</h4>
        <p className='services-content'>
          {
            servicesDropdownItems.map((services,key) =>(
              <a href={services.link} className={services.id} key={key}> <i className='navItem-logo'> {services.icon} </i> {services.title} </a>
            ))
          }
        </p>
      </div>
      
      <div className='contact'>
        <h4 className='contact-topic'>Contact</h4>
        <p className='contact-content'>
          <a href='/phoneNumber' className='phone-number'> <i className='phone-logo'> <IoMdCall /> </i> (+233) 24 000 0000 </a>
          <a href='/phoneNumber' className='phone-number'> <i className='phone-logo'> <IoMdCall /> </i> (+233) 24 111 1111 </a>
          <a href='/phoneNumber' className='phone-number'> <i className='phone-logo'> <IoMdCall /> </i> (+233) 24 000 0000 </a>
          <a href='/phoneNumber' className='phone-number'> <i className='phone-logo'> <IoMdCall /> </i> (+233) 24 111 1111 </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
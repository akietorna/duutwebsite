import React from 'react'
import { galleryMenuItems } from './galleryDropdownMenuItems'
import './dropdown.css'

function GalleryDropdown() {
  return (
    <div>
        <ul className='dropdown'>
        {
            galleryMenuItems.map((item) =>(
                <li className='nav-item' key={item.id}>
                  <a href={item.link}>
                  <i className='nav-icon'> {item.icon} </i>
                  {item.title}
                  </a>
                </li>
            ))
        }
        </ul>
        
    </div>
  )
}

export default GalleryDropdown
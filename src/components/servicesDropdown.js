import React from 'react'
import { servicesDropdownItems } from './servicesDropdownItems'
import './dropdown.css'

function ServicesDropdown() {
  return (
    <div>
        <ul className='dropdown'>
        {
            servicesDropdownItems.map((item,index) =>(
                <li className='nav-item' key={index}>
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

export default ServicesDropdown
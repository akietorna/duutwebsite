import React, { useState } from 'react'
import './readmore.css'

function ReadMore({ children }) {
    const passage = children;
    const [readmore, setReadmore] = useState(true)
    const toggleReadmore = () => setReadmore(!readmore)

  return (
    <p className='content'>
        { readmore ? passage.slice(0, 250) : passage }
        <span onClick={toggleReadmore} className='more-or-less' >
            { readmore ? '...  Read More' : '  Show Less' }
        </span>
    </p>
  )
}

export default ReadMore
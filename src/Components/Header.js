import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/style.css'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/' className='header_title'>
            Wizard Quiz App
        </Link>
        <hr className='divider'/>
    </div>
  )
}

export default Header
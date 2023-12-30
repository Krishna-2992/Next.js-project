import React from 'react'
import Link from 'next/link'
import Links from './links/Links'
// import './navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
            <div>Logo</div>
            <Links/>
        </div>
    )
}

export default Navbar

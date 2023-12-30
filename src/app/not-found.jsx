import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h2>NotFound</h2>
            <p>Sorry, the page you requested is not found</p>
            <Link href='/'>Return home</Link>
        </div>
    )
}

export default NotFound

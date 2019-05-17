import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <Link to='/'>HOME</Link>
      <Link to='/frameWorks'>FRAMEWORKS</Link>
    </nav>
  )
}

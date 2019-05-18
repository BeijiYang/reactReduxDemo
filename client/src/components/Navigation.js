import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.scss'

export default function Navigation() {
  return (
    <div className='navigation'>
      <Link to='/'>HOME</Link>
      <Link to='/frameWorks'>FRAMEWORKS</Link>
    </div>
  )
}

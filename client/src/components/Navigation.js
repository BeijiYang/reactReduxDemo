import React from 'react'
import Link from './CustomLink'
import '../styles/navigation.scss'

export default function Navigation() {
  return (
    <div className='navigation'>
      <Link activeOnlyWhenExact={true} to="/" label="HOME" />
      <Link to="/frameWorks" label="FRAMEWORKS" />
      <Link to="/aboutme" label="ABOUTME" />
    </div>
  )
}

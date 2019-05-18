import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Router from './Router'
import '../styles/layout.scss'

export default function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Navigation />
      <Router />
    </div>
  )
}

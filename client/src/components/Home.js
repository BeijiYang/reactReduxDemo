import React from 'react'
import CardsList from '../containers/CardsList'
import UserInfo from './UserInfo'
import '../styles/home.scss'

const Home = () => (
  <div className="home">
    <h1>Home</h1>
    <UserInfo />
    <CardsList />
  </div>
)

export default Home

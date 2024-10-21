import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <nav>

    </nav>
      Welcome to Home
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/items">Items</NavLink>
    </div>
  )
}

export default Home

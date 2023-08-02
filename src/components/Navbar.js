import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../logo.svg'

const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  return (
    <div className='flex items-center justify-between font-serif text-lg font-bold'>
        <NavLink to={'/'} ><img src={logo} className='logo' alt='logo' /></NavLink>
        <div className='flex items-center gap-4 w-1/4'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/cart'}>Cart</NavLink>
        <span>Cart Items :{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar
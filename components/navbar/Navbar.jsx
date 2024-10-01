import React from 'react'
import NavbarRight from './navbaritem/NavbarRight'
import NavbarLeft from './navbaritem/NavbarLeft'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-5 '>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar

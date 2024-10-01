import React, { useEffect } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cardSlice'
import { useNavigate } from 'react-router-dom'


const NavbarRight = () => {
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {carts,itemCount}=useSelector(state=>state.carts)

  useEffect(()=>{
    dispatch(getCartTotal())
  },[dispatch,carts])
  
 
  
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none' type="text" placeholder='Arama yapınız..'/>
        <BiSearch size={25}/>
      </div>
      <AiOutlineHeart size={25}/>
      <div onClick={()=>navigate("cart")} className='relative'>
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
        <SlBasket size={25}/>
      </div>

    </div>
  )
}

export default NavbarRight

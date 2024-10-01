import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cardSlice'
import DeleteModal from './DeleteModal'

const CartComp = ({cart}) => {
  console.log("cartcomp rendered")
    const dispatch=useDispatch()
    const[quantity,setQuantity]=useState(cart?.quantity)
    const [deleteModal,setDeleteModal]=useState(false)
    const decrement=()=>{
        if(quantity > 0) setQuantity(quantity - 1)
    }
    const increment=()=>{
         setQuantity(quantity + 1)  
    }
    const clickRemove=()=>{
      setDeleteModal(!deleteModal)
    }
    const acceptRemove=()=>{
      dispatch(removeFromCart(cart?.id))
      clickRemove()
    }
   
    

    
  return (
    <div className='my-10 flex items-center justify-between'>
        <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
        <div className='w-[476px]'>
            <div className='text-xl'>{cart?.title}</div>
        </div>
        <div className='font-bold text-2xl'>{cart?.price} TL </div>
        <div className='flex items-center gap-5 my-4'>
                    <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
                    <input className='w-12 text-center text-4xl font-bold' type="text" value={quantity} readOnly />
                    <div onClick={increment} className='text-4xl cursor-pointer'>+</div>
        </div>
        <div onClick={()=>dispatch(clickRemove)} className='bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center'>Ürünü Sil</div>
        <DeleteModal show={deleteModal} onClose={clickRemove} onConfirm={acceptRemove} message="Bu ürünü silmek istediğinizden emin misiniz?"/>
    </div>
  )
}

export default CartComp

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cardSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    console.log("cart rendered")
    const dispatch = useDispatch();
    const { carts, itemCount ,totalAmount} = useSelector(state => state.carts);

    console.log(carts, itemCount ,totalAmount,"sss")
    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch]);
  
  return (
    <div>
    {
      itemCount >  0 ? <div>
          {
              carts?.map((cart,i)=>(
                 <CartComp key={i} cart={cart}/>))
          }
          <div className='flex items-center justify-end text-2xl'>TOPLAM TUTAR : <span className='font-bold text-3xl ml-2'>{totalAmount} TL</span></div>
      </div> : 
      <div>Kartınız boş...</div>
    }
  </div>
  )
}

export default Cart

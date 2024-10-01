import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice'

const Category = ({setCategory}) => {
  console.log("categor rendered")
    const dispatch=useDispatch()
    const {categories}=useSelector( state=>state.categories)
    
    useEffect(()=>{
        dispatch(getCategories())

    },[dispatch])

    

  return (
    <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
     <div className='border-b pb-2 text-xl font-bold'>KATEGORİ</div>
     {  
        
        categories?.map((category,i)=>{
            return <div onClick={()=>setCategory(category)} className='text-lg mt-2 cursor-pointer hover:bg-gray-200' key={i}>{category}</div>
            
        })
     }
    </div>
  )
}

export default React.memo(Category)

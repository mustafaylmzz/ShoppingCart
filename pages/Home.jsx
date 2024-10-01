import React, { useState ,useCallback} from 'react'
import SliderComp from '../components/home/SliderComp'
import Category from '../components/home/Category'
import Product from '../components/home/Product'
import Sorting from '../components/home/Sorting'

const Home = () => {
  console.log("home rendered")
  const [category,setCategory]=useState("")
  const [sort,setSort]=useState("")
  
  const handleSort=useCallback(e => {
    setSort(e.target.value)
  },[])
  
  return (
    <div>
      <SliderComp/>
      <Sorting setSort={handleSort}/>
      <div className='flex'>
        <Category setCategory={setCategory}/>
        <Product category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home

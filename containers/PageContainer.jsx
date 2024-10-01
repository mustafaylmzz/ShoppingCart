import React from 'react'

const PageContainer = ({children}) => {
  console.log("pagecontainer rended")
  return (
    <div className='w-10/12 m-auto'>
      {children}
    </div>
  )
}

export default PageContainer

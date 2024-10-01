import React from 'react'
import Slider from 'react-slick'
const SliderComp = () => {
  console.log("slider rendered")
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
       <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-6 '>
            <div className='p-4'>
              <div className='test-6xl font-bold'>En kalitelisi bende var</div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis distinctio ipsum totam, voluptate sed!</div>
              <div className='border rounded-full cursor-pointer text-3xl w-[200px] h16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className=" h-48" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/W+AIR+FORCE+1+%2707+NEXT+NATURE.png" alt="" />
          </div>
          <div className='!flex items-center bg-gray-100 px-6'>
            <div className='p-4'>
              <div className='test-6xl font-bold'>En kalitelisi bende var</div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis distinctio ipsum totam, voluptate sed!</div>
              <div className='border rounded-full cursor-pointer text-3xl w-[200px] h16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>  
            <img className=" h-48" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wlbprwbqo3agvyihaobd/air-force-1-jewel-ayakkab%C4%B1s%C4%B1-mfLHPN.png" alt="" />
          </div>
       </Slider>
      
    </div>
  )
}

export default React.memo(SliderComp)

import React from 'react'
import vedio1 from "../assets/video1.mp4";
import vedio2 from "../assets/video2.mp4";


const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            VirtualR build Tools 
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text '> for developers </span>

        </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat voluptatum earum dolores et maiores rerum esse explicabo beatae, aut obcaecati saepe numquam !</p>
            <div className='flex justify-center my-10 '>
                <a href="#" className='bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md '> 
                    Start for Free 
                </a>
                <a href="#" className='py-3 px-4 rounded-md border '>Documentation</a>

            </div>
            <div className='flex mt-10 justify-center'>
                <video autoPlay loop  muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 '>
                <source src={vedio1} type='video/mp4'/>
                Your Browser dosn't support vedio 
                </video>
                <video autoPlay loop  muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 '>
                <source src={vedio2} type='video/mp4'/>
                Your Browser dosn't support vedio 
                </video>
            </div>
    </div>
  )
}

export default HeroSection

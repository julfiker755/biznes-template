import React from 'react';
import bg from '../../assets/image/2.jpg'

const Homeslider = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}} className='bg-cover h-[450px] md:h-screen relative object-cover text-white'>
          <div className='w-screen md:w-fit absolute top-1/2 left-1/2 translate-middle text-center space-x-2'>
            <h1 className='text-base font-bold md:font-semibold md:text-3xl'>Everything you need to have in order to create a</h1>
            <h2 className='text-3xl md:text-6xl font-black'>STUNNINAG WEBSITE</h2>
            <p className='space-y-2'>Live Composer is a front-end content builder plugin for WordPress with 30+ modules (and more to come) packed with functionality and styling options that allow countless variations to be made easily and without any coding.</p>
            <div className='space-y-3 md:space-x-2 mt-3'>
                <button className='w-full  md:w-fit btn btn-primary rounded-xl'>DISCOVER NOW</button>
                <button className='w-full md:w-fit btn btn-success rounded-xl'>CONTEACT NOW</button>
            </div>
          </div>
        </div>
    );
};

export default Homeslider;
import React from 'react';
import img1 from '../../assets/image/1.jpg'

const Backimg = () => {
    return (
        <div className='bg-cover w-full h-[50vh]' style={{backgroundImage:`url('${img1}')`}}>
            <div className='container mx-auto h-full text-center flex justify-center items-center'>
                <h3 className='text-3xl lg:text-5xl font-semibold'>HAVE YOU FALL IN LOVE WITH THIS THEME YET?</h3>
                </div>
        </div>
    );
};

export default Backimg;
import React from 'react';
import bg from '../../assets/image/do.png'

const What = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 my-2 lg:grid-cols-2 gap-4'>
               <div className='space-y-2'>
                <h3 className='text-xs'>MAKING AWESOME DESIGNS</h3>
                <h4 className='text-3xl font-bold md:text-5xl md:font-semibold'>What We<span className='text-[#0e7183]'>Do</span></h4>
                <p className='space-y-2'>Coordinates for abs po oordinates for abs positioning the closest positioned Coordinates for abs positioning the closest positioned parent box of the positioned ting that ments.</p>
                <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2'>
                    <div>
                        <h1 className='text-3xl'>Design & Development</h1>
                        <h5 className='bg-gradient-to-l  to-[#89126f] from-[#075f9211] h-[7px] w-[250px]'></h5>
                        <p>Lorem ipsum dolor sit amet sea te alii viris mneo squer dipereum.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl'>Design & Development</h1>
                        <h5 className='bg-gradient-to-l  to-[#89126f] from-[#075f9211] h-[7px] w-[250px]'></h5>
                        <p>Lorem ipsum dolor sit amet sea te alii viris mneo squer dipereum.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl'>Design & Development</h1>
                        <h5 className='bg-gradient-to-l  to-[#89126f] from-[#075f9211] h-[7px] w-[250px]'></h5>
                        <p>Lorem ipsum dolor sit amet sea te alii viris mneo squer dipereum.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl'>Design & Development</h1>
                        <h5 className='bg-gradient-to-l  to-[#89126f] from-[#075f9211] h-[7px] w-[250px]'></h5>
                        <p>Lorem ipsum dolor sit amet sea te alii viris mneo squer dipereum.</p>
                    </div>
                
                </div>
                </div>
                <div className='hidden lg:block'>
                    <img className='h-[700px]' src={bg} alt="" />
                </div>
        </div>
    );
};

export default What;
import React from 'react';
import img from '../../assets/image/about.jpg'

const About = () => {
    return (
        <div className='container mx-auto my-5 lg:my-1 grid gap-2 grid-cols-1 lg:grid-cols-2'>
            <div className='mx-auto bg-[#3119aa] relative lg:top-[-150px]'>
            <img className='hidden lg:block lg:w-[430px] h-auto relative lg:top-[40px] lg:left-[40px]' src={img} alt="" />
            </div>
            <div className='relative h-fit lg:bottom-[-150px]'>
                {/* mobile responsive  */}
              <img className='relative w-screen blur-[1px]  object-cover h-[400px] lg:hidden' src={img} alt="" />
                <div className='absolute top-1/2 translate-y-50 lg:translate-y-0 lg:top-0'>
                <h3 className='text-xs'>FIRST YOUR SHOULD KNOW</h3>
                <h4 className='text-3xl font-bold md:text-5xl md:font-semibold'>About The <span className='text-[#0e7183]'>Studio</span></h4>
                <p className='space-y-2'> Lorem ips illud nonummy, novum tation et his. Royal scriptaset patrioque scribentur, at pro fugit erts verter emmolestiae, sed et vivendo ali Lorem ipsum eillud nonu here mmy, novum tation et scripta patrioque scriben tur Quisque ligulas ipsum, euismod atras vulputate iltricies. Coordinates for abs po oordi nates for abs positioning the closest position.</p>
                <div className='text-right lg:text-left'>
                <button className='w-full  md:w-fit md:mt-3 btn btn-secondary'>DISCOVER NOW</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;

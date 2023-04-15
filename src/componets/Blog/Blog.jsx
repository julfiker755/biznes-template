import React from 'react';
import bg from '../../assets/image/1.jpg'
import tt from '../../assets/image/post3.jpg'

const Blog = () => {
    return (
        <div className='container mx-auto my-3'>
            <div className='text-center'>
                <h1 className='text-xs'>POST FROM</h1>
                <h2 className='text-5xl font-semibold mb-2'>Our <span className='text-[#918f11]'>Blog</span></h2>
                <div className='bg-[#00ccff] relative w-[150px] h-[18px] mx-auto rounded-md after:absolute  after:bg-[#00ccff97] after:h-[9px] after:top-[4px] after:z-[-1] after:left-[-25px] after:right-[-25px] after:rounded-md'></div>
                </div>
                <div className='my-4 gap-3 grid grid-cols-1 md:grid-cols-4'>
                <div  className='col-span-3'>
                    <div className='relative'><img  src={bg} alt="" />
                    <div className='bg-[#167abd] text-white py-4 px-2 absolute bottom-[30px] left-[30px] flex flex-col items-center rounded-md'>
                        <h1>30</h1>
                        <h1>March</h1>
                    </div>
                    </div>
                    <div className='space-y-3 my-3'>
                        <h1 className='text-4xl font-semibold'>Amazing Blog Title Here</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes Lorem ipsum dolor sit amet consectetuer adipiscing elit. This is Photoshop version of lorem Ipsum.</p>
                    </div>
                </div>
                <div className='hidden space-y-4 md:block'>
                    <img src={tt} alt="" />
                    <img src={tt} alt="" />
                </div>
                </div>
               
        </div>
    );
};

export default Blog;
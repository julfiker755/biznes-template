import React from 'react';
import post1 from '../../assets/image/gallery/post1.jpg'
import post2 from '../../assets/image/gallery/post2.jpg'
import post3 from '../../assets/image/gallery/post3.jpg'
import post4 from '../../assets/image/gallery/post4.jpg'
import post5 from '../../assets/image/gallery/post5.jpg'
import post6 from '../../assets/image/gallery/post6.jpg'
import Hoversec from './Hoversec';
import Modal from '../Modal/Modal';

const Recent = () => {
    return (
        <div className='container mx-auto my-3'>
            <div className='text-center'>
                <h1 className='text-xs'>PROUDLY DISPLAYING PROJECTS</h1>
                <h2 className='text-5xl font-semibold mb-2'>Recent <span className='text-[green]'>Work</span></h2>
                <div className='bg-[#00ccff] relative w-[150px] h-[18px] mx-auto rounded-md after:absolute  after:bg-[#00ccff97] after:h-[9px] after:top-[4px] after:z-[-1] after:left-[-25px] after:right-[-25px] after:rounded-md'></div>
            </div>
            <ul className='flex flex-wrap justify-center font-bold my-3 space-x-4 bg-[#136fa1] w-fit p-3 mx-auto rounded-md '>
                <li className='cursor-pointer hover:text-[#d743a3] transition-all'>All</li>
                <li className='cursor-pointer hover:text-[#d743a3] transition-all'>Web Design</li>
                <li className='cursor-pointer hover:text-[#d743a3] transition-all'>Graphice Design</li>
                <li className='cursor-pointer hover:text-[#d743a3] transition-all'>Photograpy</li>
                <li className='cursor-pointer hover:text-[#d743a3] transition-all'>Web Deloment</li>
            </ul>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='relative group'>
                    <img className='rounded-md' src={post1} />
                    <Hoversec></Hoversec>
                </div>
                <div className='relative group'>
                    <img className='rounded-md' src={post2} />
                    <Hoversec></Hoversec>
                </div>
                <div className='relative group'><img className='rounded-md' src={post3} />
                    <Hoversec></Hoversec>
                </div>
                <div className='relative group'><img className='rounded-md' src={post4} /> <Hoversec></Hoversec></div>
                <div className='relative group'><img className='rounded-md' src={post5} /> <Hoversec></Hoversec></div>
                <div className='relative group'><img className='rounded-md' src={post6} /> <Hoversec></Hoversec></div>
            </div>
            {/* open modal */}
            <Modal></Modal>
        </div>
    );
};

export default Recent;
import React from 'react';
import team1 from '../../assets/image/team/1.jpg'
import team2 from '../../assets/image/team/2.jpg'
import team3 from '../../assets/image/team/3.jpg'
import team4 from '../../assets/image/team/4.jpg'


const Team = () => {
    return (
        <div className='container mx-auto my-4'>
           <div className='text-center'>
                <h1 className='text-xs'>GET TO KNOW OUR</h1>
                <h2 className='text-5xl font-semibold mb-2'>Team <span className='text-[#918f11]'>Member</span></h2>
                <div className='bg-[#00ccff] relative w-[150px] h-[18px] mx-auto rounded-md after:absolute  after:bg-[#00ccff97] after:h-[9px] after:top-[4px] after:z-[-1] after:left-[-25px] after:right-[-25px] after:rounded-md'></div>
                </div>
                <div className='grid grid-cols-2 gap-2 my-3 md:grid-cols-2  md:gap-6 lg:grid-cols-4 lg:gap-9'>
                    <div className='relative group'>
                        <img className='cursor-pointer' src={team1} alt="" />
                        <div className='absolute flex flex-col justify-center items-center transition-all group-hover:!top-0 top-[543px] overflow-hidden right-0 left-0 bottom-0 bg-[#1879d481]'>
                        <h1 className='text-[#c35d2e] text-base md:text-5xl font-bold'>Cristina angel</h1>
                        <h1 className='text-[#b6d338] text-xl md:text-3xl'>Web Designer</h1>
                        <p className='text-[#351c6c] text-xs md:text-base text-center'>Neque porro quisqqui dolorem ipsum doamet, consectetur adipis civelit quianon</p>
                        </div>
                    </div>
                    <div className='relative group'><img src={team2} alt="" />
                    <div className='absolute flex flex-col justify-center items-center transition-all group-hover:!top-0 top-[543px] overflow-hidden right-0 left-0 bottom-0 bg-[#1879d481]'>
                        <h1 className='text-[#c35d2e] text-base md:text-5xl font-bold'>Cristina angel</h1>
                        <h1 className='text-[#b6d338] text-xl md:text-3xl'>Web Designer</h1>
                        <p className='text-[#351c6c] text-xs md:text-base text-center'>Neque porro quisqqui dolorem ipsum doamet, consectetur adipis civelit quianon</p>
                        </div>
                    </div>
                    <div className='relative group'><img src={team3} alt="" />
                    <div className='absolute flex flex-col justify-center items-center transition-all group-hover:!top-0 top-[543px] overflow-hidden right-0 left-0 bottom-0 bg-[#1879d481]'>
                        <h1 className='text-[#c35d2e] text-base md:text-5xl font-bold'>Cristina angel</h1>
                        <h1 className='text-[#b6d338] text-xl md:text-3xl'>Web Designer</h1>
                        <p className='text-[#351c6c] text-xs md:text-base text-center'>Neque porro quisqqui dolorem ipsum doamet, consectetur adipis civelit quianon</p>
                        </div>
                    </div>
                    <div className='relative group'><img src={team4} alt="" />
                    <div className='absolute flex flex-col justify-center items-center transition-all group-hover:!top-0 top-[543px] overflow-hidden right-0 left-0 bottom-0 bg-[#1879d481]'>
                        <h1 className='text-[#c35d2e] text-base md:text-5xl font-bold'>Cristina angel</h1>
                        <h1 className='text-[#b6d338] text-xl md:text-3xl'>Web Designer</h1>
                        <p className='text-[#351c6c] text-xs md:text-base text-center'>Neque porro quisqqui dolorem ipsum doamet, consectetur adipis civelit quianon</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Team;
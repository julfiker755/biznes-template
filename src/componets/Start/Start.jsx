import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate=useNavigate()
    return (
        <div className='container mx-auto my-4'>
           <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 bg-[#187ebd] my-4 text-white'>
             <button onClick={()=>navigate('/')} className='col-span-3 md:col-span-1 border-2 border-[#e97217] rounded-md  hover:bg-[#1c1a8f] hover:rounded-md py-4'>Core Button</button>
             <button onClick={()=>navigate('/card2')} className='hover:bg-[#1c1a8f] hover:rounded-md py-4 border-2 border-[#e97217] rounded-md'>More Button</button>
             <button onClick={()=>navigate('/card3')} className='hover:bg-[#1c1a8f] hover:rounded-md py-4 border-2 border-[#e97217] rounded-md'>Local Button</button>
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default Start;
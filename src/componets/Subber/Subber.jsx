import React from 'react';
import { ImHome } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle} from 'react-icons/ai';
import { AiFillYoutube} from 'react-icons/ai';
import { FaInstagramSquare} from 'react-icons/fa';

const Subber = () => {
    return (
      <div className='bg-[#35363a] py-3'>
          <div className='container mx-auto flex justify-between'>
           <ul className='capitalize  md:flex md:space-x-5 text-base'>
            <li className='flex items-center'><ImHome size={20}/> 12 Royal Street, California USA</li>
            <li className='flex items-center'><BsFillTelephoneFill size={20}/> 001-122-134-555</li>
            <li className='flex items-center'><MdEmail size={20}/>contact@domain.com</li>
           </ul>
           <ul className='grid grid-cols-2 gap-x-2 md:gap-x-0 md:grid-cols-none items-center md:flex md:space-x-3 cursor-pointer'>
             <li><BsFacebook size={20}/></li>
             <li><AiFillTwitterCircle size={24}/></li>
             <li><AiFillYoutube size={25}/></li>
             <li><FaInstagramSquare size={20}/></li>
           </ul>
        </div>
      </div>
    );
};

export default Subber;
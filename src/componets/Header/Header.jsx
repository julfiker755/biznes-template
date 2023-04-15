import React, { useState } from 'react';
import logo from '../../assets/photo/logo.png'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
    const [mobile,setmobile]=useState(false)
    return (
        <>
            <div className='bg-[#003566] py-3 sticky top-0 left-0 z-[1000000]'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div><img src={logo} alt="Header-Logo" /></div>
                    <ul className='hidden md:flex space-x-3 font-bold uppercase'>
                        <li><Link>HOME</Link></li>
                        <li><Link>DEMOS</Link></li>
                        <li><Link>PROFILE</Link></li>
                        <li><Link>SHORTCODES</Link></li>
                        <li><Link>CONTACT</Link></li>
                    </ul>
                    {/* <FiMenu size={24} /><AiOutlineClose size={24}/> */}
                    <div className='hidden md:block'><AiOutlineSearch size={24}/></div>
                    <div className='block md:hidden cursor-pointer' onClick={()=>setmobile(!mobile)}>{mobile ? <AiOutlineClose size={24}/>:<FiMenu size={24} />}</div>
                </div>
            </div>
            <ul className={`${mobile ? 'block font-bold uppercase w-1/2 h-screen p-4 space-y-4 bg-[#0c6290] ease-in-out md:hidden':'fixed left-[-100%]'}`}>
                <li><Link>HOME</Link></li>
                <li><Link>DEMOS</Link></li>
                <li><Link>PROFILE</Link></li>
                <li><Link>SHORTCODES</Link></li>
                <li><Link>CONTACT</Link></li>
            </ul>
        </>
    );
};

export default Header;
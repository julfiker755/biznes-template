import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hoversec = () => {
    return (
        <div className='absolute text-[red] group-hover:!scale-100 ease-in duration-300 top-0 scale-0 right-0 left-0 bottom-0 bg-[#05aa0563] flex justify-center items-center'>
            <label htmlFor="my-modal-3" className='cursor-pointer '><FaPlus size={30} /></label>
        </div>
    );
};

export default Hoversec;
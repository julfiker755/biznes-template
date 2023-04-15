import React from 'react';
import about from '../../assets/image/about.jpg'

const Modal = () => {
    return (
        <>
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                     <img className='w-full object-cover h-[200px]' src={about} alt="" />
                </div>
            </div>
        </>
    );
};

export default Modal;
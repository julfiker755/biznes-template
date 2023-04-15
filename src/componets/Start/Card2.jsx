import React from 'react';
import img1 from '../../assets/image/2.jpg'

const Card2 = () => {
    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 items-center'>
        <div className='space-y-4'>
           <h1 className='capitalize text-5xl font-semibold'>Start your Business Today</h1>
           <p className='text-justify'>Lorem ipsum dolor sit amet, in exerci interpretaris signiferumque nam, simul clita mediocrem ea sit. Legere euismod usu cu, everti officiis in pri, impetus placerat eu est. Choro diceret fuisset ex eam. Quo at illud conceptam. Errem dictas te pro, everti animal accumsan eum an, pri gloriatur adversarium ex. His ea singulis adipiscing, at probo liber prompta eam, eam putant tritani ea.</p>
           <p className='text-justify'>Lorem ipsum dolor sit amet, in exerci interpretaris signiferumque nam, simul clita mediocrem ea sit. Legere euismod usu cu, everti officiis in pri, impetus placerat eu est. Choro diceret fuisset ex eam. Quo at illud conceptam.</p>
        </div>
        <div>
           <img className='rounded-md' src={img1} alt="" />
        </div>
      </div>
    );
};
export default Card2;
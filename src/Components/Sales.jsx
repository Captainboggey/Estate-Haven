import React from 'react';
import Marquee from 'react-fast-marquee';

const Sales = () => {
    return (
        <div className='flex gap-2'>
            <button className='btn btn-primary bg-yellow-600 border-none text-white'>Updates</button>
            <Marquee>
            <p className='ml-2'>Sold: Beautiful 3-bedroom villa in Palm Heights - $420,000!</p>
            <p className='ml-2'>New Owner Alert: Cozy downtown condo sold for $325,000!</p>
            <p className='ml-2'>Luxury waterfront home closed in Marina Bay - $1.2M!</p>
            <p className='ml-2'>Historic 2-story cottage in cox sold at $285,000!</p>
            </Marquee>
        </div>
    );
};

export default Sales;
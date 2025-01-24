import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import photo from "../../assets/1.jpg"

const EstateDetails = () => {
    const {id}= useParams();
    const estate = useLoaderData();
    
    const convert = parseInt(id)
   const found = estate.find(aEstate=>aEstate.id===convert)
    
    return (
        <div className='my-10 grid lg:grid-cols-3 gap-6'>
            <div>
                <img src={found.relevant_image} alt="" />
            </div>
            <div className='col-span-2 space-y-4'>
             <h2 className="text-4xl font-bold">{found.estate_title}</h2>
             <h2 className="text-2xl ">Category:{found.segment_name}</h2>
             <h2 className="text-2xl font-bold text-green-600">Price:{found.price}$</h2>
             <p className='text-2xl'><span className={found.status==='sale'?'text-green-600':'text-red-700'}>Status:{found.status}</span></p>
             <h2 className="text-center text-xl">Area: {found.area} SQ`FT</h2>
             <h2 className="text-xl">Location: {found.location}</h2>
             <h2 className="text-xl">Facilities: {found.facilities}</h2>
             <button className='btn btn-primary bg-green-600 px-10 text-white border-none'>Book Now</button>
            </div>
            
        </div>
    );
};

export default EstateDetails;
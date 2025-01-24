import React from 'react';
import { Link } from 'react-router-dom';
import "animate.css"


const Estate = ({ estate }) => {
    const { id, relevant_image, estate_title, segment_name, status,price } = estate;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={relevant_image} alt="apartment" className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{estate_title}</h2>
    <p className='flex gap-12'>Price:{price}$ <span className={status==='sale'?'text-green-600':'text-red-700'}>{status}</span></p>
    <p className='text-yellow-700 mt-5'>#{segment_name}</p>
    <div className="card-actions">
      <Link to={`/estate/${id}`}><button  className="btn btn-primary border-none bg-yellow-700 mt-10  animate__animated animate__heartBeat  ">View Property</button></Link>
    </div>
  </div>
</div>
    );
};

export default Estate;
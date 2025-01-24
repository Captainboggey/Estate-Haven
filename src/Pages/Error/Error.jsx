import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
          <h2 className="text-center text-2xl">Opps! There Been An Error Return To <Link to={'/'}><span className='text-red-600'>Home</span></Link></h2>  
        </div>
    );
};

export default Error;
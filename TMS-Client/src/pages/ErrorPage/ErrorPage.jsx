import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-[100vh] w-full flex justify-center items-center '>
            <div className='flex justify-center items-center flex-col'>
            <h1 className='text-4xl text-red-500'>You are out of the TMS </h1>
            <Link className='py-2 px-3 text-orange-500 bg-slate-900 my-2 rounded-xl' to="/">Back to TMS</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
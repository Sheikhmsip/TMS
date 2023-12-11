import React from 'react';
// import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-full h-[100vh] justify-center items-center flex flex-col'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
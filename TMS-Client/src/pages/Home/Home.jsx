import React from 'react';

const Home = () => {
    return (
        <div className='text-center text-blue-400'>
            <h1>this is home page </h1>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder='Title' />
        </div>
    );
};

export default Home;
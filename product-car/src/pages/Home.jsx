import React from 'react';

const Home = () => {
  return (
    <div className=''>
      <video
        className="h-screen w-full object-cover -z-1 absolute top-0"
        src="/Bg.mp4"
        autoPlay
        loop
        muted
      
      />
<div className='relative flex justify-center items-center h-100 flex-col '>
  <h1 className='text-7xl text-amber-400 font-bold'>Welcome To E-Cart</h1>
  <p className='text-lg font-medium text-gray-900'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus pariatur quisquam reprehenderit commodi, voluptatum iure ad aperiam mollitia quos iste.</p>
</div>
     
    
    </div>
  );
}

export default Home;

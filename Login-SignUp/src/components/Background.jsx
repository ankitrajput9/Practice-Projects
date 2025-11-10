import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const Background = () => {
      const [toggle, setToggle] = useState(false)
  const [userData, setUserData] = useState([])
  return (
    <div className='h-screen w-full bg-emerald-200  flex flex-col justify-center items-center '>
        <img className='h-full w-full' src="https://images.unsplash.com/photo-1658579222223-ca243ef7c520?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="" />
        <div className='absolute'>
            {toggle ? <SignUp onClick={()=>setToggle(prev=>!prev)} setUserData={setUserData} userData={userData} /> : <Login onClick={()=>setToggle(prev=>!prev)} />} 
        </div>

    </div>
  );
}

export default Background;

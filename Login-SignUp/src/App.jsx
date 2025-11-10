import React, { useState } from 'react';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
import Background from'./components/Background'

const App = () => {
  // const [toggle, setToggle] = useState(false)
  // const [userData, setUserData] = useState([])
  return (
    <div className=' h-screen w-full flex flex-col justify-center items-center ' >
        {/* <Login/>
        <SignUp/> */}
     <Background/>
      {/* {toggle ? <SignUp onClick={()=>setToggle(prev=>!prev)} setUserData={setUserData} userData={userData} /> : <Login onClick={()=>setToggle(prev=>!prev)} />}  */}
    </div>
  );
}

export default App;

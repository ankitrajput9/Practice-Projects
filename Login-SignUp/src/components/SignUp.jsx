import React, { useState } from 'react';
import Login from './Login';

const SignUp = ({ onClick, setUserData, userData }) => {
  const [inputData, setInputData] = useState({
    username: '',
    fullname: '',
    password: '',
  })
  // Handle Inputs value and store them into inputData  
  const handleChange = (e) => {
    let { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }
  // Make new variable and copy userData and update current inputData to setUserData 
  const handleSubmit = (e) => {
    e.preventDefault()
    let updatedUser = [...userData, inputData]
    setUserData(updatedUser)

    // CheckUser , username is exist in data or not  
    const checkUser = userData.some(
      (user) => user.username === inputData.username
    )
    if (checkUser) {
      alert("User already exist ,try diferent 😑")
    } else {
      alert("You Are registered sucessfully..🎉")
      localStorage.setItem("users", JSON.stringify(updatedUser))
      onClick();
    }

    // Clear Inputs 
    setInputData(
      {
        username: '',
        fullname: '',
        password: '',
      }
    )
  }
  return (
    <div className=' flex flex-col shadow-2xl rounded-2xl ' >
      <form
        onSubmit={handleSubmit}
        className='flex h-110 w-100 flex-col justify-center item-center gap-4  py-14 rounded-2xl p-8  '
        action="">


        <input
          value={inputData.username}
          name='username'
          onChange={handleChange}
          className='border px-6 py-2 rounded-2xl'
          type="text "
          placeholder='username' />


        <input
          value={inputData.fullname}
          name='fullname'
          onChange={handleChange}
          className='border px-6 py-2 rounded-2xl'
          type="text "
          placeholder='fullname' />


        <input
          value={inputData.password}
          name='password'
          onChange={handleChange}
          className='border px-6 py-2 rounded-2xl'
          type="password"
          placeholder='password'
          required />


        <button className=' bg-blue-700 px-7 py-2 rounded-4xl cursor-pointer text-lg text-white font-bold '  >SignUp</button>
        <p className='text-lg'>
          if you already have an account <span onClick={onClick} className='text-blue-800 font-bold cursor-pointer ' >signIn</span>
        </p>
      </form>

    </div>
  );
}

export default SignUp;

import React, { useState } from 'react';

const Login = ({ onClick }) => {
  const [inputData, setInputData] = useState({
    username: "",
    password: '',
  })
  const handleChange = (e) => {
    let { name, value } = e.target
    setInputData({ ...inputData, [name]: value })

  }
  const handleLogin = (e) => {
    e.preventDefault()

    // get Data from localStorage And saved in a variable 
    let savedData = JSON.parse(localStorage.getItem("users")) || [];

    // Match data get by localstorage or our inputData if it same login otherwise show error  
    const matchedUser = savedData.find(
      (user) => user.username === inputData.username && user.password === inputData.password)
    if (matchedUser) {
      alert("Login Succesfully ✅")
    } else {
      alert("Invalid userName or password ❌")
    }

    // clear inputs 
    setInputData({
      username: "",
      password: '',
    })
  }

  return (
    <div className=' flex flex-col shadow-2xl shadow-cyan-950 rounded-2xl  ' >
      <form onSubmit={handleLogin} className='flex h-110 w-100 flex-col justify-center item-center gap-4  py-14 rounded-2xl p-8  ' action="">


        <input
          value={inputData.username}
          name='username'
          onChange={handleChange}
          className='  border px-6 py-2 rounded-2xl'
          type="text "
          placeholder='username' />


        <input
          value={inputData.password}
          name='password'
          onChange={handleChange}
          className='border px-6 py-2 rounded-2xl'
          type="password"
          placeholder='password'
          required />
        <button className='bg-blue-700 cursor-pointer px-7 py-2 rounded-4xl text-lg text-white font-bold '  >Login</button>
        <p>
          if you don't have an account <span onClick={onClick} className='text-blue-800 font-bold cursor-pointer ' >signUp</span>
        </p>
      </form>

    </div>
  );
}

export default Login;

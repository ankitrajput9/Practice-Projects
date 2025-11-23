import React, { useEffect, useState } from 'react';
import axios from "axios";
const App = () => {

const [userData, setuserData] = useState([])

  const handleClick=async()=>{
let {data} = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
setuserData(data)
}
const [index, setIndex] = useState(1)

useEffect(() => {
handleClick()
}, [index])


  return (
    <div className='bg-black  text-white p-5'>
    <div className='min-h-screen flex flex-wrap gap-6 '>
    {userData.map((e,i)=>{
     return (
      
      <div className=''>
      <div className='h-60 w-60 '>
        <img className='rounded-2xl' src={e.download_url} alt="" />
      </div>
      <h1>{e.author}</h1>
      </div>
     )
 
    })}
<div className='text-white flex justify-center gap-5 items-center w-full'>
  <button onClick={()=>{
    if(index >1)
setIndex(index-1)
  }} className='bg-amber-500 rounded py-2 px-6 cursor-pointer active:scale-95 '>prev</button>
  <button onClick={()=>{
setIndex(index+1)
  }} className='bg-amber-500 rounded py-2 px-6 cursor-pointer active:scale-95 '>Next</button>
</div>
    </div>
    </div>
  );
}

export default App;

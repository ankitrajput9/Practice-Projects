import React from 'react';
import { useState } from "react"
const App = () => {


  const [input, setInput] = useState({
    heading: "",
    note: "",
  });



  const handleChange = (e) => {
    let { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    let copyArr = [...task, input]
    setTask(copyArr)
    setInput({
      heading: "",
      note: "",
    })
  }

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col lg:flex-row overflow-hidden">
      <form onSubmit={handleSubmit} className='lg:w-1/2 flex flex-col items-start p-5 gap-3 ' >

        <h1 className='text-2xl font-bold px-5  py-4' >NotePad</h1>

        <input
          value={input.heading}
          onChange={handleChange}
          name='heading'
          className='border-2 rounded px-5 py-2 w-full outline-none '
          type="text"
          placeholder='Enter Notes Heading' />


        <textarea
          value={input.note}
          onChange={handleChange}
          name='note'
          className='border-2 rounded px-5 py-2 w-full items-start  h-20 outline-none '
          placeholder='Write details'>
        </textarea>

        <button className='bg-white text-black text-center font-bold py-3 rounded-md w-full'>Add Note</button>
        <div className='h-3/6 w-full flex justify-center'>
          <img src="https://imgs.search.brave.com/cblIyzC4bKnIaEV_hPIyS_O6E5EwhjTZL4OrMHZ0Mbs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDUv/OTYyLzY2Ny9zbWFs/bC9mcmVlbGFuY2Vy/LW1hbi1mbGF0LWls/bHVzdHJhdGlvbi1v/ci1yZW1vdGUtd29y/a2luZy1mcmVlLXBu/Zy5wbmc" alt="" />
        </div>
      </form>


      <div className=' lg:w-1/2 flex flex-col p-4 lg:border-l-2 ' >
        <h1 className='text-2xl font-bold px-5 text-center py-4' >Your Notes</h1>
        
        <div className='flex flex-col gap-5 overflow-y-auto h-[80vh] p-3'>
          <div className='flex flex-wrap justify-center gap-5' >
          {task.map((elem, idx) => {
            return (
              <div key={idx} className='relative h-60 w-70 rounded-2xl overflow-hidden'>
                <div className='absolute flex flex-col w-60 py-2 px-4 justify-center items-center '>
                  <h3 className='text-gray-500 font-bold text-2xl z-3 '>{elem.heading}</h3>
                  <p className='text-shadow-md font-medium text-gray-500  z-3 '>{elem.note}</p>
                </div>
                <img className=' h-50 lg:h-60 object-cover absolute' src="https://imgs.search.brave.com/XaA6IEd1RTMWZi_3BLgtfN75rydfG_du82MpcRy9gQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/ODY5LzgwNS9zbWFs/bC9ibGFuay1zdGlj/a3ktbm90ZS1yZW1p/bmRlci1wYXBlci1w/bmcucG5n" alt="" />
              </div>
            )
          })}

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

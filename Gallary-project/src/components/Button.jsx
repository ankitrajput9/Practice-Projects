import React from 'react';

const Button = ({ index, setIndex }) => {
    return (
        <div className='text-white flex justify-center gap-5 items-center w-full'>
            <button onClick={() => {
                if (index > 1)
                    setIndex(index - 1)
            }} className='bg-amber-500 rounded py-2 px-6 font-semibold cursor-pointer active:scale-95 '>
                prev
            </button>
<h1 className='text-black font-bold text-lg' >Page {index}</h1>
            <button onClick={() => {
                setIndex(index + 1)
            }}
                className='bg-amber-500 rounded py-2 px-6 font-semibold cursor-pointer active:scale-95 '>
                Next
            </button>
        </div>
    );
}

export default Button;

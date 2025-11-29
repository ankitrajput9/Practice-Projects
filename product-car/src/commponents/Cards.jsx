import React, { useContext } from 'react';
import { Store } from '../context/Context';

const Cards = ({elem}) => {
    let {setCart}=useContext(Store)
    const handleClick =()=>{
setCart(prev=>[...prev,elem])
    }
  return (
    <div className='h-full w-60 rounded-2xl flex flex-col items-center p-1  bg-white' >
    <img className='h-40 w-50 object-contain ' src={elem.image} alt="" />
    <div className='flex flex-col items-center'>
        <p className='text-center'>{elem.title}</p>
        <p className='font-medium' >{elem.price}</p>
        <button onClick={handleClick} className='bg-amber-300 py-1 px-4 rounded active:scale-95 cursor-pointer'>Add to cart</button>
    </div>
    </div>
  );
}

export default Cards;

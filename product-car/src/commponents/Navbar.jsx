import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-amber-200/30 z-1 absolute w-full'>
        <img src='/icon.svg' alt='' className=' h-12  ' />
        <div className='flex gap-6 text-lg font-semibold '>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
  );
}
export default Navbar;

import React, { useContext } from 'react';
import Cards from '../commponents/Cards';
import { Store } from '../context/Context';

const Product = () => {
  let {data}=useContext(Store)
  return (
    <div className='min-h-screen w-full bg-amber-400 '>
    <div className='h-95 pt-23 flex gap-5 flex-wrap justify-center w-full p-3 '>
    {data.map((elem)=>{
      return <Cards key={elem.id} elem={elem} />
    })}
    </div>
    </div>
  );
}

export default Product;

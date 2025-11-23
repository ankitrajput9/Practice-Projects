import React from 'react';

const Images = (props) => {

console.log(props.elem)
  return (
    <div>
       <a href={props.elem.url} target="_blank">
      <div className=''>
      <div className='max-w-60 py-2 '>
        <img className='rounded-2xl' src={props.elem.download_url} alt="" />
      </div>
      <h1 className='font-semibold text-lg' >{props.elem.author}</h1>
      </div>
      </a>
    </div>
  );
}

export default Images;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import Images from './components/Images';
import Button from './components/Button';
const App = () => {

  const [userData, setuserData] = useState([])

  const handleClick = async () => {
    let { data } = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setuserData(data)
  }
  const [index, setIndex] = useState(1)

  useEffect(() => {
    handleClick()
  }, [index])


  return (
    <div className='text-center p-5'>
      <div className=' flex flex-wrap gap-5 justify-center '>
        {userData.map((e, i) => {
          return (
            <Images elem={e} />
          )
        })}
      <Button index={index} setIndex={setIndex}/>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import { useDispatch } from 'react-redux'
import { themeChange } from '../themslice';

const Home = () => {
    const dispatch=useDispatch();

  return (

<>
<button onClick={()=>dispatch(themeChange())}>toggle</button>
<div className='dark:bg-black bg-white'>
homme
</div>
</>  )
}

export default Home
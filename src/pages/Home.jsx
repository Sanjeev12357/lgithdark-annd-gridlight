import React from 'react'
import { useDispatch } from 'react-redux'
import { themeChange } from '../themslice';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch=useDispatch();

  return (

<>
<button onClick={()=>dispatch(themeChange())}>toggle</button>
<div className='dark:bg-black bg-white'>
homme
</div>
<Link to="/page">
Pagination
</Link>
</>  )
}

export default Home
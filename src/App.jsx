import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import appStore from './appStore';
import Home from './pages/Home';
import Memo from './pages/Memo';
import Pagination from './pages/Pagination';


const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/memo' element={<Memo/>}/>
          <Route path='/page' element={<Pagination/>}/>

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
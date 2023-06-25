import React from 'react'
import {ToastContainer} from 'react-toastify'
import Header from './pages/Header'
import Search from './pages/Search'
import Result from './pages/Result'
const App = () => {
  return (
   <>
      <Header/>
      <Search/>
      <Result/>
      <ToastContainer/>
   </>
  )
}

export default App
import React from 'react'
import {ToastContainer} from 'react-toastify'
import Header from './pages/Header'
import Search from './pages/Search'
import Result from './pages/Result'
import Button from './pages/Button'
const App = () => {
  return (
   <>
      <Header/>
      <Search/>
      <Button/>
      <Result/>
      <ToastContainer/>
   </>
  )
}

export default App
import React from 'react'
import { useGlobalHook } from '../Hooks/Context'
import AddForm from '../Components/AddForm';

const Button = () => {
    const{isShowForm,changeShow} = useGlobalHook();
  return (
    <>
        <button onClick={changeShow} className='buttons'>
            <i className="fa-solid fa-plus" title='Add Bookmarks'></i>
        </button>
        {isShowForm && <AddForm/>};
    </>
  )
}

export default Button
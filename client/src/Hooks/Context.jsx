import React, { useContext, useState } from 'react'

// create context ----->
const appContext = React.createContext();

// create provide ------>

const AppProvider = ({children})=>{

    const [isShowForm, setIsShowForm] = useState(false)
    const changeShow = ()=>{
        setIsShowForm(true)
    }

    return(
        <appContext.Provider value={{isShowForm,changeShow,setIsShowForm}}>
                {children}
        </appContext.Provider>
    )
}


// create a global hook to pass all the state ---->
const useGlobalHook = ()=>useContext(appContext);

export {AppProvider, useGlobalHook}
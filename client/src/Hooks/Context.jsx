import React, { useContext } from 'react'

// create context ----->
const appContext = React.createContext();

// create provide ------>

const AppProvider = ({children})=>{
    return(
        <appContext.Provider value={"saqalin"}>
                {children}
        </appContext.Provider>
    )
}


// create a global hook to pass all the state ---->
const useGlobalHook = ()=>useContext(appContext);

export {AppProvider, useGlobalHook}
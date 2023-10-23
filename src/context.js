import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [taxPresentege,setTaxtPresentage] = useState()
    return <AppContext.Provider value={
        {
        }
    }
    >{children}</AppContext.Provider>
}

export const GlobalState = ()=>{
    return useContext(AppContext)
} 
export {AppContext,AppProvider}
import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [taxPresentege, setTaxtPresentage] = useState()
    const [invoiceEmpty,setInvoiceEmptyAll] = useState(false)
    console.log(taxPresentege,'this is the global state');
    return <AppContext.Provider value={
        {
            taxPresentege,
            setTaxtPresentage,
            invoiceEmpty,
            setInvoiceEmptyAll

        }
    }
    >{children}</AppContext.Provider>
}

export const GlobalState = ()=>{
    return useContext(AppContext)
} 
export {AppContext,AppProvider}
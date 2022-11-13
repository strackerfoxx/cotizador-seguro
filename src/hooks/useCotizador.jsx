import { useContext, useState } from "react";
import CotizadorContext from '../context/CotizadorProvider'

export function useCotizador(){
    const {datos, handleChangeDatos, cotizarSeguro, total} = useContext(CotizadorContext)
    const [error, setError] = useState('')
    const [listo, setListo] = useState(false)
    

    return{
        datos,
        handleChangeDatos,
        setError,
        error,
        setListo,
        listo,
        cotizarSeguro,
        total
    }
}
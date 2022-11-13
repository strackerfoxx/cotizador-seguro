import {createContext, useState, useEffect} from 'react'
import {obtenerDiferenciaYear} from '../helpers'

const CotizadorContext = createContext()

const  CotizadorProvider = ({children}) => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [total, setTotal] = useState(0)

    function handleChangeDatos(e){
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    function cotizarSeguro(){
        let resultado = 2000

        const diferencia = obtenerDiferenciaYear(datos.year)
        resultado -= ((diferencia * 3) * resultado) / 100

        if(datos.marca === 'Europeo'){
            resultado += resultado * .30
        }
        if(datos.marca === 'Americano'){
            resultado += resultado * .15
        }
        if(datos.marca === 'Asiatico'){
            resultado += resultado * .05
        }
        if(datos.plan == parseInt(2) ){
            resultado += resultado * .20
        }

        setTotal(resultado)
    }

    return(
    <CotizadorContext.Provider value={{ datos, handleChangeDatos, cotizarSeguro, total }}>
        {children}
    </CotizadorContext.Provider>
    )
    
}   

export {
    CotizadorProvider
}
export default CotizadorContext
export const MARCA = [
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'}
]

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
    new Array(23),
    (valor, index)  => YEARMAX - index
)

export const PLAN = [
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Completo'},
]
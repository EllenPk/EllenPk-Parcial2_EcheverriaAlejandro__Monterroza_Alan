import { Route,Routes } from "react-router-dom"
import { Inicio } from "../../componentes/contenedor/Inicio"
import { Consultarvuelos } from "../../componentes/Vuelos/Consultarvuelos"
import { Rastrearvuelos } from "../../componentes/Vuelos/Rastrearvuelos"
import { Acercade } from "../../componentes/Otros/Acercade"
import { Horarios } from "../../componentes/Vuelos/Horarios"
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado"

export const Ruteo=() => {
    
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/consul" element={<Consultarvuelos/>}/>
            <Route path="/ravuel" element={<Rastrearvuelos/>}/>
            <Route path="/hora" element={<Horarios/>}/>
            <Route path="*" element={<NoEncontrado/>}/>
            <Route path="/nosoacer" element={<Acercade/>}/>

        </Routes>
    )
}
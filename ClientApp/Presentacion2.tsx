import { useEffect } from "react";

type Equipo = {
     "Id": string,
    "Escuela": string,
    "Carrera": string,
    "Grupo": string,
    "DatosSemestrales": string,
    "Proyecto": string,
    "Integrante1": string,
    "Integrante2": string,
    "Fecha": string
}

const Presentacion2 = () => {
    //Manejo de datos 
    const cargarDatos = async () => {
        const resp = await fetch("/mi-proyecto/presentacion");
        if (resp.ok) {
            const datos = await resp.json();
            console.log(datos);
        }
    }

    useEffect(() => {
        cargarDatos();
    }, []);
    //Vista
    return (
        <>
            <div className="display-4">Nombre del cbtis</div>
            <div className="h1">Integrantes</div>
            <div className="h2">Nombre del integrante 1</div>
            <div className="h2">Nombre del integrante 2</div>
            <div className="h1">Nombre del proyecto</div>
        </>
    )
}

export default Presentacion2;
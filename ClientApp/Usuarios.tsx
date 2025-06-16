import { useEffect, useState } from "react";

type Usuarios =
{
 "Id": string,
 "Nombre": string,
 "Password": string,
 "Correo": string
}

const Usuarios = () => {
    // Datos
    const [registros, setRegistros] = useState<Usuarios[]>([]);
    const [texto, setTexto] = useState("");

    const listarRegristros = async () => {
        let url = "/api/usuarios";
          
        if(texto){
            url += "?texto=" + texto;
        }
        const resp = await fetch(url);
        if(resp.ok){
            const datos = await resp.json();
            setRegistros(datos);
        }
    }

    useEffect(()=>{
        listarRegristros();
    }, []);     
    const buscar = () => {
        listarRegristros();
    }
    const eliminar = async (item: Usuarios) => {
        if(!confirm("¿Desea eliminar el usuario " + item.Nombre + "?")){
            return;
        }
        
        const resp = await fetch("/api/usuarios" + item.Id, {
            method: "DELETE"
        });
        if (resp.ok){
            listarRegristros();

        }
        else {
            const error = await resp.text();
            console.log(error); 
            alert("Ocurrio un error al eliminar el registro");
        }
    }

    // Vista
    return (
        <>
        <div className= "container">
            <h1>Usuarios</h1>
        </div>
        <div className="container">
            <div className="card">
                <div className="card-header">Busqueda</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label>Busqueda de Usuarios</label>
                                <input type="text" className="form-control" 
                                placeholder="Introduce el nombre o el correo"
                                onChange={(e) => setTexto(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={buscar}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-4">
            <div className="card">
                 <div className="card-header">Usuarios existentes</div>
                 <div className="card-body"> 
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Password</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            registros.length === 0 &&
                            <tbody>
                                <tr>
                                    <td colSpan={5}>No hay registros para mostrar</td>
                                </tr>
                            </tbody>
                        }
                        {
                            registros.length > 0 &&
                            <tbody>
                            {
                                registros.map((item, index) => 
                                <tr>
                                 <td>{index + 1}</td>
                                 <td>{item.Nombre}</td>
                                 <td>{item.Correo}</td>
                                 <td>{item.Password}</td>
                                 <td className="d-flex gap-2">
                                    <a className="btn btn-primary" href={"/usuarios/"+ item.Id}>Editar</a>
                                    <button className="btn btn-danger " onClick={()=> eliminar(item)}>Eliminar</button>
                                 </td>
                                </tr>
                                )
                            }


                         </tbody>
                        }

                    </table>
                 </div>
            </div>
        </div>
        </>
    )
}

export default Usuarios;
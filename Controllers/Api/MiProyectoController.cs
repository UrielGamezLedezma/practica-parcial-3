using Microsoft.AspNetCore.Mvc;
using Practica.Models;
using MongoDB.Driver;

 namespace Practica.contollers.Api;
 
 [ApiController]
 [Route("mi-proyecto")]
 public class MiProyectoController : ControllerBase
 {
    [HttpGet("integrantes")]
    public IActionResult Integrantes()
    {
        var proyecto = new MiProyecto
        {
        NombreIntegrante1 = "Evelyn Janeth Resendiz Marin",
        NombreIntegrante2 = "Uriel Gamez Ledezma"
        };
        return Ok(proyecto);
    }
    [HttpGet("presentacion")]
    public IActionResult Presentacion(){
        MongoClient client = new MongoClient(CadenasConexion.Mongo_DB);
        var db = client.GetDatabase("Escuela_evelyn_uriel");
        var collection = db.GetCollection<Equipo>("Equipo");
        
        var lista = collection.Find(FilterDefinition<Equipo>.Empty).ToList();
        return Ok(lista);
    }
 }
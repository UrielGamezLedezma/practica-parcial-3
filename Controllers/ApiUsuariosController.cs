using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

[ApiController]
[Route("api/usuarios")]

public class ApiUsuariosController : ControllerBase
{
 // Metodos  para hacer las operaciones CRUD
 // C= Create
 // R= Read  
 // U= Update
 // D= Delete

 private readonly IMongoCollection<Usuario> collection;  
 public ApiUsuariosController()
  {
    var client = new MongoClient(CadenasConexion.Mongo_DB);
    var db = client.GetDatabase("Escuela_evelyn_uriel");
    this.collection = db.GetCollection<Usuario>("Usuarios");
  }
 [HttpGet]
 public IActionResul t ListarUsuarios()
  {
    var filter = FilterDefinition<Usuario>.Empty;
    var list = this.collection.Find(filter).ToList();
    return Ok(list);   
  }
}
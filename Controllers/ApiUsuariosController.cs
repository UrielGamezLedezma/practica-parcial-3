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
 public IActionResult ListarUsuarios(string? texto)
  {
    var filter = FilterDefinition<Usuario>.Empty;
    if(!string.IsNullOrWhiteSpace(texto))
    {
        filter = Builders<Usuario>.Filter.Eq(u => u.Nombre, texto);
    }

    var list = this.collection.Find(filter).ToList();

    return Ok(list);   
  }
}
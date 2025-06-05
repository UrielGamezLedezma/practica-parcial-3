using Microsoft.AspNetCore.Mvc;
using Practica.Models;
 
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
 }
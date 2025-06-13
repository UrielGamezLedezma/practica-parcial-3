using Microsoft.AspNetCore.Mvc;

[Route("usuarios")]
public class UsuariosController : Controller
{
public IActionResult index()
{
  return View();
}
}

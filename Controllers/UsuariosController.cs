using Microsoft.AspNetCore.Mvc;

[Route("usuarios")]
public class UsuariosController : Controller
{
public IActionResul index()
{
  return Views();
}
}

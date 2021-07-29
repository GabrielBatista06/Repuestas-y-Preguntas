using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using BackEnd.DTO;
using BackEnd.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;
        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost]
        public async Task <IActionResult>Post([FromBody] Usuario usuario )
        {
            try
            {   var validateExistence = await _usuarioService.ValidateExistence(usuario);
                if (validateExistence)
                {
                    return BadRequest(new{message="El nombre "+usuario.NombreUsuario + " ya existe" });
                }
                usuario.Password = Encriptar.EncriptarPassword(usuario.Password);
                await _usuarioService.SaveUser(usuario);
                return Ok(new { message = "Usuario registrado de manera exitosa" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [Route("CambiarPassword")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut]
        public async Task <IActionResult> CambiarPassword ([FromBody]CambiarPasswordDTO cambiarPasswordDTO)
        {
          try
          {
            var identity=  HttpContext.User.Identity as ClaimsIdentity;
            int idUsuario = JwtConfigurator.GetTokenIdUsuario(identity);
            
            string passwordEncriptado =  Encriptar.EncriptarPassword(cambiarPasswordDTO.passwordAnterior);
            var usuario = await _usuarioService.ValidatePassword(idUsuario, passwordEncriptado);
            if (usuario == null)
            {
                return BadRequest(new { message = "Las Password es incorrecta" });

            }
            else
            {
                usuario.Password = Encriptar.EncriptarPassword(cambiarPasswordDTO.nuevaPassword);
                  await  _usuarioService.UpdatePassword(usuario);
                return Ok(new { message = "La password fue actualizada" });
            }

          }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

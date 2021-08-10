using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
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
    public class RespuestaCuestionarioController : ControllerBase
    {
        private readonly IRespuestaCuestionarioService _respuestaCuestionarioService;
        public RespuestaCuestionarioController(IRespuestaCuestionarioService respuestaCuestionarioService)
        {
            _respuestaCuestionarioService = respuestaCuestionarioService;
        }
        [HttpPost]
        public async Task <IActionResult>Post([FromBody]RespuestaCuestionario respuestaCuestionario)
        {
            try
            {
                await _respuestaCuestionarioService.SaveRespuestaCuestionario(respuestaCuestionario);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{idCuestionario}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public async Task<IActionResult>Get(int idCuestionario)
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int idUsuario = JwtConfigurator.GetTokenIdUsuario(identity);


                var listRespuestasCuestionario = await _respuestaCuestionarioService.ListrespuestaCuestionarios(idCuestionario, idUsuario);

                if (listRespuestasCuestionario == null)
                {
                    return BadRequest(new { message = "Error al mostrar el listado" });
                }
                return Ok(listRespuestasCuestionario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public async Task<IActionResult>Delete(int id)
        {
            try
            {
                var identity = HttpContext.User.Identity as ClaimsIdentity;
                int idUsuario = JwtConfigurator.GetTokenIdUsuario(identity);

                var respuestaCuestionario = await _respuestaCuestionarioService.VerRespuestaCuestionario(id, idUsuario);
                if (respuestaCuestionario == null)
                {
                    return BadRequest(new { message = "No se pudo encontrar las respuestas del cuestionario" });

                }
                await _respuestaCuestionarioService.EliminarRespuestaCuestionario(respuestaCuestionario);
                return Ok(new { message = "La repuesta fue eliminada" });

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

    }
}

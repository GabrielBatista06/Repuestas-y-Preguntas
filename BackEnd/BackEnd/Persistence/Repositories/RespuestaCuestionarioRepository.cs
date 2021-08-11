using BackEnd.Domain.IRepositories;
using BackEnd.Domain.Models;
using BackEnd.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Persistence.Repositories
{
    public class RespuestaCuestionarioRepository: IRespuestaCuestionarioRepository
    {
        private readonly AplicacionDbContext _context;
        public RespuestaCuestionarioRepository(AplicacionDbContext context)
        {
            _context = context;
        }



        public async Task SaveRespuestaCuestionario(RespuestaCuestionario respuestaCuestionario)
        {
            respuestaCuestionario.Activo = 1;
            respuestaCuestionario.Fecha = DateTime.Now;

            _context.Add(respuestaCuestionario);
            await _context.SaveChangesAsync();
        }

        public async Task<List<RespuestaCuestionario>> ListrespuestaCuestionarios(int idCuestionario, int idUsuario)
        {
            var listRespuestaCuestionario = await _context.RespuestaCuestionarios.Where(x => x.CuestionarioId == idCuestionario
                                                                                             && x.Activo == 1
                                                                                             && x.Cuestionario.UsuarioId == idUsuario)
                                                                                         .OrderByDescending(x => x.Fecha).ToListAsync();
            return listRespuestaCuestionario;
        }

        public async Task<RespuestaCuestionario> VerRespuestaCuestionario(int idRtaCuestionario, int idUsuario)
        {
            var respuestaCuestionario = await _context.RespuestaCuestionarios.Where(x => x.Id == idRtaCuestionario
                                                                                          && x.Cuestionario.UsuarioId == idUsuario
                                                                                          && x.Activo == 1).FirstOrDefaultAsync();
            return respuestaCuestionario;
        }

        public async Task EliminarRespuestaCuestionario(RespuestaCuestionario respuestaCuestionario)
        {
            respuestaCuestionario.Activo = 0;

            _context.Entry(respuestaCuestionario).State = EntityState.Modified;

            await _context.SaveChangesAsync();
        }

        public async Task <int> GetIdCuestionarioByIdRta(int idRespuestaCuestionario)
        {
            var cuestionario = await _context.RespuestaCuestionarios.Where(x=> x.Id == idRespuestaCuestionario && x.Activo == 1).FirstOrDefaultAsync();

            return cuestionario.CuestionarioId;
        }
         
        public async Task<List<RespuestaCuestionarioDetalle>> GetListRespuesta(int idRespuestaCuestionario)
        {
            var listRespuesta = await _context.RespuestaCuestionarioDetalles.Where(x => x.RespuestaCuestionarioId == idRespuestaCuestionario)
                                                                                   .Select(x => new RespuestaCuestionarioDetalle
                                                                                   {
                                                                                       RespuestaId = x.RespuestaId

                                                                                   }).ToListAsync();
            return listRespuesta;

        }

    }
}

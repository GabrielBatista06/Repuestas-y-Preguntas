using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    
    public class RespuestaCuestionarioService: IRespuestaCuestionarioService
    {
        private readonly IRespuestaCuestionarioRepository _respuestaCuestionarioRepository;
        public RespuestaCuestionarioService(IRespuestaCuestionarioRepository respuestaCuestionarioRepository)
        {
            _respuestaCuestionarioRepository = respuestaCuestionarioRepository;
        }

        public async Task<List<RespuestaCuestionario>> ListrespuestaCuestionarios(int idCuestionario, int idUsuario)
        {
            return await _respuestaCuestionarioRepository.ListrespuestaCuestionarios(idCuestionario, idUsuario);
        }

        public async Task SaveRespuestaCuestionario(RespuestaCuestionario respuestaCuestionario)
        {
            await _respuestaCuestionarioRepository.SaveRespuestaCuestionario(respuestaCuestionario);
        }

        public async Task<RespuestaCuestionario> VerRespuestaCuestionario(int idRtaCuestionario, int idUsuario)
        {
            return await _respuestaCuestionarioRepository.VerRespuestaCuestionario(idRtaCuestionario, idUsuario);
        }

        public async Task EliminarRespuestaCuestionario(RespuestaCuestionario respuestaCuestionario)
        {
             await _respuestaCuestionarioRepository.EliminarRespuestaCuestionario(respuestaCuestionario);
        }
    }
}

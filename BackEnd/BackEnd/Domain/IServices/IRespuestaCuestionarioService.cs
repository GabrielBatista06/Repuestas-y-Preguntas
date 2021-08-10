using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IServices
{
   public interface IRespuestaCuestionarioService
    {
       
        Task SaveRespuestaCuestionario(RespuestaCuestionario respuestaCuestionario);

        Task<List<RespuestaCuestionario>> ListrespuestaCuestionarios(int idCuestionario, int idUsuario);

        Task<RespuestaCuestionario> VerRespuestaCuestionario(int idRtaCuestionario, int idUsuario);

        Task EliminarRespuestaCuestionario(RespuestaCuestionario respuestaCuestionario);
    }

}

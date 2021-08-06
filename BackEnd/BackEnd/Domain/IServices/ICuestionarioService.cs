using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IServices
{
   public interface ICuestionarioService
    {
       
        Task CreateCuestionario(Cuestionario cuestionario);

        Task<List<Cuestionario>> GetListCuestionarioByUser(int idUsuario);

        Task<Cuestionario> GetCuestionario(int idCuestionario);

        Task<Cuestionario> BuscarCuestionario(int idCuestionario, int idUsuario);

        Task EliminarCuestionario(Cuestionario cuestionario);

        Task<List<Cuestionario>> GetListCuestionarios();

    }
}

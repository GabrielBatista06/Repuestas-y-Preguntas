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
    }
}

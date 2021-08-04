using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.IRepositories
{
  public interface ICuestionarioRepository
    {
        Task CreateCuestionario(Cuestionario cuestionario);
    }
}

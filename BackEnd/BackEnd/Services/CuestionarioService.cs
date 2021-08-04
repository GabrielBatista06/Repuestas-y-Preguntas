using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Services
{
    public class CuestionarioService: ICuestionarioService
    {
        private readonly ICuestionarioRepository _cuestionarioRepository;
        public CuestionarioService(ICuestionarioRepository cuestionarioRepository)
        {
            _cuestionarioRepository = cuestionarioRepository;

        }

        public async Task CreateCuestionario(Cuestionario cuestionario)

        {
            await _cuestionarioRepository.CreateCuestionario(cuestionario);
        }
    }
}

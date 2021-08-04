using BackEnd.Domain.IRepositories;
using BackEnd.Domain.Models;
using BackEnd.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Persistence.Repositories
{
    public class CuestionarioRepository: ICuestionarioRepository
    {
        private readonly AplicacionDbContext _context;
        public CuestionarioRepository(AplicacionDbContext context)
        {
            _context = context;
        }

        public async Task CreateCuestionario(Cuestionario cuestionario)
        {
            _context.Add(cuestionario);

            await _context.SaveChangesAsync();
        }
    }
}

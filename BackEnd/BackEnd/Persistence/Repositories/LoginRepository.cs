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
    
    public class LoginRepository: ILoginRepository
    {
        private readonly AplicacionDbContext _context;
        public LoginRepository(AplicacionDbContext context)
        {
            _context = context;
        }

        public async Task<Usuario> ValidateUser(Usuario usuario)
        {
            var user =await _context.Usuarios.Where
                (x => x.NombreUsuario == usuario.NombreUsuario && x.Password == usuario.Password).FirstOrDefaultAsync();

            return user;
        }
    }
}

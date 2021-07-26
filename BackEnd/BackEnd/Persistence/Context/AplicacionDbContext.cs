using BackEnd.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Persistence.Context
{
    public class AplicacionDbContext: DbContext
    {
        public DbSet <Usuario>Usuarios { get; set; }
        public AplicacionDbContext(DbContextOptions<AplicacionDbContext> options) : base(options)
        {
                
        }
    }
}

using BackEndDorea.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace BackEndDorea.Data
{
    public class _DbContext : DbContext
    {
        public _DbContext(DbContextOptions<_DbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Doacao> Doacaos { get; set; }
        public DbSet<Projeto> Projetos { get; set; }
    }
}

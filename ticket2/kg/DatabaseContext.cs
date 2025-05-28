using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ticket2.kg
{
    public class DatabaseContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("");
            }
            base.OnConfiguring(optionsBuilder);
        }

        public virtual DbSet<Game> films { get; set; } = null!;
        public virtual DbSet<DevStudio> DevStudios { get; set; } = null!;
    }
}

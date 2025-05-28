using Microsoft.EntityFrameworkCore;

namespace gosi1
{
    public class DatabaseContext: DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("");
            }
            base.OnConfiguring(optionsBuilder);
        }

        public virtual DbSet<Film> films { get; set; } = null!;
        public virtual DbSet<Genre> genres { get; set; } = null!;
    }
}

using Microsoft.EntityFrameworkCore;
using WishHub.Api.Models;

namespace WishHub.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Wish> Wishes { get; set; }
    }
}

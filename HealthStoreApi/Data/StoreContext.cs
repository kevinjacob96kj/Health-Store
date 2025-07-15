using HealthStoreApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace HealthStoreApi.Data
{
    public class StoreContext(DbContextOptions options): DbContext(options)
    {
        public DbSet <Product> Products { get; set; }
    }
}

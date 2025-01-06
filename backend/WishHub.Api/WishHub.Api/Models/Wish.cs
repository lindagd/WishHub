using WishHub.Api.Data.Enum;

namespace WishHub.Api.Models
{
    public class Wish
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Category { get; set; }
        public string? Link { get; set; }
        public double? Price { get; set; }
        public WishStatus Status { get; set; } = WishStatus.Pending;
    }
}

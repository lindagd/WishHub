using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WishHub.Api.Data;
using WishHub.Api.Data.Enum;
using WishHub.Api.Models;

namespace WishHub.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishesController : ControllerBase
    {
        private readonly AppDbContext _context;
        public WishesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _context.Wishes.ToListAsync());
        }

        [HttpGet("pending")]
        public async Task<IActionResult> GetPendingWishes()
        {
            return Ok(await _context.Wishes.Where(w => w.Status == WishStatus.Pending).ToListAsync());
        }

        [HttpGet("pending/count")]
        public IActionResult GetPendingWishesCount()
        {
            return Ok(_context.Wishes.Count(w => w.Status == WishStatus.Pending));
        }

        [HttpGet("achieved")]
        public async Task<IActionResult> GetAchievedWishes()
        {
            return Ok(await _context.Wishes.Where(w => w.Status == WishStatus.Acquired).ToListAsync());
        }

        [HttpGet("achieved/count")]
        public IActionResult GetAchievedWishesCount()
        {
            return Ok(_context.Wishes.Count(w => w.Status == WishStatus.Acquired));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var wish = await _context.Wishes.FindAsync(id);
            if (wish == null) return NotFound();

            return Ok(wish);
        }

        [HttpPut("{id}/achieve")]
        public async Task<IActionResult> MarkAsAchieved(int id)
        {
            var wish = await _context.Wishes.FindAsync(id);
            if (wish == null) return NotFound();

            wish.Status = WishStatus.Acquired;
            await _context.SaveChangesAsync();

            //return Ok(new {Message = "Wish marked as achieved"});
            return Ok(wish);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Wish wish)
        {
            _context.Wishes.Add(wish);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAll), new { id = wish.Id }, wish);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Wish wish)
        {
            if (id != wish.Id) return BadRequest();

            _context.Entry(wish).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Wishes.Any(e => e.Id == id)) return NotFound();
                throw;
            }

            return Ok(wish);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var wish = await _context.Wishes.FindAsync(id);
            if (wish == null) return NotFound();

            _context.Wishes.Remove(wish);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}

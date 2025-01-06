using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WishHub.Api.Data;
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var wish = await _context.Wishes.FindAsync(id);
            if (wish == null) return NotFound();

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

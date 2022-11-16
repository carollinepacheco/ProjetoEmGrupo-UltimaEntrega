using BackEndDorea.Data;
using BackEndDorea.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEndDorea.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjetosController : ControllerBase
    {
        private readonly _DbContext Db;

        public ProjetosController(_DbContext db)
        {
            Db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Projeto>>> GetProjetos() 
        {
            return await Db.Projetos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Projeto>> GetProjetoById(int id)
        {
            var projeto = await Db.Projetos.FindAsync(id);
            if (projeto == null)
            {
                return NotFound();
            }

            return projeto;
        }


        [HttpPost]
        public async Task<ActionResult<Projeto>> PostProjeto(Projeto projeto)
        {
            await Db.Projetos.AddAsync(projeto);
            await Db.SaveChangesAsync();

            return CreatedAtAction("GetProjeto", new { id = projeto.Id }, projeto);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> PutProjeto(int id, Projeto projeto)
        {
            var updateProjeto = await Db.Projetos.FindAsync(id);

            if (id != projeto.Id)
            {
                return NotFound();
            }

            if (updateProjeto == null)
            {
                return NotFound();
            }

            updateProjeto.Nome = projeto.Nome;
            updateProjeto.Objetivo = projeto.Objetivo;
            updateProjeto.Img = projeto.Img;

            Db.Entry(updateProjeto).State = EntityState.Modified;

            try
            {
                await Db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjetoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProjeto(int id)
        {
            var projeto = await Db.Projetos.FindAsync(id);
            if (projeto == null)
            {
                return NotFound();
            }

            Db.Remove(projeto);
            await Db.SaveChangesAsync();

            return NoContent();
        }


        private bool ProjetoExists(int id)
        {
            return Db.Projetos.Any(e => e.Id == id);
        }
    }
}

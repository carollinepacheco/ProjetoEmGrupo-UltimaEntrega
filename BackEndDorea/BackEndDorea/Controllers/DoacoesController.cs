using BackEndDorea.Data;
using BackEndDorea.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEndDorea.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoacoesController : Controller
    {

        private readonly _DbContext Db;

        public DoacoesController(_DbContext _Db)
        {
            Db = _Db;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doacao>>> GetDoacoes()
        {
            return await Db.Doacaos.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Doacao>> GetDoacaoById(int id)
        {
            var Doacao = await Db.Doacaos.FindAsync(id);

            if (Doacao == null)
            {
                return NotFound();
            }

            return Ok(Doacao);
        }


        [HttpPost]
        public async Task<ActionResult> PostDoacao(Doacao doacao)
        {
            var projeto = await Db.Projetos.FindAsync(doacao.Projeto.Id);
            if(projeto == null)
            {
                return NotFound();
            }

            doacao.Projeto = projeto;
            
            await Db.Doacaos.AddAsync(doacao);
            await Db.SaveChangesAsync();

            return Ok(doacao);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> PutDoacao(int id, Doacao doacao)
        {
            var updateDoacao = await Db.Doacaos.FindAsync(id);
            var projeto = await Db.Projetos.FindAsync(doacao.Projeto.Id);

            if (id != doacao.Id)
            {
                return NotFound();
            }

            if (updateDoacao == null)
            {
                return NotFound();
            }

            updateDoacao.Valor = doacao.Valor;
            updateDoacao.Projeto = projeto;

            Db.Entry(updateDoacao).State = EntityState.Modified;
            try
            {
                await Db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoacaoExist(id))
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
        public async Task<ActionResult> DeleteDoacao(int id)
        {
            var Doacao = await Db.Doacaos.FindAsync(id);

            if (Doacao == null)
            {
                return NotFound();
            }

            Db.Doacaos.Remove(Doacao);
            await Db.SaveChangesAsync();

            return NoContent();
        }


        private bool DoacaoExist(int id)
        {
            return Db.Doacaos.Any(e => e.Id == id);
        }
    }
}
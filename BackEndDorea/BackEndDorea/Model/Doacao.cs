using Microsoft.EntityFrameworkCore.Infrastructure;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndDorea.Model
{
    [Table(name: "doacao")]
    public class Doacao
    {
        private readonly ILazyLoader _lazyLoader;

        public Doacao()
        {

        }

        public Doacao(ILazyLoader lazyLoader)
        {
            _lazyLoader = lazyLoader;
        }

        [Column("doacao_id")]
        public int Id { get; set; }

        [Column("doacao_valor")]
        public string? Valor { get; set; }


        private Projeto _Projeto;

        [ForeignKey("projeto_fk")]
        public Projeto Projeto
        {
            get => _lazyLoader.Load(this, ref _Projeto);
            set => _Projeto = value;
        }
    }
}

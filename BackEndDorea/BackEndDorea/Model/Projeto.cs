using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BackEndDorea.Model
{
    [Table(name:"projeto")]
    public class Projeto
    {
        [Column("projeto_id")]
        public int Id { get; set; }

        [Column("projeto_nome")]
        public string? Nome { get; set; }

        [Column("projeto_objetivo")]
        public string? Objetivo { get; set; }

        [Column("projeto_imagem")]
        public string? Img { get; set; }

        [JsonIgnore]
        public ICollection<Doacao>? Doacoes { get; set; }
    }
}

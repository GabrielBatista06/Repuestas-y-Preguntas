using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Domain.Models
{
    public class Pregunta
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Descripcion { get; set; }

        public int CuestionarioId { get; set; }

        public Cuestionario Cuestionario { get; set; }

        public List<Respuesta> listRepuesta { get; set; }
    }
}

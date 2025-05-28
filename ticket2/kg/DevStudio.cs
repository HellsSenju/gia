using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ticket2.kg
{
    [DataContract]
    public class DevStudio
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public List<Game> Games { get; set; } = []; // Навигационное свойство: один ко многим
    }
}

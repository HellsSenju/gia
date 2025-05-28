using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ticket2.kg
{
    [Serializable]
    public class Game
    {
        [Key]
        public int Id {  get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Genre { get; set; } = string.Empty;

        [Required]
        public int Year { get; set; }
        
        public int DevStudioId { get; set; }

        [Required]
        [ForeignKey("DevStudioId")]
        public DevStudio DevStudio { get; set; }

        public static Game Create(int id, string name, string genre, int year)
        {
            return new Game { 
                Id = id,
                Name = name,
                Genre = genre,
                Year = year
            };
        }
    }
}

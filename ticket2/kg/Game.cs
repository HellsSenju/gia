using System.ComponentModel.DataAnnotations;

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

        [Required]
        public DevStudio DevStudio { get; set; } = new();

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

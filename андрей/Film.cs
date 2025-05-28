using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace gosi1
{
    [Serializable]
    [DataContract]
    public class Film
    {
        [Key]
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        [Required]
        public string Name { get; set; } = string.Empty;
        [DataMember]
        [Required]
        public string Author { get; set; } = string.Empty;
        [DataMember]
        [Required]
        public int Duration { get; set; }
        [DataMember]
        [Required]
        public int Year { get; set; }
        [DataMember]
        [Required]
        public Genre Genre { get; set; } = new();

        public static Film Create(int id, string name, string author, int duration, int year)
        {
            return new Film
            {
                Id = id,
                Name = name,
                Author = author,
                Duration = duration,
                Year = year
            };
        }
    }
}

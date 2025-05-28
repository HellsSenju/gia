using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace gosi1
{
    [DataContract]
    public class Genre
    {
        [Key]
        [DataMember]
        public int Id { get; set; }
        [Required]
        [DataMember]
        public string Name { get; set; } = string.Empty;
        [Required]
        [DataMember]
        public string Description { get; set; } = string.Empty;
    }
}

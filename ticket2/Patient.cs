using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ticket2
{
    [Serializable]
    [DataContract]
    public class Patient
    {
        public string FullName { get; set; }
        public int Age { get; set; }
        public int RoomNumber { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace gosi1
{
    public partial class FormCreateFilm : Form
    {
        private Film? _Film = null;

        public FormCreateFilm()
        {
            InitializeComponent();
        }

        public Film? GetFilm()
        {
            return _Film;
        }

        private void CreateButton_Click(object sender, EventArgs e)
        {
            var filmName = FilmNameTextBox.Text.Trim();
            if (filmName == String.Empty)
            {
                return;
            }

            var filmAuthor = AuthorTextBox.Text.Trim();
            if (filmAuthor == String.Empty)
            {
                return;
            }

            var filmDuration = Convert.ToInt32(DurationNumericUpDown.Value);
            if (filmDuration == 0)
            {
                return;
            }

            var filmYear = Convert.ToInt32(YearNumericUpDown.Value);

            try
            {
                _Film = Film.Create(0, filmName, filmAuthor, filmDuration, filmYear);
                MessageBox.Show("Saving is successful", "Info", MessageBoxButtons.OK, MessageBoxIcon.Information);
                DialogResult = DialogResult.OK;
                Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}

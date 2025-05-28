using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ticket2.kg
{
    public partial class FormKGAdd : Form
    {
        private Game? _game = null;
        public FormKGAdd()
        {
            InitializeComponent();
        }

        public Game? GetGame() {
            return _game;
        }

        private void buttonCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        private void buttonSave_Click(object sender, EventArgs e)
        {
            var name = textBoxName.Text;
            if (string.IsNullOrEmpty(name)) { 
                return;
            }
            var gentre = textBoxGenre.Text;
            if (string.IsNullOrEmpty(gentre))
            {
                return;
            }

            var filmYear = Convert.ToInt32(numericUpDownYear.Value);

            try
            {
                _game = Game.Create(0, name, gentre, filmYear);
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

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ticket2.kg
{
    public partial class FormKG : Form
    {
        private List<Game> _games = [];

        private List<Game> _filteredGames = [];

        public FormKG()
        {
            InitializeComponent();
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            FormKGAdd formCreate = new();
            formCreate.ShowDialog();

            if (formCreate.DialogResult == DialogResult.OK)
            {
                var game = formCreate.GetGame();
                if (game != null)
                {
                    _games.Add(game);
                    _filteredGames = _games;
                    LoadData();
                }
            }
        }

        private void LoadData()
        {
            listBox.Items.Clear();

            foreach (var item in _filteredGames)
            {
                listBox.Items.Add($"Название: {item.Name} | Жанр {item.Genre} | Издание {item.Year} года");
            }
        }

        private void textBoxFilter_TextChanged(object sender, EventArgs e)
        {
            var genre = textBoxFilter.Text;
            _filteredGames = [.. _games.Where(film => film.Genre.Contains(genre))];
            LoadData();
        }

        private void buttonSave_Click(object sender, EventArgs e)
        {
            SaveFileDialog openFileDialog = new SaveFileDialog();
            openFileDialog.DefaultExt = "xml";
            openFileDialog.CreatePrompt = true;
            openFileDialog.ShowDialog();

            if (openFileDialog.FileName != string.Empty)
            {
                using StreamWriter sr = new(openFileDialog.FileName);
                string json = JsonSerializer.Serialize(_games);
                sr.WriteLine(json);
            }
        }

        private void buttonLoad_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog = new();
            openFileDialog.ShowDialog();

            if (openFileDialog.FileName != string.Empty)
            {

                using StreamReader sr = new(openFileDialog.FileName);
                string? json = sr.ReadLine();

                if (json == null)
                {
                    return;
                }

                List<Game>? jsonGames = JsonSerializer.Deserialize<List<Game>>(json);
                if (jsonGames == null)
                {
                    return;
                }

                _games = jsonGames;
                _filteredGames = _games;

                LoadData();
            }
        }

        private void buttonDo_Click(object sender, EventArgs e)
        {
            var year = Convert.ToInt32(numericUpDownYear.Value);
            var count = _games
                .Count(game => game.Year.Equals(year));
            labelRes.Text = count.ToString();
        }
    }
}

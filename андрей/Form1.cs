using System;
using System.Text.Json;
using System.Xml.Serialization;

namespace gosi1
{
    public partial class Form1 : Form
    {
        private List<Film> _films = [];
        private List<Film> _filteredFilms = [];

        public Form1()
        {
            InitializeComponent();
        }

        private void CreateNewFilm_Click(object sender, EventArgs e)
        {
            FormCreateFilm formCreateFilm = new();
            formCreateFilm.ShowDialog();

            if (formCreateFilm.DialogResult == DialogResult.OK)
            {
                var film = formCreateFilm.GetFilm();
                if (film != null)
                {
                    _films.Add(film);
                    _filteredFilms = _films;
                    LoadData();
                }
            }
        }

        private void LoadData()
        {
            DataList.Items.Clear();
            foreach (var item in _filteredFilms)
            {
                DataList.Items.Add($"Id: {item.Id} " +
                    $"| Name: {item.Name} " +
                    $"| Author: {item.Author} " +
                    $"| Year: {item.Year} " +
                    $"| Duartion: {item.Duration / 60}H {item.Duration % 60}M");
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void TextBoxAuthor_TextChanged(object sender, EventArgs e)
        {
            var author = TextBoxAuthor.Text;
            _filteredFilms = [.. _films.Where(film => film.Author.Contains(author))];
            LoadData();
        }

        private void NumericUpDownYear_ValueChanged(object sender, EventArgs e)
        {
            var year = Convert.ToInt32(NumericUpDownYear.Value);
            var firstFilms = _films
                .Where(film => film.Year.Equals(year))
                .OrderBy(film => film.Duration)
                .FirstOrDefault();

            if (firstFilms != null)
            {
                _filteredFilms = [firstFilms];
                LoadData();
            }
        }

        private void ButtonClearSelections_Click(object sender, EventArgs e)
        {
            _filteredFilms = _films;
        }

        private void LoadFromFile_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog = new();
            openFileDialog.ShowDialog();

            if (openFileDialog.FileName != string.Empty)
            {
                //XmlSerializer xmlSerializer = new XmlSerializer(typeof(List<Film>));
                //using FileStream fs = new(openFileDialog.FileName, FileMode.Open);

                //if (xmlSerializer.Deserialize(fs) is not List<Film> films)
                //{
                //    return;
                //}

                //_films = films;
                //_filteredFilms = _films;

                using StreamReader sr = new(openFileDialog.FileName);
                string? json = sr.ReadLine();

                if (json == null)
                {
                    return;
                }

                List<Film>? jsonFilms = JsonSerializer.Deserialize<List<Film>>(json);
                if (jsonFilms == null)
                {
                    return;
                }

                _films = jsonFilms;
                _filteredFilms = _films;

                LoadData();
            }
        }

        private void Save_Click(object sender, EventArgs e)
        {
            SaveFileDialog openFileDialog = new SaveFileDialog();
            openFileDialog.DefaultExt = "xml";
            openFileDialog.CreatePrompt = true;
            openFileDialog.ShowDialog();

            if (openFileDialog.FileName != string.Empty)
            {
                //XmlSerializer xmlSerializer = new XmlSerializer(typeof(List<Film>));
                //using FileStream fs = new(openFileDialog.FileName, FileMode.OpenOrCreate);
                //xmlSerializer.Serialize(fs, _films);

                using StreamWriter sr = new(openFileDialog.FileName);
                string json = JsonSerializer.Serialize(_films);
                sr.WriteLine(json);
            }
        }
    }
}

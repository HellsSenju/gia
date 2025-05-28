using System;
using System.Windows.Forms;
using System.Text.Json.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
//using System.Xml.Serialization;


namespace WinFormsApp1
{
    public partial class Form1 : Form
    {
        private List<Film> Films = new List<Film>();
        private readonly string path = Path.Combine(Application.StartupPath, "films.json");
        //private readonly string path = Path.Combine(Application.StartupPath, "films.xml");

        public Form1()
        {
            InitializeComponent();
            LoadFilms();
            RefreshList();
        }

        private void LoadFilms()
        {
            if (File.Exists(path))
            {
                string json = File.ReadAllText(path);
                Films = JsonSerializer.Deserialize<List<Film>>(json) ?? new List<Film>();
            }
        }

        private void Save()
        {
            string json = JsonSerializer.Serialize(Films, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(path, json);
        }
        private void AddFilm(Film film)
        {
            Films.Add(film);
            Save();
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            if (!int.TryParse(txtYear.Text, out int year))
            {
                MessageBox.Show("¬ведите корректный год.");
                return;
            }

            var film = new Film
            {
                Title = txtTitle.Text,
                Director = txtDirector.Text,
                Year = year,
                Genre = txtGenre.Text
            };

            AddFilm(film);
            RefreshList();
            ClearInputs();
        }

        private void RefreshList()
        {
            listBoxFilms.Items.Clear();
            foreach (var film in Films)
            {
                listBoxFilms.Items.Add(film);
            }
        }

        private void ClearInputs()
        {
            txtTitle.Clear();
            txtDirector.Clear();
            txtYear.Clear();
            txtGenre.Clear();
        }
    }
}

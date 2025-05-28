using System.Text.Json;
using System.Windows.Forms;

namespace ticket2
{


    public partial class Form1 : Form
    {
        private List<Patient> patients = [];

        // для сохраения без диалогового окна
        private readonly string filePath = "patients.json";

        private static readonly JsonSerializerOptions s_writeOptions = new()
        {
            WriteIndented = true,
            Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping
        };

        public Form1()
        {
            InitializeComponent();
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            var patient = new Patient
            {
                FullName = txtFullName.Text,
                Age = (int)numericUpDownAge.Value,
                RoomNumber = (int)numericUpDownRoom.Value
            };

            patients.Add(patient);
            listBoxResult.Items.Add($"{patient.FullName} - {patient.Age} лет - {patient.RoomNumber}");
            //MessageBox.Show("Пациент добавлен", "Информация", MessageBoxButtons.OK, MessageBoxIcon.Information);
            ClearInputs();
        }

        private void ClearInputs()
        {
            txtFullName.Text = "";
            numericUpDownAge.Value = 0;
            numericUpDownRoom.Value = 0;
        }

        private void buttonSave_Click(object sender, EventArgs e)
        {
            //string json = JsonSerializer.Serialize(patients, s_writeOptions);
            //File.WriteAllText(filePath, json);

            // через диалоговое окно
            using (SaveFileDialog saveFileDialog = new SaveFileDialog())
            {
                saveFileDialog.Filter = "JSON Files (*.json)|*.json";
                saveFileDialog.Title = "Сохранить файл списка пациентов";
                saveFileDialog.FileName = "patients.json";

                if (saveFileDialog.ShowDialog() == DialogResult.OK)
                {
                    string json_ = JsonSerializer.Serialize(patients, s_writeOptions);

                    File.WriteAllText(saveFileDialog.FileName, json_, System.Text.Encoding.UTF8);

                    //ShowMessage("Список сохранён в файл:\n" + saveFileDialog.FileName);
                }
            }
        }

        private void buttonLoad_Click(object sender, EventArgs e)
        {
            //if (File.Exists(filePath))
            //{
            //    string json = File.ReadAllText(filePath);
            //    patients = JsonSerializer.Deserialize<List<Patient>>(json) ?? [];
            //    MessageBox.Show("Список загружен", "Информация", MessageBoxButtons.OK, MessageBoxIcon.Information);

            //    // Очистка и отображение в ListBox
            //    listBoxResult.Items.Clear();
            //    foreach (var p in patients)
            //    {
            //        listBoxResult.Items.Add($"{p.FullName} - {p.Age} лет - {p.Diagnosis}");
            //    }
            //}
            //else
            //{
            //    MessageBox.Show("Файл не найден", "Информация", MessageBoxButtons.OK, MessageBoxIcon.Information);
            //}

            // через диалоговое окно
            using (OpenFileDialog openFileDialog = new())
            {
                openFileDialog.Filter = "JSON Files (*.json)|*.json";
                openFileDialog.Title = "Открыть файл списка пациентов";

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        string json = File.ReadAllText(openFileDialog.FileName, System.Text.Encoding.UTF8);
                        patients = JsonSerializer.Deserialize<List<Patient>>(json) ?? new List<Patient>();

                        // Очистка и обновление ListBox
                        listBoxResult.Items.Clear();
                        foreach (var p in patients)
                        {
                            listBoxResult.Items.Add($"{p.FullName} - {p.Age} лет - {p.RoomNumber}");
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show("Ошибка загрузки файла: " + ex.Message, "Ошибка", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
            }
        }

        private void buttonFilter_Click(object sender, EventArgs e)
        {
            if (!int.TryParse(numericUpDownFilter.Text, out int minAge))
            {
                MessageBox.Show("Введите корректный возраст", "Ошибка", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            var result = from p in patients
                         where p.Age > minAge
                         select p;

            listBoxResult.Items.Clear();
            foreach (var p in result)
                listBoxResult.Items.Add($"{p.FullName} - {p.Age} лет");
        }

        private void buttonGroup_Click(object sender, EventArgs e)
        {
            var groups = patients
                .GroupBy(p => p.RoomNumber)
                .OrderByDescending(g => g.Count())
                .ToList();

            if (groups.Count == 0)
            {
                MessageBox.Show("Список пуст", "Информация", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return;
            }

            var topGroup = groups.First();
            labelResult.Text = $"Больше всего пациентов в палате №{topGroup.Key}";
        }
    }
}

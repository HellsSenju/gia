namespace ticket2.kg
{
    partial class FormKG
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            listBox = new ListBox();
            buttonAdd = new Button();
            textBoxFilter = new TextBox();
            label1 = new Label();
            numericUpDownYear = new NumericUpDown();
            label2 = new Label();
            label3 = new Label();
            labelRes = new Label();
            buttonSave = new Button();
            buttonLoad = new Button();
            buttonDo = new Button();
            ((System.ComponentModel.ISupportInitialize)numericUpDownYear).BeginInit();
            SuspendLayout();
            // 
            // listBox
            // 
            listBox.FormattingEnabled = true;
            listBox.ItemHeight = 15;
            listBox.Location = new Point(12, 42);
            listBox.Name = "listBox";
            listBox.Size = new Size(526, 694);
            listBox.TabIndex = 0;
            // 
            // buttonAdd
            // 
            buttonAdd.Location = new Point(568, 42);
            buttonAdd.Name = "buttonAdd";
            buttonAdd.Size = new Size(99, 41);
            buttonAdd.TabIndex = 1;
            buttonAdd.Text = "Добавить игру";
            buttonAdd.UseVisualStyleBackColor = true;
            buttonAdd.Click += buttonAdd_Click;
            // 
            // textBoxFilter
            // 
            textBoxFilter.Location = new Point(147, 12);
            textBoxFilter.Name = "textBoxFilter";
            textBoxFilter.Size = new Size(257, 23);
            textBoxFilter.TabIndex = 2;
            textBoxFilter.TextChanged += textBoxFilter_TextChanged;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(12, 15);
            label1.Name = "label1";
            label1.Size = new Size(129, 15);
            label1.TabIndex = 3;
            label1.Text = "Фильтрация по жанру";
            // 
            // numericUpDownYear
            // 
            numericUpDownYear.Location = new Point(685, 122);
            numericUpDownYear.Maximum = new decimal(new int[] { 2026, 0, 0, 0 });
            numericUpDownYear.Name = "numericUpDownYear";
            numericUpDownYear.Size = new Size(120, 23);
            numericUpDownYear.TabIndex = 4;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(544, 124);
            label2.Name = "label2";
            label2.Size = new Size(135, 15);
            label2.TabIndex = 5;
            label2.Text = "Игр было выпущено в ";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(811, 124);
            label3.Name = "label3";
            label3.Size = new Size(31, 15);
            label3.TabIndex = 6;
            label3.Text = "год: ";
            // 
            // labelRes
            // 
            labelRes.AutoSize = true;
            labelRes.Location = new Point(859, 124);
            labelRes.Name = "labelRes";
            labelRes.Size = new Size(0, 15);
            labelRes.TabIndex = 7;
            // 
            // buttonSave
            // 
            buttonSave.Location = new Point(697, 42);
            buttonSave.Name = "buttonSave";
            buttonSave.Size = new Size(145, 41);
            buttonSave.TabIndex = 8;
            buttonSave.Text = "Сохранить в файл";
            buttonSave.UseVisualStyleBackColor = true;
            buttonSave.Click += buttonSave_Click;
            // 
            // buttonLoad
            // 
            buttonLoad.Location = new Point(869, 42);
            buttonLoad.Name = "buttonLoad";
            buttonLoad.Size = new Size(145, 41);
            buttonLoad.TabIndex = 9;
            buttonLoad.Text = "Загрузить из файла";
            buttonLoad.UseVisualStyleBackColor = true;
            buttonLoad.Click += buttonLoad_Click;
            // 
            // buttonDo
            // 
            buttonDo.Location = new Point(557, 151);
            buttonDo.Name = "buttonDo";
            buttonDo.Size = new Size(274, 25);
            buttonDo.TabIndex = 10;
            buttonDo.Text = "Рассчитать";
            buttonDo.UseVisualStyleBackColor = true;
            buttonDo.Click += buttonDo_Click;
            // 
            // FormKG
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1255, 744);
            Controls.Add(buttonDo);
            Controls.Add(buttonLoad);
            Controls.Add(buttonSave);
            Controls.Add(labelRes);
            Controls.Add(label3);
            Controls.Add(label2);
            Controls.Add(numericUpDownYear);
            Controls.Add(label1);
            Controls.Add(textBoxFilter);
            Controls.Add(buttonAdd);
            Controls.Add(listBox);
            Name = "FormKG";
            Text = "FormKG";
            ((System.ComponentModel.ISupportInitialize)numericUpDownYear).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private ListBox listBox;
        private Button buttonAdd;
        private TextBox textBoxFilter;
        private Label label1;
        private NumericUpDown numericUpDownYear;
        private Label label2;
        private Label label3;
        private Label labelRes;
        private Button buttonSave;
        private Button buttonLoad;
        private Button buttonDo;
    }
}
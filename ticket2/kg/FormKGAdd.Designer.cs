namespace ticket2.kg
{
    partial class FormKGAdd
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
            buttonCancel = new Button();
            buttonSave = new Button();
            numericUpDownYear = new NumericUpDown();
            textBoxName = new TextBox();
            label1 = new Label();
            label2 = new Label();
            textBoxGenre = new TextBox();
            label3 = new Label();
            ((System.ComponentModel.ISupportInitialize)numericUpDownYear).BeginInit();
            SuspendLayout();
            // 
            // buttonCancel
            // 
            buttonCancel.Location = new Point(12, 140);
            buttonCancel.Name = "buttonCancel";
            buttonCancel.Size = new Size(98, 40);
            buttonCancel.TabIndex = 0;
            buttonCancel.Text = "Cancel";
            buttonCancel.UseVisualStyleBackColor = true;
            buttonCancel.Click += buttonCancel_Click;
            // 
            // buttonSave
            // 
            buttonSave.Location = new Point(137, 140);
            buttonSave.Name = "buttonSave";
            buttonSave.Size = new Size(101, 40);
            buttonSave.TabIndex = 1;
            buttonSave.Text = "Save";
            buttonSave.UseVisualStyleBackColor = true;
            buttonSave.Click += buttonSave_Click;
            // 
            // numericUpDownYear
            // 
            numericUpDownYear.Location = new Point(91, 93);
            numericUpDownYear.Maximum = new decimal(new int[] { 2026, 0, 0, 0 });
            numericUpDownYear.Name = "numericUpDownYear";
            numericUpDownYear.Size = new Size(123, 23);
            numericUpDownYear.TabIndex = 2;
            numericUpDownYear.Value = new decimal(new int[] { 1950, 0, 0, 0 });
            // 
            // textBoxName
            // 
            textBoxName.Location = new Point(86, 20);
            textBoxName.Name = "textBoxName";
            textBoxName.Size = new Size(257, 23);
            textBoxName.TabIndex = 3;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(12, 23);
            label1.Name = "label1";
            label1.Size = new Size(59, 15);
            label1.TabIndex = 4;
            label1.Text = "Название";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(12, 59);
            label2.Name = "label2";
            label2.Size = new Size(38, 15);
            label2.TabIndex = 6;
            label2.Text = "Жанр";
            // 
            // textBoxGenre
            // 
            textBoxGenre.Location = new Point(86, 56);
            textBoxGenre.Name = "textBoxGenre";
            textBoxGenre.Size = new Size(257, 23);
            textBoxGenre.TabIndex = 5;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(12, 95);
            label3.Name = "label3";
            label3.Size = new Size(73, 15);
            label3.TabIndex = 7;
            label3.Text = "Год издания";
            // 
            // FormKGAdd
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(385, 215);
            Controls.Add(label3);
            Controls.Add(label2);
            Controls.Add(textBoxGenre);
            Controls.Add(label1);
            Controls.Add(textBoxName);
            Controls.Add(numericUpDownYear);
            Controls.Add(buttonSave);
            Controls.Add(buttonCancel);
            Name = "FormKGAdd";
            Text = "FormKGAdd";
            ((System.ComponentModel.ISupportInitialize)numericUpDownYear).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button buttonCancel;
        private Button buttonSave;
        private NumericUpDown numericUpDownYear;
        private TextBox textBoxName;
        private Label label1;
        private Label label2;
        private TextBox textBoxGenre;
        private Label label3;
    }
}
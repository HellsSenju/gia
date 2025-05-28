namespace ticket2
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            txtFullName = new TextBox();
            label1 = new Label();
            numericUpDownAge = new NumericUpDown();
            label2 = new Label();
            label3 = new Label();
            listBoxResult = new ListBox();
            buttonAdd = new Button();
            buttonSave = new Button();
            buttonLoad = new Button();
            buttonFilter = new Button();
            numericUpDownFilter = new NumericUpDown();
            label4 = new Label();
            numericUpDownRoom = new NumericUpDown();
            buttonGroup = new Button();
            labelResult = new Label();
            ((System.ComponentModel.ISupportInitialize)numericUpDownAge).BeginInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDownFilter).BeginInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDownRoom).BeginInit();
            SuspendLayout();
            // 
            // txtFullName
            // 
            txtFullName.Location = new Point(109, 28);
            txtFullName.Name = "txtFullName";
            txtFullName.Size = new Size(416, 27);
            txtFullName.TabIndex = 0;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(29, 35);
            label1.Name = "label1";
            label1.Size = new Size(42, 20);
            label1.TabIndex = 1;
            label1.Text = "ФИО";
            // 
            // numericUpDownAge
            // 
            numericUpDownAge.Location = new Point(109, 74);
            numericUpDownAge.Name = "numericUpDownAge";
            numericUpDownAge.Size = new Size(150, 27);
            numericUpDownAge.TabIndex = 2;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(29, 76);
            label2.Name = "label2";
            label2.Size = new Size(64, 20);
            label2.TabIndex = 3;
            label2.Text = "Возраст";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(26, 119);
            label3.Name = "label3";
            label3.Size = new Size(58, 20);
            label3.TabIndex = 5;
            label3.Text = "Палата";
            // 
            // listBoxResult
            // 
            listBoxResult.FormattingEnabled = true;
            listBoxResult.Location = new Point(582, 28);
            listBoxResult.Name = "listBoxResult";
            listBoxResult.Size = new Size(768, 524);
            listBoxResult.TabIndex = 6;
            // 
            // buttonAdd
            // 
            buttonAdd.Location = new Point(29, 162);
            buttonAdd.Name = "buttonAdd";
            buttonAdd.Size = new Size(496, 35);
            buttonAdd.TabIndex = 8;
            buttonAdd.Text = "Добавить пациента";
            buttonAdd.UseVisualStyleBackColor = true;
            buttonAdd.Click += buttonAdd_Click;
            // 
            // buttonSave
            // 
            buttonSave.Location = new Point(29, 224);
            buttonSave.Name = "buttonSave";
            buttonSave.Size = new Size(230, 29);
            buttonSave.TabIndex = 9;
            buttonSave.Text = "сохранить в файл";
            buttonSave.UseVisualStyleBackColor = true;
            buttonSave.Click += buttonSave_Click;
            // 
            // buttonLoad
            // 
            buttonLoad.Location = new Point(304, 224);
            buttonLoad.Name = "buttonLoad";
            buttonLoad.Size = new Size(221, 29);
            buttonLoad.TabIndex = 10;
            buttonLoad.Text = "загрузить из файла";
            buttonLoad.UseVisualStyleBackColor = true;
            buttonLoad.Click += buttonLoad_Click;
            // 
            // buttonFilter
            // 
            buttonFilter.Location = new Point(404, 297);
            buttonFilter.Name = "buttonFilter";
            buttonFilter.Size = new Size(121, 29);
            buttonFilter.TabIndex = 11;
            buttonFilter.Text = "фильтр";
            buttonFilter.UseVisualStyleBackColor = true;
            buttonFilter.Click += buttonFilter_Click;
            // 
            // numericUpDownFilter
            // 
            numericUpDownFilter.Location = new Point(237, 299);
            numericUpDownFilter.Name = "numericUpDownFilter";
            numericUpDownFilter.Size = new Size(150, 27);
            numericUpDownFilter.TabIndex = 12;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(29, 301);
            label4.Name = "label4";
            label4.Size = new Size(190, 20);
            label4.TabIndex = 13;
            label4.Text = "Вывести старше возраста:";
            // 
            // numericUpDownRoom
            // 
            numericUpDownRoom.Location = new Point(109, 117);
            numericUpDownRoom.Name = "numericUpDownRoom";
            numericUpDownRoom.Size = new Size(150, 27);
            numericUpDownRoom.TabIndex = 14;
            // 
            // buttonGroup
            // 
            buttonGroup.Location = new Point(29, 375);
            buttonGroup.Name = "buttonGroup";
            buttonGroup.Size = new Size(139, 29);
            buttonGroup.TabIndex = 15;
            buttonGroup.Text = "Группировать";
            buttonGroup.UseVisualStyleBackColor = true;
            buttonGroup.Click += buttonGroup_Click;
            // 
            // labelResult
            // 
            labelResult.AutoSize = true;
            labelResult.Location = new Point(185, 379);
            labelResult.Name = "labelResult";
            labelResult.Size = new Size(75, 20);
            labelResult.TabIndex = 16;
            labelResult.Text = "Результат";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1362, 575);
            Controls.Add(labelResult);
            Controls.Add(buttonGroup);
            Controls.Add(numericUpDownRoom);
            Controls.Add(label4);
            Controls.Add(numericUpDownFilter);
            Controls.Add(buttonFilter);
            Controls.Add(buttonLoad);
            Controls.Add(buttonSave);
            Controls.Add(buttonAdd);
            Controls.Add(listBoxResult);
            Controls.Add(label3);
            Controls.Add(label2);
            Controls.Add(numericUpDownAge);
            Controls.Add(label1);
            Controls.Add(txtFullName);
            Name = "Form1";
            Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)numericUpDownAge).EndInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDownFilter).EndInit();
            ((System.ComponentModel.ISupportInitialize)numericUpDownRoom).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox txtFullName;
        private Label label1;
        private NumericUpDown numericUpDownAge;
        private Label label2;
        private Label label3;
        private ListBox listBoxResult;
        private Button buttonAdd;
        private Button buttonSave;
        private Button buttonLoad;
        private Button buttonFilter;
        private NumericUpDown numericUpDownFilter;
        private Label label4;
        private NumericUpDown numericUpDownRoom;
        private Button buttonGroup;
        private Label labelResult;
    }
}

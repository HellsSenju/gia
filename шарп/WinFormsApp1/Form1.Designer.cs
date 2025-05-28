namespace WinFormsApp1
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
            txtTitle = new TextBox();
            txtDirector = new TextBox();
            txtYear = new TextBox();
            txtGenre = new TextBox();
            btnAdd = new Button();
            listBoxFilms = new ListBox();
            SuspendLayout();
            // 
            // txtTitle
            // 
            txtTitle.Location = new Point(88, 12);
            txtTitle.Name = "txtTitle";
            txtTitle.Size = new Size(125, 27);
            txtTitle.TabIndex = 0;
            // 
            // txtDirector
            // 
            txtDirector.Location = new Point(88, 60);
            txtDirector.Name = "txtDirector";
            txtDirector.Size = new Size(125, 27);
            txtDirector.TabIndex = 1;
            // 
            // txtYear
            // 
            txtYear.Location = new Point(88, 115);
            txtYear.Name = "txtYear";
            txtYear.Size = new Size(125, 27);
            txtYear.TabIndex = 2;
            // 
            // txtGenre
            // 
            txtGenre.Location = new Point(88, 172);
            txtGenre.Name = "txtGenre";
            txtGenre.Size = new Size(125, 27);
            txtGenre.TabIndex = 3;
            // 
            // btnAdd
            // 
            btnAdd.Location = new Point(100, 226);
            btnAdd.Name = "btnAdd";
            btnAdd.Size = new Size(94, 29);
            btnAdd.TabIndex = 4;
            btnAdd.Text = "Add";
            btnAdd.UseVisualStyleBackColor = true;
            btnAdd.Click += btnAdd_Click;
            // 
            // listBoxFilms
            // 
            listBoxFilms.FormattingEnabled = true;
            listBoxFilms.ItemHeight = 20;
            listBoxFilms.Location = new Point(296, 12);
            listBoxFilms.Name = "listBoxFilms";
            listBoxFilms.Size = new Size(417, 224);
            listBoxFilms.TabIndex = 5;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 282);
            Controls.Add(listBoxFilms);
            Controls.Add(btnAdd);
            Controls.Add(txtGenre);
            Controls.Add(txtYear);
            Controls.Add(txtDirector);
            Controls.Add(txtTitle);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox txtTitle;
        private TextBox txtDirector;
        private TextBox txtYear;
        private TextBox txtGenre;
        private Button btnAdd;
        private ListBox listBoxFilms;
    }
}

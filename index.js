const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Folder to store uploaded files

const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// API endpoint to create folders and subfolders
app.post('/create-folder/:folderPath(*)', (req, res) => {
  const folderPath = path.join(__dirname, 'uploads', req.params.folderPath);

  if (fs.existsSync(folderPath)) {
    return res.status(400).json({ message: 'Folder already exists!' });
  }

  fs.mkdirSync(folderPath, { recursive: true });

  return res.status(201).json({ message: 'Folder created successfully!' });
});

// API endpoint to upload files to appropriate folders
app.post('/upload/:folderPath(*)', upload.single('file'), (req, res) => {
  const folderPath = path.join(__dirname, 'uploads', req.params.folderPath);

  if (!fs.existsSync(folderPath)) {
    return res.status(400).json({ message: 'Folder does not exist!' });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'No file was uploaded!' });
  }

  const tempPath = req.file.path;
  const targetPath = path.join(folderPath, req.file.originalname);

  fs.renameSync(tempPath, targetPath);

  return res.status(200).json({ message: 'File uploaded successfully!' });
});

// API endpoint to retrieve files within a folder
app.get('/list-files/:folderPath(*)', (req, res) => {
  const folderPath = path.join(__dirname, 'uploads', req.params.folderPath);

  if (!fs.existsSync(folderPath)) {
    return res.status(400).json({ message: 'Folder does not exist!' });
  }

  const files = fs.readdirSync(folderPath);

  return res.status(200).json(files);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

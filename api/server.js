const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

// Function to read and parse CSV file
function parseCSV(data) {
  const lines = data.trim().split('\n');
  const headers = lines[0].split(',');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let j = 0; j < headers.length; j++) {
      let value = currentline[j];
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      obj[headers[j]] = value;
    }
    result.push(obj);
  }
  return result;
}

let introData = null;

app.get('/api/intro', (req, res) => {
  // Read CSV file and parse on server start
  const csvFilePath = path.join(__dirname, 'intro.csv');
  try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const parsedData = parseCSV(csvData);
    if (parsedData.length > 0) {
      introData = parsedData[0];
    }
  } catch (err) {
    console.error('Error reading CSV file:', err);
  }
  if (introData) {
    res.status(200).json(introData);
  } else {
    res.status(500).json({ error: 'Portfolio data not available' });
  }
});

let aboutData = null;

app.get('/api/about', (req, res) => {
  const csvFilePath = path.join(__dirname, 'about.csv');
  try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const parsedData = parseCSV(csvData);
    if (parsedData.length > 0) {
      aboutData = parsedData[0];
    }
  } catch (err) {
    console.error('Error reading CSV file:', err);
  }
  if (aboutData) {
    res.status(200).json(aboutData);
  } else {
    res.status(500).json({ error: 'Portfolio data not available' });
  }
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});

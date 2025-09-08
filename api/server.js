const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

// Function to read and parse CSV file properly - handles all carriage returns
function parseCSV(data) {
  // Handle Windows line endings (CRLF) by splitting on \r\n or \n
  const lines = data.trim().split(/\r?\n/);
  if (lines.length === 0) return [];
  // Clean headers - remove quotes, trim whitespace, and clean field names
  const headers = lines[0].split(',').map(header =>
    header.trim().replace(/^"|"$/g, '').replace(/\r$/, '').trim()
  );
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    const obj = {};
    headers.forEach((header, index) => {
      let value = values[index] || '';
      // Remove surrounding quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      // Handle escaped quotes
      value = value.replace(/""/g, '"');
      // Clean up ALL carriage returns and extra spaces
      value = value.replace(/\r/g, '').trim();
      obj[header] = value;
    });

    result.push(obj);
  }
  return result;
}

app.get('/api/intro', (req, res) => {
  // Read CSV file and parse on server start
  const csvFilePath = path.join(__dirname, 'intro.csv');
  try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const parsedData = parseCSV(csvData);
    if (parsedData.length > 0) {
      res.status(200).json(parsedData[0]);
    } else {
      res.status(500).json({ error: 'Portfolio data not available' });
    }
  } catch (err) {
    console.error('Error reading CSV file:', err);
  }
});

app.get('/api/academics', (req, res) => {
  const csvFilePath = path.join(__dirname, 'academics.csv');
  try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const parsedData = parseCSV(csvData);
    if (parsedData.length > 0) {
      res.status(200).json(parsedData);
    } else {
      res.status(500).json({ error: 'Portfolio data not available' });
    }
  } catch (err) {
    console.error('Error reading CSV file:', err);
  }
})

app.get('/api/experience', (req, res) => {
  const csvFilePath = path.join(__dirname, 'experience.csv');
  try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const parsedData = parseCSV(csvData);
    if (parsedData.length > 0) {
      res.status(200).json(parsedData);
    } else {
      res.status(500).json({ error: 'Portfolio data not available' });
    }
  } catch (err) {
    console.error('Error reading CSV file:', err);
  }
});

app.get('/api/about', (req, res) => {
  const csvFilePath = path.join(__dirname, 'about.csv');
  try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const parsedData = parseCSV(csvData);
    if (parsedData.length > 0) {
      res.status(200).json(parsedData[0]);
    } else {
      res.status(500).json({ error: 'Portfolio data not available' });
    }
  } catch (err) {
    console.error('Error reading CSV file:', err);
  }
});

app.get('/api/skills', (req, res) => {
  const csvFilePath = path.join(__dirname, 'skills.csv');
  try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const parsedData = parseCSV(csvData);
    if (parsedData.length > 0) {
      res.status(200).json(parsedData);
    } else {
      res.status(404).json({ error: 'No skills data found' });
    }
  } catch (err) {
    console.error('Error reading CSV file:', err);
    res.status(500).json({ error: 'Portfolio data not available' });
  }
});

app.get('/api/projects', (req, res) => {
  const csvFilePath = path.join(__dirname, 'projects.csv');
  try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const parsedData = parseCSV(csvData);
    if (parsedData.length > 0) {
      console.log(parsedData);
      res.status(200).json(parsedData);
    } else {
      res.status(404).json({ error: 'No projects data found' });
    }
  } catch (err) {
    console.error('Error reading CSV file:', err);
    res.status(500).json({ error: 'Portfolio data not available' });
  }
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});

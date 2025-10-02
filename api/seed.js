require('dotenv').config({ path: './api/.env' });
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Generic schema for all collections
const genericSchema = new mongoose.Schema({}, { strict: false });

const collections = [
  'intro',
  'about',
  'academics',
  'experience',
  'skills',
  'projects',
];

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim().replace(/^"|"$/g, ''));
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim().replace(/^"|"$/g, ''));
  return result;
}

async function seedCollection(collectionName) {
  const Model = mongoose.model(collectionName.charAt(0).toUpperCase() + collectionName.slice(1), genericSchema, collectionName);
  const csvFile = path.join(__dirname, `${collectionName}.csv`);
  if (!fs.existsSync(csvFile)) {
    console.log(`File not found: ${csvFile}`);
    return;
  }
  // CSV to JSON conversion with proper quote handling
  const csvData = fs.readFileSync(csvFile, 'utf8');
  const lines = csvData.trim().split(/\r?\n/);
  const headers = parseCSVLine(lines[0]);
  const docs = lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = values[i] || '';
    });
    return obj;
  });
  if (docs.length === 0) {
    console.log(`No data for ${collectionName}`);
    return;
  }
  await Model.deleteMany({});
  await Model.insertMany(docs);
  console.log(`Seeded ${collectionName} with ${docs.length} documents.`);
}

async function main() {
  for (const collection of collections) {
    await seedCollection(collection);
  }
  mongoose.disconnect();
}

main().catch(err => {
  console.error(err);
  mongoose.disconnect();
});

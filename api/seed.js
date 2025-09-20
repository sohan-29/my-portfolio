const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio_db');

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

async function seedCollection(collectionName) {
  const Model = mongoose.model(collectionName.charAt(0).toUpperCase() + collectionName.slice(1), genericSchema, collectionName);
  const csvFile = path.join(__dirname, `${collectionName}.csv`);
  if (!fs.existsSync(csvFile)) {
    console.log(`File not found: ${csvFile}`);
    return;
  }
  // Simple CSV to JSON conversion (assumes no commas in fields)
  const csvData = fs.readFileSync(csvFile, 'utf8');
  const lines = csvData.trim().split(/\r?\n/);
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const docs = lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
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

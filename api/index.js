const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Sample portfolio data
let portfolioData = {
  name: "Sohan",
  title: "@sohan",
  projects: [
    {
      id: 1,
      name: "Project One",
      description: "Description of project one",
      link: "https://github.com/yourusername/project-one"
    },
    {
      id: 2,
      name: "Project Two",
      description: "Description of project two",
      link: "https://github.com/yourusername/project-two"
    }
  ]
};

// Get portfolio data
app.get('/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});

// server/index.js (Express.js Backend)
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test Routes
const sqlInjectionTest = require('./routes/sqlInjection');
const xssTest = require('./routes/xss');
const csrfTest = require('./routes/csrf');
const sslScan = require('./routes/sslScan');
const fullScan = require('./routes/fullScan');

app.use('/api/sql-injection', sqlInjectionTest);
app.use('/api/xss', xssTest);
app.use('/api/csrf', csrfTest);
app.use('/api/ssl-scan', sslScan);
app.use('/api/full-scan', fullScan);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

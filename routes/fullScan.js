const express = require('express');
const router = express.Router();
const { testSQLInjection, testXSS, testCSRF, testSSL } = require('../utils/scanner');

router.post('/', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: 'URL is required' });

    try {
        const sqlInjectionResult = await testSQLInjection(url);
        const xssResult = await testXSS(url);
        const csrfResult = await testCSRF(url);
        const sslResult = await testSSL(url);

        res.json({
            sqlInjection: sqlInjectionResult,
            xss: xssResult,
            csrf: csrfResult,
            sslScan: sslResult
        });
    } catch (error) {
        res.status(500).json({ message: 'Error during full scan', error: error.message });
    }
});

module.exports = router;
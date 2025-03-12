const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: 'URL is required' });
    res.json({ message: `XSS test on ${url} executed` });
});

module.exports = router;
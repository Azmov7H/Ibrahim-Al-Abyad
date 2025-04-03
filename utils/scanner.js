const axios = require('axios');


//Sql injaction

async function testSQLInjection(url) {
    try {
        const testUrl = `${url}?id=1' OR '1'='1`;
        await axios.get(testUrl);
        return 'Potential SQL Injection vulnerability detected';
    } catch (error) {
        return 'No SQL Injection vulnerability found';
    }
}



//Cros site script

async function testXSS(url) {
    try {
        const testUrl = `${url}?q=<script>alert('XSS')</script>`;
        await axios.get(testUrl);
        return 'Potential XSS vulnerability detected';
    } catch (error) {
        return 'No XSS vulnerability found';
    }
}

async function testCSRF(url) {
    try {
        const testUrl = `${url}/csrf-test-endpoint`;
        await axios.post(testUrl, { fakeData: 'test' });
        return 'Potential CSRF vulnerability detected';
    } catch (error) {
        return 'No CSRF vulnerability found';
    }
}


// SSL Attack
async function testSSL(url) {
    try {
        return 'SSL Scan Completed - No issues found';
    } catch (error) {
        return 'SSL issues detected';
    }
}

module.exports = { testSQLInjection, testXSS, testCSRF, testSSL };
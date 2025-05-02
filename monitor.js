const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    url: 'https://thelifeofni.com',
    checkInterval: 5 * 60 * 1000, // 5 minutes
    logFile: path.join(__dirname, 'monitoring.log')
};

// Function to check website health
async function checkWebsiteHealth() {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        
        https.get(config.url, (res) => {
            const endTime = Date.now();
            const responseTime = endTime - startTime;
            
            const healthData = {
                timestamp: new Date().toISOString(),
                statusCode: res.statusCode,
                responseTime: responseTime,
                headers: res.headers,
                isHealthy: res.statusCode === 200
            };
            
            resolve(healthData);
        }).on('error', (error) => {
            reject({
                timestamp: new Date().toISOString(),
                error: error.message,
                isHealthy: false
            });
        });
    });
}

// Function to log monitoring data
function logMonitoringData(data) {
    const logEntry = JSON.stringify(data) + '\n';
    fs.appendFile(config.logFile, logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}

// Main monitoring loop
async function startMonitoring() {
    console.log('Starting website monitoring...');
    
    while (true) {
        try {
            const healthData = await checkWebsiteHealth();
            logMonitoringData(healthData);
            
            if (!healthData.isHealthy) {
                console.error(`Website health check failed at ${healthData.timestamp}`);
                console.error(`Status Code: ${healthData.statusCode}`);
                console.error(`Response Time: ${healthData.responseTime}ms`);
            } else {
                console.log(`Health check passed at ${healthData.timestamp}`);
                console.log(`Response Time: ${healthData.responseTime}ms`);
            }
        } catch (error) {
            console.error('Monitoring error:', error);
            logMonitoringData(error);
        }
        
        await new Promise(resolve => setTimeout(resolve, config.checkInterval));
    }
}

// Start monitoring
startMonitoring().catch(console.error); 
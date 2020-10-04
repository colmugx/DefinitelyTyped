import * as OBS from 'esdk-obs-nodejs';

//
const obs = new OBS({
    access_key_id: '*** Provide your Access Key ***',
    secret_access_key: '*** Provide your Secret Key ***',
    server: 'https://your-endpoint',
});

// Initializing Logs
obs.initLog({
    name: 'client1',
    file_full_path: './logs/OBS-SDK.log',
    max_log_size: 20480,
    backups: 10,
    level: 'info',
    log_to_console: false,
});

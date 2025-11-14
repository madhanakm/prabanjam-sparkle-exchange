# Server Deployment Instructions

## Problem Solution
The backend disconnects after few days due to:
- Database connection timeouts
- Memory leaks
- Process crashes
- No auto-restart mechanism

## Solution Implemented
1. **Database Reconnection Logic** - Auto-reconnects on connection loss
2. **PM2 Process Manager** - Auto-restarts on crashes
3. **Health Check Endpoint** - Monitor server status
4. **Memory Management** - Restart on high memory usage
5. **Graceful Shutdown** - Proper cleanup on restart

## Deployment Steps

### 1. Install PM2 on Server
```bash
npm install -g pm2
```

### 2. Deploy Backend
```bash
# Upload backend folder to server
# Install dependencies
npm install

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save
pm2 startup
```

### 3. Monitor Backend
```bash
# Check status
pm2 status

# View logs
pm2 logs prabanjam-backend

# Restart if needed
pm2 restart prabanjam-backend
```

### 4. Health Check
- URL: `https://backend.prabanjamjewellery.com/health`
- Should return: `{"status":"OK","timestamp":"...","uptime":...}`

## Auto-Restart Features
- **Memory Limit**: Restarts if memory > 1GB
- **Crash Recovery**: Auto-restarts on crashes
- **Database Reconnection**: Handles connection drops
- **Max Restarts**: 10 attempts with 4s delay

## Monitoring
- Logs stored in `/backend/logs/`
- PM2 dashboard: `pm2 monit`
- Health endpoint for external monitoring
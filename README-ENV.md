# Single Point Environment Configuration

## Quick Switch Commands

### Switch to Development:
```bash
node switch-env.js development
```

### Switch to Production:
```bash
node switch-env.js production
npm run build
cd admin-panel && npm run build
```

## Manual Switch (Edit ONE line):

Edit `/env-config.js`:
```javascript
const ENVIRONMENT = 'production'; // Change to 'development' or 'production'
```

## What Changes Automatically:
- ✅ Frontend API URLs
- ✅ Admin Panel API URLs  
- ✅ Backend Database Config
- ✅ Backend API Endpoints
- ✅ Image Upload URLs
- ✅ Gallery Image URLs

## Current Environments:

### Development:
- API: `http://localhost:5001/api`
- Database: `root` / `prabanjam_db`

### Production:
- API: `https://backend.prabanjamjewellery.com/api`
- Database: `prabanjam_api_db` / `prabanjam_api_db`

**Just run the switch command and build!** 🚀
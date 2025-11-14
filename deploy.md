# Single Point URL Configuration

## Quick Environment Switch

To switch between development and production, edit **ONE FILE ONLY**:

### `/config.js`
```javascript
// Change this line to switch environments:
ENVIRONMENT: 'production', // 'development' or 'production'
```

## For Development:
```javascript
ENVIRONMENT: 'development',
```

## For Production:
```javascript
ENVIRONMENT: 'production',
```

## Then Build:
```bash
# Frontend
npm run build

# Admin Panel
cd admin-panel && npm run build
```

**That's it!** All URLs will automatically switch across:
- Frontend API calls
- Admin panel API calls  
- Backend database connections
- Backend API endpoints
- Image upload URLs
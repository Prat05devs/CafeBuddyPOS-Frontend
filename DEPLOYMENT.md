# 🚀 Frontend Deployment Guide

## Quick Steps to Connect Frontend to Deployed Backend

### 1. **After Backend is Deployed**
Once your backend is deployed to Vercel, you'll get a URL like:
```
https://your-backend-domain.vercel.app
```

### 2. **Update Frontend Environment**
Update your `.env` file in the frontend project:

```env
# Replace with your actual deployed backend URL
VITE_API_URL=https://your-backend-domain.vercel.app/api/v1
```

### 3. **Deploy Frontend to Vercel**

#### Option A: Via Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your frontend repository
4. Set environment variable:
   - Key: `VITE_API_URL`
   - Value: `https://your-backend-domain.vercel.app/api/v1`
5. Deploy!

#### Option B: Via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### 4. **Update Backend CORS**
After frontend is deployed, update your backend's CORS_ORIGIN:
1. Go to your backend Vercel project settings
2. Update environment variable:
   - Key: `CORS_ORIGIN`
   - Value: `https://your-frontend-domain.vercel.app`
3. Redeploy backend

### 5. **Test Integration**
Visit your deployed frontend and verify:
- ✅ Health check works
- ✅ Menu items load
- ✅ API calls succeed
- ✅ No CORS errors in console

## Environment Variables for Frontend

```env
VITE_API_URL=https://your-backend-domain.vercel.app/api/v1
```

## Troubleshooting

### CORS Errors
- Ensure backend CORS_ORIGIN matches your frontend domain
- Redeploy backend after changing CORS settings

### API Not Found (404)
- Check that VITE_API_URL is correctly set
- Verify backend is deployed and accessible
- Test backend health: `curl https://your-backend-domain.vercel.app/api/v1/health`

### Environment Variables Not Working
- Ensure `.env` file is in the frontend root directory
- Restart dev server after changing .env
- Check Vercel project settings for production env vars

## Development vs Production

### Development (Local)
```env
VITE_API_URL=http://localhost:3001/api/v1
```

### Production (Deployed)
```env
VITE_API_URL=https://your-backend-domain.vercel.app/api/v1
```

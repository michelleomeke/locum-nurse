# Render Deployment Configuration

## Fixing 404 Errors on Direct Route Access

If you're experiencing 404 errors when directly accessing routes like `/privacy`, `/terms`, or `/account-delete`, follow these steps:

### Option 1: Configure Redirects in Render Dashboard (Recommended for Static Sites)

1. Go to your Render dashboard
2. Select your static site service
3. Go to **Settings** → **Redirects/Rewrites**
4. Add a new redirect rule:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Status Code**: `200`

This will ensure all routes are served by `index.html`, allowing React Router to handle client-side routing.

### Option 2: Use render.yaml (If using Web Service)

If you're using a web service instead of a static site, the `render.yaml` file is already configured with the correct rewrite rules. Make sure your service is set up to use this configuration file.

### Option 3: Verify _redirects File

The `_redirects` file in the `public` folder should be automatically copied to `dist` during build. Verify it exists in your build output with:
```bash
npm run build
ls dist/_redirects
```

The file should contain:
```
/*    /index.html   200
```

### After Making Changes

1. Commit and push your changes
2. Render will automatically rebuild and redeploy
3. Test direct access to routes like `/privacy` or `/terms`

# Smart SMS Frontend

This frontend powers the Smart SMS school management system. It is built with Next.js and organized for scalable product development.

## Structure

- app/ for routes and layouts
- components/ for reusable UI
- layouts/ for shared page wrappers
- services/ for API integrations
- hooks/ for custom React hooks
- utils/ for helper functions
- styles/ for shared styling patterns
- config/ for environment and app-level configuration

## Development

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Production Ready Notes

- Keep route logic in app/
- Keep business logic out of components where possible
- Use services/ for API calls and data fetching
- Add environment variables in config/ or .env.local


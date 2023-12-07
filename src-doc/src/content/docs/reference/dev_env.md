---
title: Development Environment 
description: How to get set up and writing code.
---

## System Prerequisites
1. [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. [Node.js LTS](https://nodejs.org/en/) (or use [nvm](https://github.com/nvm-sh/nvm))

## `.env` Files
* `/src-web-app/.env`
```
PUBLIC_SUPABASE_URL=...
PUBLIC_SUPABASE_ANON_KEY=...

PUBLIC_DEV_SUPABASE_URL=...
PUBLIC_DEV_SUPABASE_ANON_KEY=...
```
* `/src-mobile-app/.env` (identical)
```
PUBLIC_SUPABASE_URL=...
PUBLIC_SUPABASE_ANON_KEY=...

PUBLIC_DEV_SUPABASE_URL=...
PUBLIC_DEV_SUPABASE_ANON_KEY=...
```

## Local Dev
When running the projects in development, they will look for a local instance of Supabase. Ensure
the local Docker verison of Supabase is running. All commands are run from the root repo folder, `/`.

A testing account exists with the email `amy@testuser.com` and password `damfit`.

### Start Local Supabase
`npx supabase start`

### Stop Local Supabase
`npx supabase stop`

### Wipe and seed a fresh database
`npx supabase db reset`

### View the overall status
`npx supabase status`

## Notable libraries
* Tailwind (used for both the mobile / web applications)
* SvelteKit is the framework for the web application
* React Native is the framework for the mobile application
* All projects use TypeScript where possible

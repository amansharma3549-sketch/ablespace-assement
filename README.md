# Full Stack Developer Assessment – Task Management System

A starter implementation based on the supplied assessment screenshots.

## Stack
- Frontend: Next.js (App Router), TypeScript, Tailwind CSS
- Backend: NestJS, TypeScript, TypeORM + SQLite
- Theme persistence with `localStorage`
- Guest login
- Responsive task-management dashboard

## Run locally

### Backend
```bash
cd backend
npm install
npm run start:dev
```
API runs on `http://localhost:4000`.

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:3000`.

## Demo
Click **Continue as Guest** on the login screen. Tasks are stored through the NestJS API.

## Notes
This implementation is based on the screenshots supplied in the assessment. Exact Figma spacing/assets should be adjusted after comparing against the provided Figma file.

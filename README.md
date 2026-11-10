# Nusrat Jahan Trisha — Portfolio

A Next.js portfolio built with JavaScript, Tailwind CSS, custom editorial styling, Lucide icons, and MongoDB contact form.

## Setup

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Add your MongoDB connection string to `MONGODB_URI`.
6. Run `npm run dev`.
7. Open http://localhost:3000.

## Profile photo

The supplied profile photo is stored at `public/images/profile.jpg`.

## Update education and social links

Edit `app/page.jsx`. Search for `Education`, `LinkedIn`, and the `entries` array to update the placeholder details and social profile.

## MongoDB

The contact form stores messages in the `portfolio_messages` collection inside the database named by `MONGODB_DB` (defaults to `portfolio_db`).

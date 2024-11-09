Creating a full admin dashboard for a social media platform with all the features you've outlined requires a comprehensive setup and code structure, along with the necessary API integrations. I’ll guide you through a skeleton codebase and provide insights into building each section so you can get started with the main components.

Project Structure
Pages (pages)

/dashboard: The main dashboard page.
/users: User management page.
/moderation: Content moderation page.
/analytics: Analytics and insights page.
Components (components)

UserTable: Table for displaying user info and activity.
ModerationTable: Table for content moderation (views, comments, etc.).
AnalyticsChart: Chart component for data visualization.
Sidebar, Navbar: Layout and navigation components.
Services (services)

api.js: Functions for handling API calls.
Styles

Use Tailwind CSS or Styled Components for consistent styling.
1. api.js - API Service
This file will handle all API requests, keeping our code modular and reusable.
Setup
Install Next.js and other dependencies:
2. Main Dashboard Page
This will be your entry point with links to different sections (User Management, Content Moderation, Analytics).
Configure Tailwind CSS by following the official installation guide.
3. User Management Page
A table displaying user details, activity, and referrals.
4. Content Moderation Page
Displays daily views, shares, comments, etc., in a table format.
5. Analytics Page with Charts
This page will use Chart.js or Recharts to show metrics like views, shares, and likes.
6. Sidebar and Navbar Components
These provide the main layout for navigation across sections.


Create an .env.local file to store your API base URL:
SWR or React Query can be used for API data fetching and caching.
Deployment
Frontend (Vercel):
Push your code to GitHub and connect your repository to Vercel for easy deployment.
Backend (Render or Heroku):
If there's a backend to handle user actions, deploy it to Render or Heroku and link it to your frontend through environment variables.
Documentation (README.md)
Create a README.md with:

Project Overview: Describe the features.
Setup Instructions: Guide for running locally.
API Structure: Explain endpoints and how they’re used.
Features: Highlight core features like user management, content moderation, and analytics.
Deployment: Link to live site and backend, if applicable.

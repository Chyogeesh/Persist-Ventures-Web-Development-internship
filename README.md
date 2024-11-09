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
Setup
Install Next.js and other dependencies:
Configure Tailwind CSS by following the official installation guide.

Create an .env.local file to store your API base URL:
SWR or React Query can be used for API data fetching and caching.

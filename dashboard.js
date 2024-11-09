// pages/dashboard.js
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/users"><a className="dashboard-card">User Management</a></Link>
          <Link href="/moderation"><a className="dashboard-card">Content Moderation</a></Link>
          <Link href="/analytics"><a className="dashboard-card">Analytics</a></Link>
        </div>
      </main>
    </div>
  );
}

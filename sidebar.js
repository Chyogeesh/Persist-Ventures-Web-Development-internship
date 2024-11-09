// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="w-64 h-full bg-gray-800 text-white p-4">
      <Link href="/dashboard"><a>Dashboard</a></Link>
      <Link href="/users"><a>Users</a></Link>
      <Link href="/moderation"><a>Content Moderation</a></Link>
      <Link href="/analytics"><a>Analytics</a></Link>
    </nav>
  );
}

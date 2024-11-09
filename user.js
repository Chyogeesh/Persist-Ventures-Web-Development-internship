// pages/users.js
import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }
    loadUsers();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left py-2 px-4">ID</th>
              <th className="text-left py-2 px-4">Username</th>
              <th className="text-left py-2 px-4">Activity</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

// pages/analytics.js
import { useEffect, useState } from 'react';
import { fetchAnalytics } from '../services/api';
import { Line } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Analytics() {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    async function loadAnalytics() {
      const analytics = await fetchAnalytics();
      setData({
        labels: analytics.dates,
        datasets: [
          {
            label: 'Views',
            data: analytics.views,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      });
    }
    loadAnalytics();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>
        <div className="w-full h-64">
          <Line data={data} />
        </div>
      </main>
    </div>
  );
}

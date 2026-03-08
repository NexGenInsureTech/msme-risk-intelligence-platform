"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/assessments")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <main className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Broker Dashboard</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Business</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Industry</th>
            <th className="p-2 border">Employees</th>
            <th className="p-2 border">Risk Score</th>
            <th className="p-2 border">Risk Level</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row: any) => (
            <tr key={row.id}>
              <td className="border p-2">{row.business_name}</td>
              <td className="border p-2">{row.city}</td>
              <td className="border p-2">{row.industry}</td>
              <td className="border p-2">{row.employees}</td>
              <td className="border p-2">{row.score}</td>
              <td className="border p-2">{row.risk_level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

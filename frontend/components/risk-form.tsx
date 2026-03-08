"use client";

import { useState } from "react";

export default function RiskForm({ onResult }: any) {
  const [form, setForm] = useState({
    industry: "",
    employees: 0,
    machinery_dependence: 0,
    supplier_dependency: 0,
    recovery_time_days: 0,
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/analyze-risk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    onResult(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="industry"
        placeholder="Industry"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="employees"
        type="number"
        placeholder="Number of Employees"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="machinery_dependence"
        type="number"
        placeholder="Machinery Dependence (1-10)"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="supplier_dependency"
        type="number"
        placeholder="Supplier Dependency (1-10)"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="recovery_time_days"
        type="number"
        placeholder="Recovery Time (days)"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Analyze Risk
      </button>
    </form>
  );
}

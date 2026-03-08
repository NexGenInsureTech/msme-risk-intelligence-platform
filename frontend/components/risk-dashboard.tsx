"use client";

import {
  Chart as ChartJS,
  BarElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

export default function RiskDashboard({ result }: any) {
  if (!result) return null;

  const chartData = {
    labels: ["Operational", "Financial", "Liability", "Continuity"],
    datasets: [
      {
        label: "Risk Score",
        data: [
          result.operational_risk,
          result.financial_risk,
          result.liability_risk,
          result.continuity_risk,
        ],
        backgroundColor: ["#ef4444", "#f59e0b", "#3b82f6", "#10b981"],
      },
    ],
  };

  const radarData = {
    labels: ["Operational", "Financial", "Liability", "Continuity"],
    datasets: [
      {
        label: "Risk Profile",
        data: [
          result.operational_risk,
          result.financial_risk,
          result.liability_risk,
          result.continuity_risk,
        ],
        backgroundColor: "rgba(239,68,68,0.2)",
        borderColor: "#ef4444",
      },
    ],
  };

  return (
    <div className="mt-6 p-6 border rounded-lg bg-white shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Risk Intelligence Report
      </h2>

      <p className="text-lg font-semibold">
        Overall Score: {result.overall_score}
      </p>

      <p className="text-lg font-semibold mb-4">
        Risk Level: {result.risk_level}
      </p>

      <Bar data={chartData} />

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Risk Profile Radar</h3>

        <Radar data={radarData} />
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">
          Recommended Insurance Protection
        </h3>

        <ul className="list-disc pl-6">
          {result.recommendations?.map((r: any, i: number) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// export default function RiskDashboard({ result }: any) {
//   if (!result) return null;

//   return (
//     <div className="mt-6 p-6 border rounded-lg bg-white shadow">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">
//         Risk Intelligence Report
//       </h2>

//       <div className="space-y-2 text-gray-700">
//         <p>
//           <strong>Operational Risk:</strong> {result.operational_risk}
//         </p>

//         <p>
//           <strong>Financial Risk:</strong> {result.financial_risk}
//         </p>

//         <p>
//           <strong>Liability Risk:</strong> {result.liability_risk}
//         </p>

//         <p>
//           <strong>Continuity Risk:</strong> {result.continuity_risk}
//         </p>
//       </div>

//       <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
//         <p className="text-xl font-bold text-blue-800">
//           Overall Risk Score: {result.overall_score}
//         </p>
//         <p className="text-lg font-semibold mt-2 text-red-600">
//           Risk Level: {result.risk_level}
//         </p>
//       </div>
//     </div>
//   );
// }

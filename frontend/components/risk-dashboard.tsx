export default function RiskDashboard({ result }: any) {
  if (!result) return null;

  return (
    <div className="mt-6 p-6 border rounded-lg bg-white shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Risk Intelligence Report
      </h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Operational Risk:</strong> {result.operational_risk}
        </p>

        <p>
          <strong>Financial Risk:</strong> {result.financial_risk}
        </p>

        <p>
          <strong>Liability Risk:</strong> {result.liability_risk}
        </p>

        <p>
          <strong>Continuity Risk:</strong> {result.continuity_risk}
        </p>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
        <p className="text-xl font-bold text-blue-800">
          Overall Risk Score: {result.overall_score}
        </p>
        <p className="text-lg font-semibold mt-2 text-red-600">
          Risk Level: {result.risk_level}
        </p>
      </div>
    </div>
  );
}

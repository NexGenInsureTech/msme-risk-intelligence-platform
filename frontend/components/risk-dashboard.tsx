export default function RiskDashboard({ result }: any) {
  if (!result) return null;

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Risk Intelligence Report</h2>

      <p>Operational Risk: {result.operational_risk}</p>
      <p>Financial Risk: {result.financial_risk}</p>
      <p>Liability Risk: {result.liability_risk}</p>
      <p>Continuity Risk: {result.continuity_risk}</p>

      <p className="mt-4 font-bold text-lg">
        Overall Score: {result.overall_score}
      </p>
    </div>
  );
}

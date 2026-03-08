def get_recommendations(data, risk_result):

    recommendations = set()

    industry = data["industry"]

    # Industry-based recommendations
    if industry.lower() == "manufacturing":
        recommendations.add("Fire Insurance")
        recommendations.add("Machinery Breakdown")

    if industry.lower() == "retail":
        recommendations.add("Fire Insurance")
        recommendations.add("Public Liability")

    if industry.lower() == "technology":
        recommendations.add("Cyber Insurance")
        recommendations.add("Professional Liability")

    # Risk-based recommendations

    if risk_result["operational_risk"] > 60:
        recommendations.add("Machinery Breakdown")

    if risk_result["continuity_risk"] > 60:
        recommendations.add("Business Interruption")

    if risk_result["liability_risk"] > 50:
        recommendations.add("Public Liability")

    return list(recommendations)
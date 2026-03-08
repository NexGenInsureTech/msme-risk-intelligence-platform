def calculate_risk_score(data):

    operational_risk = data["machinery_dependence"] * 5
    financial_risk = data["supplier_dependency"] * 5
    liability_risk = data["employees"] * 1.5
    continuity_risk = data["recovery_time_days"] * 2

    overall_score = (
        operational_risk * 0.30
        + financial_risk * 0.25
        + liability_risk * 0.25
        + continuity_risk * 0.20
    )

    return {
        "operational_risk": round(operational_risk, 2),
        "financial_risk": round(financial_risk, 2),
        "liability_risk": round(liability_risk, 2),
        "continuity_risk": round(continuity_risk, 2),
        "overall_score": round(overall_score, 2)
    }
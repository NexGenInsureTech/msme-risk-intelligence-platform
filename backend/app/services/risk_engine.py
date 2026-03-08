def calculate_risk_score(data):

    operational_risk = data["machinery_dependence"] * 0.3
    financial_risk = data["supplier_dependency"] * 0.25
    liability_risk = data["employees"] * 0.1
    continuity_risk = data["recovery_time_days"] * 0.2

    total_score = operational_risk + financial_risk + liability_risk + continuity_risk

    return round(total_score, 2)
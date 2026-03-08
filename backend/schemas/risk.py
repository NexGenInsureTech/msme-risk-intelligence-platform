from pydantic import BaseModel


class RiskScore(BaseModel):
    operational_risk: float
    financial_risk: float
    liability_risk: float
    continuity_risk: float
    overall_score: float
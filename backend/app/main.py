from fastapi import FastAPI
from pydantic import BaseModel
from services.risk_engine import calculate_risk_score

app = FastAPI(title="MSME Risk Intelligence API")

class MSMEInput(BaseModel):
    industry: str
    employees: int
    machinery_dependence: int
    supplier_dependency: int
    recovery_time_days: int


@app.get("/")
def root():
    return {"message": "MSME Risk Intelligence Platform API running"}


@app.post("/analyze-risk")
def analyze_risk(data: MSMEInput):
    score = calculate_risk_score(data.dict())
    return {
        "risk_score": score
    }
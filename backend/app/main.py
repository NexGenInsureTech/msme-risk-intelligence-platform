from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.risk_engine import calculate_risk_score

app = FastAPI(title="MSME Risk Intelligence API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
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
    result = calculate_risk_score(data.dict())
    return result
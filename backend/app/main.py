from database import SessionLocal
from models.msme_record import MSMERecord
from database import engine, Base
from models.msme_record import MSMERecord
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.risk_engine import calculate_risk_score

app = FastAPI(title="MSME Risk Intelligence API")

Base.metadata.create_all(bind=engine)

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


# API to Fetch Assessments
@app.get("/")
def root():
    return {"message": "MSME Risk Intelligence Platform API running"}

# endpoint to analyze risk based on MSME input data
@app.post("/analyze-risk")
def analyze_risk(data: MSMEInput):

    result = calculate_risk_score(data.dict())

    db = SessionLocal()

    record = MSMERecord(
        industry=data.industry,
        employees=data.employees,
        machinery_dependence=data.machinery_dependence,
        supplier_dependency=data.supplier_dependency,
        recovery_time_days=data.recovery_time_days,
        operational_risk=result["operational_risk"],
        financial_risk=result["financial_risk"],
        liability_risk=result["liability_risk"],
        continuity_risk=result["continuity_risk"],
        overall_score=result["overall_score"],
        risk_level=result["risk_level"]
    )

    db.add(record)
    db.commit()
    db.close()

    return result

@app.get("/assessments")
def get_assessments():

    db = SessionLocal()

    records = db.query(MSMERecord).all()

    result = []

    for r in records:
        result.append({
            "id": r.id,
            "industry": r.industry,
            "employees": r.employees,
            "score": r.overall_score,
            "risk_level": r.risk_level
        })

    db.close()

    return result
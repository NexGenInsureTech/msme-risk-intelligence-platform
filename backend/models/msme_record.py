from sqlalchemy import Column, Integer, String, Float
from database import Base


class MSMERecord(Base):

    __tablename__ = "msme_assessments"

    id = Column(Integer, primary_key=True, index=True)

    industry = Column(String)
    employees = Column(Integer)

    machinery_dependence = Column(Integer)
    supplier_dependency = Column(Integer)
    recovery_time_days = Column(Integer)

    operational_risk = Column(Float)
    financial_risk = Column(Float)
    liability_risk = Column(Float)
    continuity_risk = Column(Float)

    overall_score = Column(Float)
    risk_level = Column(String)
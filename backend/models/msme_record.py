from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from database import Base


class MSMERecord(Base):

    __tablename__ = "msme_assessments"

    id = Column(Integer, primary_key=True, index=True)

    business_name = Column(String)
    city = Column(String)
    industry = Column(String)

    employees = Column(Integer)
    turnover_band = Column(String)

    machinery_dependence = Column(Integer)
    supplier_dependency = Column(Integer)
    recovery_time_days = Column(Integer)

    operational_risk = Column(Float)
    financial_risk = Column(Float)
    liability_risk = Column(Float)
    continuity_risk = Column(Float)

    overall_score = Column(Float)
    risk_level = Column(String)

    created_at = Column(DateTime, default=datetime.utcnow)




# from sqlalchemy import Column, Integer, String, Float
# from database import Base


# class MSMERecord(Base):

#     __tablename__ = "msme_assessments"

#     id = Column(Integer, primary_key=True, index=True)

#     industry = Column(String)
#     employees = Column(Integer)

#     machinery_dependence = Column(Integer)
#     supplier_dependency = Column(Integer)
#     recovery_time_days = Column(Integer)

#     operational_risk = Column(Float)
#     financial_risk = Column(Float)
#     liability_risk = Column(Float)
#     continuity_risk = Column(Float)

#     overall_score = Column(Float)
#     risk_level = Column(String)
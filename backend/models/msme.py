from pydantic import BaseModel


class MSME(BaseModel):
    business_name: str
    industry: str
    location: str
    years_of_operation: int
    employees: int
    machinery_dependence: int
    supplier_dependency: int
    recovery_time_days: int
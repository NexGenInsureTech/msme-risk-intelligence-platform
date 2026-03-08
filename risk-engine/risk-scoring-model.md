# MSME Risk Scoring Model

## Purpose

This document defines the scoring methodology used by the MSME Risk Intelligence Platform.

The scoring engine evaluates multiple dimensions of risk exposure and produces a structured risk profile that supports:

• MSME risk awareness  
• insurance recommendation  
• insurer underwriting support

---

# Risk Scoring Structure

The platform calculates risk across four primary dimensions.

1. Operational Risk
2. Financial Risk
3. Liability Risk
4. Business Continuity Risk

Each dimension contributes to the overall MSME Risk Score.

Total Score Range

0 – 100

---

# Risk Dimension Weights

Operational Risk → 30%
Financial Risk → 25%
Liability Risk → 25%
Continuity Risk → 20%

Total → 100%

---

# 1 Operational Risk

Derived from:

• machinery dependence  
• operational hazards  
• asset concentration  
• facility risk exposure

Example factors:

High machinery dependence → higher risk  
Fire-prone industry → higher risk

---

# 2 Financial Risk

Derived from balance sheet indicators.

Inputs:

• revenue dependency  
• debt exposure  
• supplier concentration  
• asset recovery time

Example factors:

Single supplier dependency → higher risk  
Low financial reserves → higher risk

---

# 3 Liability Risk

Derived from business interactions with customers and third parties.

Inputs:

• product manufacturing  
• customer exposure  
• professional services  
• public access to premises

Example factors:

Customer-facing business → higher liability risk

---

# 4 Business Continuity Risk

Derived from disruption sensitivity.

Inputs:

• disaster exposure  
• IT system dependency  
• operational recovery time  
• supply chain complexity

Example factors:

Long recovery time → higher continuity risk

---

# Score Calculation Example

Operational Risk 70
Financial Risk 60
Liability Risk 65
Continuity Risk 75

Weighted Calculation

Operational Risk 70 × 0.30 = 21
Financial Risk 60 × 0.25 = 15
Liability Risk 65 × 0.25 = 16.25
Continuity Risk 75 × 0.20 = 15

Total Risk Score

67.25 / 100

---

# Risk Rating Bands

Score Range Rating

0 – 30 Low Risk  
31 – 60 Moderate Risk  
61 – 80 Elevated Risk  
81 – 100 High Risk

---

# Platform Output

The risk engine produces:

1. Overall MSME Risk Score
2. Risk Dimension Scores
3. Risk Exposure Map
4. Insurance Coverage Recommendations

Example Output

Overall Risk Score

67 / 100

Risk Profile

Operational Risk Elevated  
Financial Risk Moderate  
Liability Risk Moderate  
Continuity Risk Elevated

Recommended Insurance

• Fire & Special Perils
• Machinery Breakdown
• Public Liability
• Business Interruption

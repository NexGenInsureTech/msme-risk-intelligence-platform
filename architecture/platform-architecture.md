# Platform Architecture

## Purpose

This document defines the technical architecture for the MSME Risk Intelligence Platform.

The architecture is designed to support:

- scalable risk intelligence processing
- modular platform development
- future integration with insurers and financial platforms

---

# System Overview

The platform consists of four primary layers.

1. Frontend Interface
2. Backend API Layer
3. Risk Intelligence Engine
4. Data Storage Layer

---

# 1 Frontend Layer

Technology:

React (Next.js)

Purpose:

Provide user interface for brokers and MSME users.

Key interfaces:

- MSME discovery advisor
- risk intelligence dashboard
- broker workspace

---

# 2 Backend API Layer

Technology:

Python FastAPI

Purpose:

Handle platform logic and communication between frontend and backend services.

Responsibilities:

- process user input
- trigger risk engine calculations
- fetch data from database
- return risk intelligence outputs

---

# 3 Risk Intelligence Engine

Technology:

Python modules

Purpose:

Execute the analytical models of the platform.

Components:

Risk taxonomy processor  
Discovery journey processor  
Balance sheet analyzer  
Risk scoring model

Outputs:

- risk scores
- exposure analysis
- insurance recommendations

---

# 4 Data Storage Layer

Technology:

PostgreSQL

Data stored:

- MSME profiles
- discovery journey responses
- risk scoring results
- insurance mappings

---

# Platform Data Flow

User submits business information

↓

Backend API processes request

↓

Risk engine analyzes exposures

↓

Risk scores calculated

↓

Results stored in database

↓

Frontend dashboard displays results

---

# Future Extensions

The architecture allows future capabilities:

- insurer API integration
- automated underwriting
- AI risk prediction
- industry benchmarking

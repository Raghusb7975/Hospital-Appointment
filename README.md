
**Hospital Appointment Management System**

**Project Overview**
This project focuses on testing a Hospital Appointment Management System where users (patients) can register, log in, search for doctors, view doctor details, book appointments, make payments, and access their dashboard.
The system is tested using Playwright automation with Allure reporting to ensure functionality, performance, and reliability.

**SDLC Phases**
Requirement Analysis
Test Planning
Test Design
Development
Testing
Deployment

**Functional Modules**
1. User Registration (register.spec.js)
    User can create a new account with required details
2. Login & Logout (login.spec.js)
    User authentication using email and password
3. Doctor Search (search.spec.js)
    Search doctors by specialization or name
4. Doctor Details (details.spec.js)
    View doctor profile, availability, and details
5. Booking Module (Cart) (cart.spec.js)
    Add doctor/appointment to cart
6. Payment Module (payment.spec.js)
    Complete appointment booking with payment
7. User Dashboard (dashboard.spec.js)
    View appointments, history, and user details
**Non-Functional Requirements**
1. Performance
   Pages should load within 2–3 seconds
2. Usability
  Simple UI with easy navigation
3. Reliability
  System should not crash and must store data correctly
4. Security
  Secure login and protection against attacks (SQL Injection, XSS)

**RTM (Requirement Traceability Matrix)**
  | Req ID | Module         | Test Case Covered              | Type           
| ------ | -------------- | ------------------------------ | -------------- |
| R1     | Registration   | Valid/Invalid Registration     | Functional     |
| R2     | Login          | Valid/Invalid Login            | Functional     |
| R3     | Doctor Search  | Search by specialization       | Functional     |
| R4     | Doctor Details | View doctor profile            | Functional     |
| R5     | Booking (Cart) | Add appointment to cart        | Functional     |
| R6     | Payment        | Complete booking               | Functional     |
| R7     | Dashboard      | View appointment history       | Functional     |
| NF1    | Performance    | Page load time                 | Non-Functional |
| NF2    | Security       | SQL Injection / XSS validation | Non-Functional |
| NF3    | Usability      | UI responsiveness              | Non-Functional |

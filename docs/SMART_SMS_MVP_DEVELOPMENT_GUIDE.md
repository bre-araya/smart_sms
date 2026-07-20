1, Version: V1.0.0
2, Project Name: SMART SMS (Smart School Management System)
Purpose:
Develop a modern, scalable, secure School Management System for Ethiopian schools.

The system should

Reduce paperwork
Digitize school operations
Improve communication
Improve academic management
Generate reports
Be scalable enough for future SaaS deployment

3, Target Users: Super Admin

School Admin
Registrar
Teacher
Student (Future)
Parent (Future)

4, MVP Goal:
The MVP should allow a school to operate digitally.

The school should be able to

✅ Login
✅ Manage Users
✅ Register Students
✅ Register Teachers
✅ Create Grades
✅ Create Sections
✅ Create Subjects
✅ Assign Teachers
✅ Take Attendance
✅ Create Exams
✅ Enter Marks
✅ Calculate Results
✅ Generate Reports

5, Technology Stack:
Frontend:
Next.js
React
JavaScript
CSS Modules
shadcn/ui
Axios

Backend:
Node.js
Express.js
Prisma ORM
JWT
bcrypt
Socket.IO(future)
Redis

Database:
PostgreSQL
DevOps:
Docker

GitHub Actions:
Nginx

Project Architecture:

Browser

↓

Next.js

↓

REST API

↓

Express.js

↓

Prisma ORM

↓

PostgreSQL

↓

Redis

User Roles:

Super Admin
School Admin
Registrar
Teacher

Permissions:

Super Admin do Everything

School Admin  Everything except Super Admin Settings

                            Registrar, Students, Parents, Reports

Teacher: do Attendance, Marks, Results

6. MVP Modules:
Authentication
Dashboard
User Management
Academic Structure
Teacher Management
Student Management
Attendance
Examinations
Results
Reports
Settings

7. Module Development Order

This is critical. Never jump randomly.

Authentication

↓
Dashboard
↓
Academic Structure
↓
Teachers
↓
Students
↓
Attendance
↓
Exams
↓
Marks
↓
Results
↓
Reports
↓
Settings

8. Folder Structure
smart_sms/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── contexts/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── lib/
│   │   └── constants/
│   │
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── modules/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── prisma/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── ...
│
├── database/
│   ├── prisma/
│   ├── migrations/
│   ├── seed/
│   └── backups/
│
├── docs/
│
├── docker/
│
├── .gitignore
│
├── docker-compose.yml
│
└── README.md

9. Database Tables
roles
users
teachers
parents
students
academic_years
semesters
grades
sections
subjects
teacher_subjects
attendance
exams
marks
settings

10. API Rules

Every endpoint

/api/v1/

Example

POST

/api/v1/auth/login

Response

Always

{
 success,
 message,
 data
}

Never

{
 token,
 user
}

Error format

{
 success:false,
 message:"Unauthorized"
}

11. Backend Coding Standards

Every module contains

controller

service

repository

routes

validation

Never  Controller → Database

Always
Controller

↓

Service

↓

Repository

↓

Prisma

↓

Database

12. Frontend Standards

Pages never call API directly.

Always

Page

↓

Service

↓

Axios

↓

Backend

Never

Page

↓

fetch()
13. Database Rules

Every table

id

created_at

updated_at

deleted_at

Use

UUID

Soft Delete

Foreign Keys

Indexes

14. Git Rules

Main

main

Development

develop

Feature

feature/auth

feature/student

feature/attendance

Never code directly on

main
15. Coding Rules

Always

Small Functions

Reusable Components

Validation

Error Handling

Logging

Environment Variables

Never

Hardcoded URLs

Hardcoded Secrets

Duplicate Logic

16. Definition of Done

A module is complete only when it has:

Database table(s)
Prisma model(s)
Validation
Repository
Service
Controller
Routes
API tests
Frontend pages
Forms
Tables
Search
Pagination
Error handling
Role-based authorization
Documentation
17. AI Coding Prompt Standards

This is the part that will make your development much faster.

Instead of asking:

"Create student API"

Use structured prompts.

Prompt 1 – Database
Design the PostgreSQL database tables for the Student module.

Requirements:
- Follow the SMART SMS architecture.
- Use PostgreSQL best practices.
- Normalize to 3NF.
- Include indexes and constraints.
- Support Prisma ORM.
- Return SQL and explain relationships.
Prompt 2 – Prisma
Generate the Prisma schema for the Student module.

Requirements:
- Match the database.
- Add relationships.
- Use UUID primary keys.
- Add timestamps.
- Follow SMART SMS naming conventions.
Prompt 3 – Backend Module
Generate the complete Student backend module.

Requirements:
- Express.js
- Repository Pattern
- Controller
- Service
- Routes
- Validation
- Error Handling
- Logging
- RESTful APIs
- Follow SMART SMS architecture.
Prompt 4 – Frontend Module
Generate the Student Management frontend.

Requirements:
- Next.js App Router
- JavaScript
- CSS Modules
- shadcn/ui
- Axios service layer
- Search
- Pagination
- Responsive layout
- Follow SMART SMS design system.
Prompt 5 – Review
Review the generated code.

Check:
- Security
- Scalability
- Readability
- Performance
- SOLID principles
- Clean Architecture
- Production readiness

18. Database Table Design:
roles:
        id
        name
        description

        created_at
        updated_at
        deleted_at
Users: 
    user_id(PK)
    role_id(FK)
    first_name
    last_name
    email
    phone
    password
    status
    last_login
    created_at
    updated_at
    deleted_at
relationship:  1 Role ------ N Users

academic_years:
                Academic_year_id(PK)
                name
                start_date
                end_date
                is_active
                created_at
                updated_at


semesters:
            semester_id(PK)
            academic_year_id(FK)
            name
            start_date
            end_date
            is_active
  relationship      1 AcademicYear ------ N Semester

Grades:
        grade_id(PK)
        name
        description

sections:
        section_id(PK)
        grade_id(FK)
        name
        capacity
        room_number
  relationship     1 Grade ------- N Section

subjects:
        subject_id(PK)
        code
        name
        description

Teachers:
        teacher_id(PK)
        user_id(FK)
        employee_number
        qualification
        hire_date
        gender
        date_of_birth
    relation ship 1 user ------ 1 teacher

Parents:
        parent_id(PK)
        full_name
        phone
        email
        occupation
        address
    
students:
            student_id (PK)
            user_id
            parent_id
            section_id
            admission_number
            gender
            date_of_birth
            admission_date
            address
            photo
            status
    relationship: 1 Parent ------- N Students
                  1 Section -------N Students

teacher_subjects: This connects teachers to subjects and sections

                id
                teacher_id
                subject_id
                section_id
Relationship:
Teacher

N
↓
TeacherSubjects
↓
Subject
↓
Section


attendance:
            id
            student_id
            section_id
            date
            status
            remark
status: Present
        Absent
        Late
        Excused


exams:
        id
        semester_id
        title
        exam_date
        total_marks

marks:
        id
        exam_id
        student_id
        subject_id
        teacher_id
        score
        remark

settings:
            id
            school_name
            school_code
            phone
            email
            address
            logo
            grading_system
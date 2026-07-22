This system must include:
Modules: 
            Authentication
            Dashboard
            School Management
            Academic Structure
            Student Management
            Teacher Management
            Guardian Management
            Subject Management
            Enrollment Management
            Profile Management
            Settings

1. Authentication: 
Manage login, logout, authentication, authorization, and user sessions.
this includes these pages: Login, Forget Password, Change password, Reset Password, and My Profile

APIs:
        POST   /auth/login
        POST   /auth/logout
        POST   /auth/refresh-token
        POST   /auth/forgot-password
        POST   /auth/reset-password
        POST   /auth/change-password
        GET    /auth/me

Functions:
            Login
            Logout
            JWT Authentication
            Refresh Token
            Password Reset
            Current User

2. Dashboard:
       Purpose:  Provide an overview of the school.
       pages:    Dashboard

      Widgets:  
            Total Students
            Total Teachers
            Total Guardians
            Total Subjects
            Today's Attendance (later)
            Current Academic Year
            Students per Grade
            Recent Students  
        APIs:
            GET /dashboard/summary
            GET /dashboard/charts
            GET /dashboard/recent-students


3. School Management:
    Purpose:  Manage all about school information.
    pages: School Information and Edit School

    APIs:
        GET /schools
        GET /schools/:id
        POST /schools
        PUT /schools/:id
        DELETE /schools/:id

    Functions:  
            School Name
            Logo
            Phone
            Email
            Address
            Motto


4. Academic Structure: This module contains the core academic configuration.

    Academic Year:
            Pages:
                Academic Year List
                Create Academic Year
                Edit Academic Year

            APIs: 
                GET  /academic-years
                        Purpose: Retrieve all academic years.
                GET /academic-years/:id
                        Purpose: Retrieve a specific academic year's details.
                POST /academic-years
                        Purpose: Create a new academic year.
                PUT  /academic-years/:id
                        Purpose: Update an existing academic year.
                PATCH /academic-years/:id/activate
                    Purpose: Set an academic year as the active year.
                DELETE /academic-years/:id
                        Purpose: Soft delete an academic year. 

     Grade:  Purpose: Manage school grade levels (Grade 1–12, KG, etc.).
        pages: 
                  Grade List
                  Create Grade
        APIs:
            GET /grades
                    Purpose: Retrieve all grades.
            GET /grades/:id
                    Purpose: Retrieve a specific grade's details.
            POST /grades
                    Purpose: Create a new grade.
            PUT  /grades/:id
                    Purpose: Update an existing grade.
            DELETE /grades/:id
                    Purpose: Soft delete a grade.

    Section: Purpose: Manage class sections within grades (e.g., Grade 9 → Section A, B, C).

       pages:
            Section List
            Create Section  

        APIs:
            GET /sections
                   Purpose: Retrieve all sections.
            GET  /sections/:id
                    Purpose: Retrieve a specific section's details.
            GET /grades/:gradeId/sections
                    Purpose: Retrieve all sections under a specific grade.
            POST /sections
                    Purpose: Create a new section.
            PUT  /sections/:id
                    Purpose: Update an existing section.
            DELETE /sections/:id
                    Purpose: Soft delete a section.


5. Subject Management:
         Pages:
             Subject List
             Create Subject
             Edit Subject

        APIs:
            GET /subjects
                  Purpose: Retrieve all subjects.
            GET /subjects/:id
                  Purpose: Retrieve a specific subject's details.
            POST /subjects
                  Purpose: Create a new subject.
            PUT /subjects/:id
                  Purpose: Update an existing subject.
            DELETE /subjects/:id
                  Purpose: Soft delete a subject.
        
    
6. Teacher Management:
        Pages:
            Teacher List
            Teacher Details
            Create Teacher
            Edit Teacher

        APIS:
            GET /teachers
                Purpose: Retrieve all teachers.
            GET /teachers/:id
                Purpose: Retrieve a specific teacher's details.
            POST /teachers
                Purpose: Register a new teacher.
            PUT /teachers/:id
                Purpose: Update teacher information.
            DELETE /teachers/:id
                Purpose: Soft delete a teacher.
            GET    /teachers/:id/subjects
                    Purpose: Retrieve all subjects assigned to the teacher.

            GET    /teachers/:id/sections
                    Purpose: Retrieve all sections assigned to the teacher.
            PATCH  /teachers/:id/activate
                    Purpose: Activate a teacher account.

            PATCH  /teachers/:id/suspend
                    Purpose: Suspend a teacher.

        
        Functions:
                Assign Subject
                Assign Section
                Activate
                Suspend
        
    
7. Parent Management:
        Pages:
            Guardian List
            Guardian Details
            Create Guardian
            Edit Guardian
        
        APIs:
            GET    /guardians
                    Purpose: Retrieve all guardians.
            GET    /guardians/:id
                    Purpose: Retrieve a specific guardian's details.
            POST   /guardians
                    Purpose: Register a new guardian.
            PUT    /guardians/:id
                    Purpose: Update guardian information.
            DELETE /guardians/:id
                    Purpose: Soft delete a guardian.
            GET    /guardians/:id/students
                    Purpose: Retrieve all students linked to the guardian.
        

8. Student Management:   This is the largest module in the MVP. which is used to manage all about the student informations and academic history.
         
         Pages:
            Student List
            Student Details
            Create Student
            Edit Student
            Student Profile
            Student Enrollment
            Student History
        
        APIs:
            GET /students
                Purpose: Retrieve all students.
            GET /students/:id
                Purpose: Retrieve a specific student's details.
            POST /students
                Purpose: Register a new student.
            PUT /students/:id
                Purpose: Update student information.
            DELETE /students/:id
                Purpose: Soft delete a student.
            PATCH  /students/:id/activate
                 Purpose: Activate a student.

            PATCH  /students/:id/suspend
                 Purpose: Suspend a student.

        Enrollment APIs:
                    POST   /students/:id/enroll
                            Purpose: Enroll a student into an academic year and section.
                    PATCH  /students/:id/transfer
                            Purpose: Transfer a student to another section.
                    PATCH  /students/:id/graduate
                            Purpose: Graduate a student.
                    PATCH  /students/:id/withdraw
                            Purpose: Withdraw a student from the school.
                    GET    /students/:id/enrollments
                            Purpose: Retrieve the student's enrollment history.

        Student Profile must Display: 
                    Basic Information
                    Parent Information
                    Academic Information
                    Current Grade
                    Current Section
                    Current Academic Year
                    Enrollment History

        Student Profile APIs:
                GET    /students/:id/profile
                        Purpose: Retrieve the complete student profile.
                GET    /students/:id/guardian
                        Purpose: Retrieve the student's guardian information.

9. Teacher Assignment:    Assign teachers to sections and subjects.
        Pages:
             Assignment List
             Create Assignment
             Edit Assignment

        APIs:
            GET    /teacher-assignments
                    Purpose: Retrieve all teacher assignments.
            GET    /teacher-assignments/:id
                    Purpose: Retrieve assignment details.
            POST   /teacher-assignments
                    Purpose: Assign a teacher to a subject and section.
            PUT    /teacher-assignments/:id
                    Purpose: Update a teacher assignment.
            DELETE /teacher-assignments/:id
                    Purpose: Remove a teacher assignment.
            GET    /teachers/:id/assignments
                    Purpose: Retrieve all assignments of a teacher.
            GET    /sections/:id/teachers
                    Purpose: Retrieve teachers assigned to a section.

        
10. Profile: Allow logged-in users to manage their own account.
        Pages:
            My Profile
            Edit Profile
            Change Password

        APIs:
            GET    /profile
                    Purpose: Retrieve the current user's profile.
            PUT    /profile
                    Purpose: Update the current user's profile.
            PATCH  /profile/change-password
                    Purpose: Change the current user's password.
        
11. Settings(Administration):  All System configuration and Manage users, roles, permissions, and general system settings.

        Pages:
            General Settings
            Roles
            Users
            School Settings
            System Setting

        APIs:
            GET    /settings
                    Purpose: Retrieve system settings.
            PUT    /settings
                    Purpose: Update system settings.
        
        User Management:
            Pages:
                User List
                User Details
                Create User
                Edit User
               
             APIs:
                 GET    /users
                        Purpose: Retrieve all users.
                GET    /users/:id
                        Purpose: Retrieve a specific user's details.
                POST   /users
                        Purpose: Create a new user account.
                PUT    /users/:id
                        Purpose: Update user information.
                PATCH  /users/:id/activate
                        Purpose: Activate a user.
                PATCH  /users/:id/suspend
                        Purpose: Suspend a user.
                DELETE /users/:id
                        Purpose: Soft delete a user.

        Role Management:
            Pages: 
                Role List
                Create Role
                Edit Role

            APIs:
               GET    /roles
                        Purpose: Retrieve all roles.
                GET    /roles/:id
                        Purpose: Retrieve a specific role.
                POST   /roles
                        Purpose: Create a new role.
                PUT    /roles/:id
                        Purpose: Update a role.
                DELETE /roles/:id
                        Purpose: Soft delete a role.

Permission Management (Future-ready)

Note: Since your MVP uses Role-Based Access Control (RBAC), permissions can initially be embedded in roles. If you later move to fine-grained permissions, these endpoints are ready.

           APIs:
             GET    /permissions
                    Purpose: Retrieve all available permissions.
            GET    /roles/:id/permissions
                    Purpose: Retrieve permissions assigned to a role.
            PUT    /roles/:id/permissions
                    Purpose: Update permissions assigned to a role.  



Sidebar:
    Dashboard

    School
        School Profile
        
    Academic
        Academic Years
        Grades
        Sections
        Subjects

    People
        Students
        Teachers
        Parents

    Enrollment
        Student Enrollment
        Teacher Assignment

    Administration
        Users
        Roles

    Settings

    My Profile



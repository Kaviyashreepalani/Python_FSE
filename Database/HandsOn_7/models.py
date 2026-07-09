from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    ForeignKey
)
from sqlalchemy.orm import declarative_base

Base = declarative_base()


# Department Table
class Department(Base):
    __tablename__ = "departments"

    department_id = Column(Integer, primary_key=True)
    department_name = Column(String(100), nullable=False)


# Course Table
class Course(Base):
    __tablename__ = "courses"

    course_id = Column(Integer, primary_key=True)
    course_name = Column(String(100), nullable=False)
    department_id = Column(Integer, ForeignKey("departments.department_id"))


# Student Table (Updated for Task 2)
class Student(Base):
    __tablename__ = "students"

    student_id = Column(Integer, primary_key=True)
    student_name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True)

    # New column added in Task 2
    is_active = Column(Boolean, default=True)


# Instructor Table
class Instructor(Base):
    __tablename__ = "instructors"

    instructor_id = Column(Integer, primary_key=True)
    instructor_name = Column(String(100), nullable=False)


# Enrollment Table
class Enrollment(Base):
    __tablename__ = "enrollments"

    enrollment_id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey("students.student_id"))
    course_id = Column(Integer, ForeignKey("courses.course_id"))


# New Table for Task 2
class CourseSchedule(Base):
    __tablename__ = "course_schedules"

    schedule_id = Column(Integer, primary_key=True)
    course_id = Column(Integer, ForeignKey("courses.course_id"))

    day_of_week = Column(String(20), nullable=False)
    start_time = Column(String(20), nullable=False)
    end_time = Column(String(20), nullable=False)
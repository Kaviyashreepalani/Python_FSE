from datetime import datetime, timedelta

from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from database import SessionLocal
from models import Course, User
from schemas import (
    CourseCreate,
    CourseResponse,
    UserCreate,
    UserResponse,
    LoginRequest,
    Token,
)
from security import (
    get_password_hash,
    verify_password,
    create_access_token,
    SECRET_KEY,
    ALGORITHM,
)

app = FastAPI()

# CORS configuration
# CORS allows browser requests only from trusted origins.
# Here we allow our frontend running on localhost:3000.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/api/v1/auth/login/"
)


# OAuth2 Authorization Code Flow:
# In OAuth2, users authenticate through providers like
# Google, GitHub, or Microsoft. The provider returns an
# authorization code, which is exchanged for an access token.
#
# In our implementation, users directly send their email
# and password to the API, which generates a JWT token.
# This is simpler than the full OAuth2 authorization flow.


def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid or expired token"
    )

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        email = payload.get("sub")

        if email is None:
            raise credentials_exception

    except JWTError:
        raise credentials_exception

    user = db.query(User).filter(
        User.email == email
    ).first()

    if user is None:
        raise credentials_exception

    return user


# ==========================
# AUTHENTICATION ENDPOINTS
# ==========================

@app.post(
    "/api/v1/auth/register/",
    response_model=UserResponse
)
def register_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=409,
            detail="Email already registered"
        )

    hashed_password = get_password_hash(
        user.password
    )

    new_user = User(
        email=user.email,
        hashed_password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@app.post(
    "/api/v1/auth/login/",
    response_model=Token
)
def login_user(
    user: LoginRequest,
    db: Session = Depends(get_db)
):

    db_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not verify_password(
        user.password,
        db_user.hashed_password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        data={"sub": db_user.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


# ==========================
# COURSE ENDPOINTS
# ==========================

# Public endpoint
@app.get(
    "/api/v1/courses/",
    response_model=list[CourseResponse]
)
def get_courses(
    db: Session = Depends(get_db)
):

    return db.query(Course).all()


# Protected endpoint
@app.post(
    "/api/v1/courses/",
    response_model=CourseResponse
)
def create_course(
    course: CourseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    new_course = Course(
        title=course.title,
        description=course.description
    )

    db.add(new_course)
    db.commit()
    db.refresh(new_course)

    return new_course


@app.get(
    "/api/v1/courses/{course_id}",
    response_model=CourseResponse
)
def get_course(
    course_id: int,
    db: Session = Depends(get_db)
):

    course = db.query(Course).filter(
        Course.id == course_id
    ).first()

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found"
        )

    return course


# Protected endpoint
@app.delete("/api/v1/courses/{course_id}")
def delete_course(
    course_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    course = db.query(Course).filter(
        Course.id == course_id
    ).first()

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found"
        )

    db.delete(course)
    db.commit()

    return {
        "message": "Course deleted successfully"
    }
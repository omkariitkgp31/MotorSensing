from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# Shared properties
class UserBase(BaseModel):
    email: EmailStr
    name: str

# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str

# Properties to receive via API on Login
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Properties returned via API 
class UserResponse(UserBase):
    id: int
    created_at: datetime
    google_id: Optional[str] = None

    class Config:
        from_attributes = True

# JWT Token schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

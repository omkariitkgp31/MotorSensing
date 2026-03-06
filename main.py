from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import auth

# Initialize Database
Base.metadata.create_all(bind=engine)

app = FastAPI(title="MotorSense AI API", debug=True)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins for local development tests to prevent "Failed to fetch" browser errors
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to MotorSense AI Authentication API"}

import traceback
from database import SessionLocal, engine, Base
from models.user import User
from security import get_password_hash

try:
    print("Creating tables...")
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    print("Hashing password...")
    hash_str = get_password_hash("pwd")
    print("Hash length:", len(hash_str))
    
    # Check if user exists
    existing = db.query(User).filter(User.email == "test_debug@gmail.com").first()
    if not existing:
        print("Saving user...")
        user = User(email="test_debug@gmail.com", name="debug", hashed_password=hash_str)
        db.add(user)
        db.commit()
        print("User saved successfully!")
    else:
        print("User already exists.")
except Exception as e:
    print("Error occurred:")
    traceback.print_exc()

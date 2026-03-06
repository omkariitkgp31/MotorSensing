import traceback
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

try:
    print("Sending request to /auth/signup...")
    response = client.post(
        "/auth/signup",
        json={"email": "tester6@gmail.com", "name": "tester6", "password": "pwd"}
    )
    print("Status:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("Caught exception:")
    traceback.print_exc()

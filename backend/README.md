# Win Wise Cricket Insight - Backend

FastAPI backend for cricket match prediction.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- Unix/MacOS: `source venv/bin/activate`

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the development server:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `POST /api/predict` - Predict match outcome

## API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   ├── models/              # Pydantic models
│   │   ├── __init__.py
│   │   └── match.py
│   ├── routers/             # API routes
│   │   ├── __init__.py
│   │   └── prediction.py
│   └── services/            # Business logic
│       ├── __init__.py
│       └── prediction_service.py
├── requirements.txt
└── README.md
```

## TODO

- [ ] Integrate actual ML model
- [ ] Implement SHAP value calculations
- [ ] Add database for storing predictions
- [ ] Add authentication if needed
- [ ] Add comprehensive error handling
- [ ] Add logging
- [ ] Add tests

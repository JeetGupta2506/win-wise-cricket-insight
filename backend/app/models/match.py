from pydantic import BaseModel, Field
from typing import Optional, Dict, List

class MatchInput(BaseModel):
    team1: str = Field(..., description="First team name")
    team2: str = Field(..., description="Second team name")
    venue: str = Field(..., description="Match venue")
    toss_winner: Optional[str] = Field(None, description="Toss winner team")
    toss_decision: Optional[str] = Field(None, description="Bat or Bowl")
    match_type: str = Field(default="ODI", description="Match type (ODI, T20, Test)")
    
    class Config:
        json_schema_extra = {
            "example": {
                "team1": "India",
                "team2": "Australia",
                "venue": "Melbourne Cricket Ground",
                "toss_winner": "India",
                "toss_decision": "bat",
                "match_type": "ODI"
            }
        }

class ShapValue(BaseModel):
    feature: str
    value: float
    impact: str  # positive, negative, neutral

class PredictionResponse(BaseModel):
    winner: str
    probability: float
    confidence: str  # high, medium, low
    shap_explanation: List[ShapValue]
    factors: Dict[str, str]
    
    class Config:
        json_schema_extra = {
            "example": {
                "winner": "India",
                "probability": 0.65,
                "confidence": "high",
                "shap_explanation": [
                    {"feature": "Home Advantage", "value": 0.15, "impact": "positive"},
                    {"feature": "Recent Form", "value": 0.12, "impact": "positive"}
                ],
                "factors": {
                    "toss": "Won by India",
                    "venue": "Favorable conditions"
                }
            }
        }

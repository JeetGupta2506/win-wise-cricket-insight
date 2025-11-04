import { useState, useRef } from "react";
import { Hero } from "@/components/Hero";
import { MatchForm, MatchData } from "@/components/MatchForm";
import { PredictionResult } from "@/components/PredictionResult";
import { ShapExplanation } from "@/components/ShapExplanation";
import { toast } from "sonner";

const Index = () => {
  const [prediction, setPrediction] = useState<{
    winProbability: number;
    battingTeam: string;
    bowlingTeam: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (data: MatchData) => {
    setIsLoading(true);
    
    try {
      // Simulate API call - in production, this would call your ML backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock prediction based on match conditions
      const requiredRateAdvantage = data.currentRunRate / data.requiredRunRate;
      const wicketsAdvantage = data.wicketsLeft / 10;
      const ballsAdvantage = data.ballsLeft / 120;
      
      const baseProb = 50;
      const rateEffect = (requiredRateAdvantage - 1) * 25;
      const wicketsEffect = wicketsAdvantage * 15;
      const ballsEffect = ballsAdvantage * 10;
      
      let winProb = baseProb + rateEffect + wicketsEffect + ballsEffect;
      winProb = Math.max(5, Math.min(95, winProb));
      
      setPrediction({
        winProbability: Math.round(winProb),
        battingTeam: data.battingTeam,
        bowlingTeam: data.bowlingTeam,
      });
      
      toast.success("Prediction calculated successfully!");
    } catch (error) {
      toast.error("Failed to calculate prediction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Mock SHAP features based on prediction
  const mockShapFeatures = prediction ? [
    {
      feature: "Required Run Rate",
      impact: 0.35,
      direction: (prediction.winProbability > 50 ? "negative" : "positive") as "positive" | "negative",
    },
    {
      feature: "Wickets Remaining",
      impact: 0.28,
      direction: (prediction.winProbability > 50 ? "positive" : "negative") as "positive" | "negative",
    },
    {
      feature: "Balls Remaining",
      impact: 0.22,
      direction: "positive" as "positive" | "negative",
    },
    {
      feature: "Current Run Rate",
      impact: 0.18,
      direction: (prediction.winProbability > 50 ? "positive" : "negative") as "positive" | "negative",
    },
    {
      feature: "Venue Advantage",
      impact: 0.12,
      direction: "positive" as "positive" | "negative",
    },
  ] : [];

  return (
    <div className="min-h-screen bg-background">
      <Hero onGetStarted={handleGetStarted} />
      
      <main className="container mx-auto px-4 py-16 space-y-12">
        <div ref={formRef} className="max-w-4xl mx-auto">
          <MatchForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {prediction && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PredictionResult
              battingTeam={prediction.battingTeam}
              bowlingTeam={prediction.bowlingTeam}
              winProbability={prediction.winProbability}
            />
            
            <ShapExplanation features={mockShapFeatures} />
          </div>
        )}

        {!prediction && (
          <div className="max-w-4xl mx-auto text-center py-12 text-muted-foreground">
            <p>Enter match details above to see AI-powered predictions and explainable insights.</p>
          </div>
        )}
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Cricket Win Predictor. Powered by Machine Learning & Explainable AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

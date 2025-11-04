import { Activity, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cricket-hero.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-primary-foreground/20 mb-4">
            <Activity className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">AI-Powered Cricket Analytics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Cricket Match Win
            <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
              Predictor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Predict match outcomes with advanced machine learning. Get real-time win probabilities and explainable AI insights.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onGetStarted}
              className="gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Get Prediction
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-secondary">95%</div>
              <div className="text-sm text-primary-foreground/80">Accuracy</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-secondary">10K+</div>
              <div className="text-sm text-primary-foreground/80">Matches Analyzed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-secondary">Real-time</div>
              <div className="text-sm text-primary-foreground/80">Predictions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

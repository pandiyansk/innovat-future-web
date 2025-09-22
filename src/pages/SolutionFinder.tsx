import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft, CheckCircle, Settings, Factory, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WizardStep {
  id: string;
  title: string;
  description: string;
  options: { id: string; label: string; description?: string }[];
}

const SolutionFinder = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const wizardSteps: WizardStep[] = [
    {
      id: 'industry',
      title: 'What industry are you in?',
      description: 'Help us understand your industrial sector',
      options: [
        { id: 'automotive', label: 'Automotive Manufacturing', description: 'Car assembly, parts manufacturing' },
        { id: 'electronics', label: 'Electronics & Semiconductors', description: 'PCB assembly, chip manufacturing' },
        { id: 'packaging', label: 'Packaging & Food Processing', description: 'Food packaging, beverage production' },
        { id: 'textiles', label: 'Textiles & Apparel', description: 'Fabric production, garment manufacturing' },
        { id: 'pharmaceutical', label: 'Pharmaceutical', description: 'Drug manufacturing, medical devices' },
        { id: 'metal', label: 'Metal Working', description: 'CNC machining, metal fabrication' },
      ]
    },
    {
      id: 'problem',
      title: 'What challenge are you facing?',
      description: 'Identify your primary operational challenge',
      options: [
        { id: 'precision', label: 'Need Higher Precision', description: 'Improve accuracy and repeatability' },
        { id: 'speed', label: 'Increase Production Speed', description: 'Faster cycle times and throughput' },
        { id: 'automation', label: 'Reduce Manual Labor', description: 'Automate repetitive tasks' },
        { id: 'quality', label: 'Improve Quality Control', description: 'Better inspection and testing' },
        { id: 'efficiency', label: 'Energy Efficiency', description: 'Reduce power consumption' },
        { id: 'maintenance', label: 'Reduce Downtime', description: 'Minimize maintenance issues' },
      ]
    },
    {
      id: 'environment',
      title: 'What is your operating environment?',
      description: 'Help us recommend suitable products',
      options: [
        { id: 'standard', label: 'Standard Factory Floor', description: 'Normal temperature and humidity' },
        { id: 'cleanroom', label: 'Clean Room Environment', description: 'Dust-free, controlled atmosphere' },
        { id: 'harsh', label: 'Harsh Conditions', description: 'High temperature, dust, chemicals' },
        { id: 'outdoor', label: 'Outdoor Installation', description: 'Weather exposure, temperature variations' },
        { id: 'hazardous', label: 'Hazardous Area', description: 'Explosive atmospheres, special safety requirements' },
      ]
    },
    {
      id: 'budget',
      title: 'What is your budget range?',
      description: 'Help us suggest appropriate solutions',
      options: [
        { id: 'under-50k', label: 'Under ₹50,000', description: 'Basic automation solutions' },
        { id: '50k-2l', label: '₹50,000 - ₹2,00,000', description: 'Mid-range systems' },
        { id: '2l-10l', label: '₹2,00,000 - ₹10,00,000', description: 'Advanced automation' },
        { id: 'over-10l', label: 'Over ₹10,00,000', description: 'Enterprise solutions' },
      ]
    }
  ];

  const getRecommendations = () => {
    const { industry, problem, environment, budget } = answers;
    
    // Simple recommendation logic based on answers
    const recommendations = [];
    
    if (problem === 'precision' || problem === 'quality') {
      recommendations.push({
        id: 'linear-system',
        title: 'Precision Linear Motion System',
        description: 'High-precision linear guideways and ballscrews for accurate positioning',
        products: ['Linear Guideway Systems', 'Precision Ballscrews', 'Servo Motors'],
        benefits: ['±3μm positioning accuracy', 'Smooth operation', 'Long service life'],
        price: '₹1,50,000 - ₹5,00,000'
      });
    }
    
    if (problem === 'speed' || problem === 'efficiency') {
      recommendations.push({
        id: 'servo-system',
        title: 'High-Speed Servo Control System',
        description: 'AC servo motors with variable frequency drives for optimal speed control',
        products: ['AC Servo Motors', 'Variable Frequency Drives', 'PLC Controllers'],
        benefits: ['30% faster cycle times', 'Energy efficient', 'Precise speed control'],
        price: '₹80,000 - ₹3,00,000'
      });
    }
    
    if (problem === 'automation' || industry === 'automotive') {
      recommendations.push({
        id: 'automation-package',
        title: 'Complete Automation Package',
        description: 'Integrated PLC, HMI, and robotic systems for full automation',
        products: ['PLC Systems', 'HMI Interfaces', 'Industrial Robots', 'Sensors'],
        benefits: ['60% reduction in manual labor', 'Consistent quality', 'Remote monitoring'],
        price: '₹5,00,000 - ₹25,00,000'
      });
    }
    
    // Add a default recommendation if none match
    if (recommendations.length === 0) {
      recommendations.push({
        id: 'consultation',
        title: 'Custom Engineering Consultation',
        description: 'Let our experts design a tailored solution for your specific needs',
        products: ['Engineering Consultation', 'Custom Design', 'Installation Support'],
        benefits: ['Tailored to your needs', 'Expert guidance', 'Ongoing support'],
        price: 'Contact for quote'
      });
    }
    
    return recommendations;
  };

  const handleAnswer = (optionId: string) => {
    const newAnswers = { ...answers, [wizardSteps[currentStep].id]: optionId };
    setAnswers(newAnswers);
    
    if (currentStep < wizardSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit to API (mock)
      submitAnswers(newAnswers);
    }
  };

  const submitAnswers = async (finalAnswers: Record<string, string>) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Analysis Complete!",
        description: "We've found the perfect solutions for your needs.",
      });
      
      setShowResults(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
        variant: "destructive"
      });
    }
  };

  const resetWizard = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentStep + 1) / wizardSteps.length) * 100;

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Results Header */}
              <div className="text-center mb-12 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold text-neutral-dark mb-4">
                  Perfect Solutions Found!
                </h1>
                <p className="text-xl text-muted-foreground">
                  Based on your requirements, here are our recommended solutions:
                </p>
              </div>
              
              {/* Recommendations */}
              <div className="space-y-8 mb-12">
                {recommendations.map((rec, index) => (
                  <Card 
                    key={rec.id}
                    className="p-8 animate-slide-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                          {rec.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {rec.description}
                        </p>
                        <Badge className="bg-primary/10 text-primary">
                          Recommended Solution
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {rec.price}
                        </div>
                      </div>
                    </div>
                    
                    {/* Products */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-neutral-dark mb-3">Included Products:</h4>
                      <div className="flex flex-wrap gap-2">
                        {rec.products.map((product) => (
                          <Badge key={product} variant="outline">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-neutral-dark mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {rec.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1">
                        Get Detailed Quote
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Schedule Consultation
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Actions */}
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover">
                    Contact Our Experts
                  </Button>
                  <Button size="lg" variant="outline" onClick={resetWizard}>
                    Start Over
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our technical team will contact you within 24 hours to discuss your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <Settings className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              Solution Finder
            </h1>
            <p className="text-xl text-muted-foreground">
              Answer a few simple questions and we'll recommend the perfect 
              industrial automation solutions for your specific needs.
            </p>
          </div>
          
          {/* Progress */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {wizardSteps.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </section>
      
      {/* Wizard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                  {wizardSteps[currentStep].title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {wizardSteps[currentStep].description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {wizardSteps[currentStep].options.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className="p-6 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-neutral-dark group-hover:text-primary transition-colors">
                        {option.label}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    {option.description && (
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    )}
                  </button>
                ))}
              </div>
              
              {currentStep > 0 && (
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous Question
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Why Use Our Solution Finder?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Quick & Easy',
                description: 'Get recommendations in under 5 minutes'
              },
              {
                icon: Factory,
                title: 'Industry Expertise',
                description: '30+ years of industrial automation experience'
              },
              {
                icon: CheckCircle,
                title: 'Tailored Solutions',
                description: 'Customized recommendations for your specific needs'
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SolutionFinder;
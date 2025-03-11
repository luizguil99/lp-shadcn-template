import { Button } from "./button";

export function CTASection() {
  return (
    <div className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers who have transformed their business with our solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary">Contact Sales</Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10">
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

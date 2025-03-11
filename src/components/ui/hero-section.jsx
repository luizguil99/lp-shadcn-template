import { Button } from "./button";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Modern solutions for your <span className="text-primary">digital needs</span>
      </h1>
      <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
        We help businesses transform their ideas into powerful digital experiences that drive growth and engagement.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </div>
  );
}

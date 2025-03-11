import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

export function FeatureSection() {
  const features = [
    {
      title: "Intuitive Design",
      description: "Our products are designed with the user in mind, making them easy to use and navigate.",
      icon: CheckCircle
    },
    {
      title: "Powerful Analytics",
      description: "Gain valuable insights into your business with our comprehensive analytics tools.",
      icon: CheckCircle
    },
    {
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security measures and regular updates.",
      icon: CheckCircle
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any issues.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive solutions that help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <feature.icon className="h-6 w-6 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

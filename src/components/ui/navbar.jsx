import { Button } from "./button";

export function Navbar() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">Company</a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

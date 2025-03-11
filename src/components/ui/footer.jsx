import { Button } from "./button";
import { Input } from "./input";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="max-w-[220px]" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

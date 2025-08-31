import { Search, ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Header = () => {
  return (
    <>
      {/* Promotional Bar */}
      <div className="bg-destructive text-destructive-foreground text-center py-2 text-sm font-medium">
        MEGA SALE | BUY 3 FOR 2999 | Use Code: MEGA3
      </div>
      
      {/* Main Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
           <h1 className="text-3xl font-logo font-bold tracking-wider text-foreground">
  ALANKAA.IN
</h1>

            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search Gifts for your dearest..."
                  className="pl-10 w-full"
                />
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-border">
            <div className="flex items-center justify-center space-x-8 py-4">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                New Arrivals
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Best Seller
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Fine Jewellery
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Gifting
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About Us
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
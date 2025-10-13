import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logoImage from '@assets/cn3m-logo_1_1759860038658.png';

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" data-testid="link-home">
            <img src={logoImage} alt="CN3M Logo" className="h-14 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" data-testid="link-nav-home">
              <Button 
                variant={isActive('/') ? 'secondary' : 'ghost'} 
                size="sm"
                className="hover-elevate"
              >
                Home
              </Button>
            </Link>
            
            <Link href="/services" data-testid="link-nav-services">
              <Button 
                variant={isActive('/services') ? 'secondary' : 'ghost'} 
                size="sm"
                className="hover-elevate"
              >
                Services
              </Button>
            </Link>

            <Link href="/reference" data-testid="link-nav-reference">
              <Button 
                variant={isActive('/reference') ? 'secondary' : 'ghost'} 
                size="sm"
                className="hover-elevate"
              >
                Reference
              </Button>
            </Link>

            <Link href="/partner" data-testid="link-nav-partner">
              <Button 
                variant={isActive('/partner') ? 'secondary' : 'ghost'} 
                size="sm"
                className="hover-elevate"
              >
                Partner
              </Button>
            </Link>

            <Link href="/contact" data-testid="link-nav-contact">
              <Button 
                variant={isActive('/contact') ? 'secondary' : 'ghost'} 
                size="sm"
                className="hover-elevate"
              >
                Contact
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={location.startsWith('/company') ? 'secondary' : 'ghost'} 
                  size="sm"
                  className="hover-elevate"
                  data-testid="button-nav-company"
                >
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <Link href="/company/about" data-testid="link-nav-about">
                  <DropdownMenuItem className="hover-elevate cursor-pointer">
                    About Us
                  </DropdownMenuItem>
                </Link>
                <Link href="/company/history" data-testid="link-nav-history">
                  <DropdownMenuItem className="hover-elevate cursor-pointer">
                    History
                  </DropdownMenuItem>
                </Link>
                <Link href="/company/news" data-testid="link-nav-news">
                  <DropdownMenuItem className="hover-elevate cursor-pointer">
                    News & Press
                  </DropdownMenuItem>
                </Link>
                <a href="https://www.paypal.com/paypalme/yourpaypallink" target="_blank" rel="noopener noreferrer" data-testid="link-nav-payment">
                  <DropdownMenuItem className="hover-elevate cursor-pointer">
                    Make a Payment
                  </DropdownMenuItem>
                </a>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive('/') ? 'secondary' : 'ghost'} className="w-full justify-start hover-elevate">
                Home
              </Button>
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive('/services') ? 'secondary' : 'ghost'} className="w-full justify-start hover-elevate">
                Services
              </Button>
            </Link>
            <Link href="/reference" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive('/reference') ? 'secondary' : 'ghost'} className="w-full justify-start hover-elevate">
                Reference
              </Button>
            </Link>
            <Link href="/partner" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive('/partner') ? 'secondary' : 'ghost'} className="w-full justify-start hover-elevate">
                Partner
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive('/contact') ? 'secondary' : 'ghost'} className="w-full justify-start hover-elevate">
                Contact
              </Button>
            </Link>
            <div className="border-t border-border pt-2 mt-2">
              <p className="px-3 py-2 text-sm font-medium text-muted-foreground">Company</p>
              <Link href="/company/about" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-6 hover-elevate">
                  About Us
                </Button>
              </Link>
              <Link href="/company/history" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-6 hover-elevate">
                  History
                </Button>
              </Link>
              <Link href="/company/news" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-6 hover-elevate">
                  News & Press
                </Button>
              </Link>
              <a href="https://www.paypal.com/paypalme/yourpaypallink" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-6 hover-elevate">
                  Make a Payment
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

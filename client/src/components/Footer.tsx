import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">E&R Webservice</h3>
            <p className="text-sm text-muted-foreground">
              Professional web solutions for businesses worldwide
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-services">
                    Web App Design
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Website Development
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Hosting Services
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/company/history">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    History
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/company/news">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    News & Press
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5" />
                <span>info@erwebservice.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5" />
                <span>+49 15735707057</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Schenkendorfstr. 1<br />51545 Waldbröl, Germany</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} E&R Webservice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

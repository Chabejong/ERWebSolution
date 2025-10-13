# CN3M Corporate Website

## Overview
Professional corporate website for CN3M (formerly E&R Webservice) showcasing web design, development, hosting, and database building services.

## Purpose
Multi-page corporate website with CMS functionality for managing content, portfolio items, news articles, and contact submissions. Features modern, responsive design optimized for SEO with consistent branding across all pages.

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter
- **State Management**: TanStack Query

## Core Features
- ✅ Multi-page navigation with dropdown menus
- ✅ Hero images on all pages using client-provided images
- ✅ Admin dashboard for CMS management
- ✅ News & Press article management
- ✅ Portfolio/reference project showcase
- ✅ Contact form with database storage
- ✅ Fully responsive design
- ✅ SEO optimization
- ✅ Left-aligned navigation with CN3M logo

## Services Offered
1. **Web App Design** - Custom web applications with modern UI/UX
2. **Website Development** - Professional websites with SEO and CMS
3. **Hosting Services** - Reliable infrastructure with 99.9% uptime
4. **Building of Databases** - Custom database solutions and architecture

## Pages
- **Home** - Hero carousel, service overview, feature sections
- **Services** - Detailed service descriptions (Core + Specialized)
- **Reference/Portfolio** - Project showcase with filtering
- **Partner** - Strategic partnerships and technology partners
- **Contact** - Contact form and information
- **Company/About** - Company story, mission, vision, values
- **Company/History** - Timeline of company milestones
- **Company/News** - News articles and press releases
- **Admin** - CMS dashboard (News, Portfolio, Contacts management)

## Recent Changes (Current Session)
1. ✅ Updated logo to CN3M branding (increased to 56px for better visibility)
2. ✅ Repositioned navigation to left-aligned layout
3. ✅ Added "Building of Databases" as fourth core service
4. ✅ Added "Make a Payment" to Company dropdown menu
5. ✅ Implemented hero images across all pages using client-provided futuristic laptop images
6. ✅ Replaced all people photos with tech-themed imagery (web interfaces, coding screens, devices)
7. ✅ Converted all photographs with human hands to black and white/grayscale
8. ✅ Updated home page hero carousel with "Responsive Web solution" image showing multiple devices

## Important Notes

### Action Required
1. **PayPal Link**: The "Make a Payment" menu item currently uses a placeholder PayPal link (`https://www.paypal.com/paypalme/yourpaypallink`). This needs to be updated with the actual PayPal.me link.
   - Location: `client/src/components/Navigation.tsx` (lines 108 and 174)

### Tech-Themed Imagery
All images featuring people have been replaced with technology-focused stock photos:
- **Home Page**: Abstract web interfaces, laptop with code, modern web development screens
- **Company About**: Laptop screen with code
- **Company News**: Coding screens and database/network technology concepts
- **Reference/Portfolio**: Laptops with code and abstract web interfaces
- All images reflect web design and technology themes (wireframes, UI mockups, devices, coding symbols)

### Hero Images
All pages now feature consistent hero sections with:
- Client-provided futuristic laptop/web design images
- Dark overlay gradient for text readability
- White text that works in both light/dark modes
- Responsive height (400px mobile, 500px desktop)

### Database Schema
- **News Articles** - title, excerpt, content, author, image, createdAt
- **Portfolio Projects** - title, category, description, image, link
- **Contact Submissions** - name, email, phone, company, message, createdAt

### Mock Data
The application contains mock data throughout with `//todo` comments for easy identification.

## Project Structure
```
client/src/
  ├── pages/          # All page components
  ├── components/     # Reusable UI components
  └── lib/            # Utilities and configurations
server/
  ├── routes.ts       # API endpoints
  ├── storage.ts      # Storage interface
  └── db.ts           # Database configuration
shared/
  └── schema.ts       # Shared types and Zod schemas
```

## Development
- Workflow: `npm run dev` (already configured)
- Database migrations handled by Drizzle
- Environment variables managed via Replit secrets

## Design System
- Color scheme: Professional blue/purple gradient accents
- Typography: Modern, clean fonts
- Components: shadcn/ui with custom theming
- Icons: Lucide React
- Consistent spacing and elevation patterns

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
- ✅ News & Press article management with secure image upload
- ✅ Portfolio/reference project showcase
- ✅ Contact form with database storage
- ✅ Fully responsive design
- ✅ SEO optimization
- ✅ Left-aligned navigation with CN3M logo
- ✅ Object storage integration with ACL security

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
9. ✅ Replaced all grayscale/hand images with new tech landscape images (computer with cables, networked computers in green landscapes)
10. ✅ Moved "E&R WebSolution" from navigation menu to centered heading below hero images on all pages
11. ✅ Fixed responsive navigation layout to prevent overflow on smaller screens - hamburger menu shows on screens < 640px, full navigation bar shows on screens ≥ 640px
12. ✅ Company dropdown menu contains: About Us, History, News & Press, and Make a Payment
13. ✅ Updated all contact information across website (Contact page and Footer): Email (info@erwebservice.com), Phone (+49 15735707057), Address (Schenkendorfstr. 1, 51545 Waldbröl, Germany)
14. ✅ Fixed "Read more" button on News & Press page - now clickable and expands to show full article content
15. ✅ Fixed "Learn more" button on Services page - only appears when expandable content available, reveals full description when clicked
16. ✅ Implemented admin authentication system with session-based login (username: erwebservice@gmail.com, password: news_2025)
17. ✅ Implemented secure file upload functionality for news article images with object storage and ACL enforcement

## Important Notes

### Admin Access
**Login Credentials:**
- Username: `erwebservice@gmail.com`
- Password: `news_2025`

**Protected Features:**
- Creating, editing, and deleting news articles requires authentication
- Creating, editing, and deleting portfolio projects requires authentication
- Viewing contact submissions requires authentication
- Public can still view published news and portfolio items

### Action Required
1. **PayPal Link**: The "Make a Payment" menu item currently uses a placeholder PayPal link (`https://www.paypal.com/paypalme/yourpaypallink`). This needs to be updated with the actual PayPal.me link.
   - Location: `client/src/components/Navigation.tsx`

### Tech-Themed Imagery
All images featuring people have been replaced with technology-focused stock photos:
- **Home Page**: Abstract web interfaces, responsive web solution (devices), computer with cables/monitor, modern web development screens
- **Company About**: Green landscape with networked computers
- **Company News**: Green landscape with vintage CRT monitors showing code, database/network technology
- **Reference/Portfolio**: Green landscape with networked computer systems, abstract web interfaces
- All images reflect web design and technology themes (wireframes, UI mockups, devices, coding symbols, network infrastructure)

### Hero Images
All pages now feature consistent hero sections with:
- Client-provided futuristic laptop/web design images
- Dark overlay gradient for text readability
- White text that works in both light/dark modes
- Responsive height (400px mobile, 500px desktop)

### Database Schema
- **News Articles** - title, excerpt, content, author, image (stored in object storage), createdAt
- **Portfolio Projects** - title, category, description, image, link
- **Contact Submissions** - name, email, phone, company, message, createdAt

### Object Storage & File Uploads
The application uses Replit's object storage for secure image uploads:
- **News Article Images**: Admin can upload images directly from their computer via the admin dashboard
- **Security**: ACL (Access Control List) enforcement ensures proper access control
- **Public Images**: News article images are marked as public and accessible to all visitors
- **Upload Flow**: 
  1. Admin clicks "Upload Image" button in news form
  2. Selects image file from computer (max 10MB, images only)
  3. File is uploaded to object storage with signed URL
  4. Server stores object path in database
  5. Images served from `/objects/:objectPath` with ACL permission checks
- **Environment Variables**: `PUBLIC_OBJECT_SEARCH_PATHS`, `PRIVATE_OBJECT_DIR`
- **Implementation Files**: `server/objectStorage.ts`, `server/objectAcl.ts`, `client/src/components/ObjectUploader.tsx`

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

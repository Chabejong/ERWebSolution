# CN3M Corporate Website

## Overview
Professional corporate website for CN3M (formerly E&R Webservice) showcasing web design, development, hosting, and database building services.

## Purpose
Multi-page corporate website with CMS functionality for managing content, portfolio items, news articles, and contact submissions. Features modern, responsive design optimized for SEO with consistent branding across all pages.

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM (persistent storage)
- **Storage**: Object Storage for file uploads
- **Routing**: Wouter
- **State Management**: TanStack Query

## Core Features
- ✅ Multi-page navigation with dropdown menus
- ✅ Hero images on all pages using client-provided images
- ✅ Admin dashboard for CMS management
- ✅ News & Press article management with secure image upload
- ✅ Portfolio/reference project showcase
- ✅ Contact form with database storage and email notifications
- ✅ Fully responsive design
- ✅ SEO optimization
- ✅ Left-aligned navigation with CN3M logo
- ✅ Object storage integration with ACL security
- ✅ AgentMail integration for contact form email delivery

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
18. ✅ Fixed News & Press page to display uploaded images with /objects/ paths
19. ✅ Migrated from MemStorage (in-memory) to DbStorage (PostgreSQL) for persistent data storage across restarts
20. ✅ Integrated AgentMail for contact form email notifications - sends email to erwebservice@gmail.com when users submit contact forms

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

### Completed Features
- **PayPal Payment Link**: Updated "Make a Payment" menu item with actual PayPal.me link (https://www.paypal.com/paypalme/nkwettae)
  - Location: `client/src/components/Navigation.tsx`
  - Works in both desktop and mobile navigation menus

### Contact Form Email Notifications
The contact form is integrated with AgentMail for automatic email delivery:
- **Recipient**: erwebservice@gmail.com
- **Trigger**: When a user submits the contact form
- **Content**: Formatted HTML email with all form fields (name, email, phone, company, message)
- **Implementation Files**: `server/agentmail.ts`, `server/routes.ts`
- **Error Handling**: Email failures are logged but don't block form submission - contact data is always saved to database
- **Inbox Reuse**: The integration lists and reuses existing AgentMail inboxes to avoid hitting inbox creation limits
- **API Key**: Set via `AGENTMAIL_API_KEY` environment variable for production

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

### Data Persistence
The application now uses **PostgreSQL database** for all data storage:
- News articles, portfolio projects, and contact submissions persist across server restarts
- All CRUD operations use Drizzle ORM
- Database schema automatically synced using `npm run db:push`

Previously used in-memory storage (MemStorage) which lost data on restart. Now all data is permanently stored in the database.

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

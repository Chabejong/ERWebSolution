# E&R Webservice - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from modern agency and SaaS leaders (Vercel, Stripe, Linear, Webflow) to create a professional, trust-building corporate presence. The design emphasizes clean sophistication, visual storytelling through photography, and strategic use of whitespace to convey expertise and reliability.

## Core Design Principles
- **Professional Authority**: Establish credibility through refined typography and structured layouts
- **Visual Storytelling**: Leverage photography to showcase work quality and company culture
- **Clarity & Hierarchy**: Ensure easy navigation and clear communication of services
- **Subtle Sophistication**: Modern design without overwhelming visual effects

## Color Palette

**Primary Brand Colors:**
- Primary Blue: 220 85% 25% (deep corporate blue for headers, CTAs)
- Primary Dark: 220 30% 15% (nearly black for text)
- Light Background: 220 15% 97% (soft off-white)

**Accent & Supporting:**
- Accent Teal: 190 75% 45% (secondary CTAs, highlights)
- Success Green: 150 65% 45% (form confirmations)
- Neutral Gray: 220 10% 60% (borders, subtle text)
- Pure White: 0 0% 100% (cards, modals)

**Dark Mode Variants:**
- Background: 220 25% 8%
- Surface: 220 20% 12%
- Text Primary: 220 15% 95%

## Typography

**Font Families:**
- Headlines: 'Inter', sans-serif (700, 600 weights)
- Body Text: 'Inter', sans-serif (400, 500 weights)
- Accents: 'Space Grotesk', sans-serif (500 weight for labels/tags)

**Type Scale:**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl
- Section Headlines: text-3xl md:text-4xl lg:text-5xl
- Subheadlines: text-xl md:text-2xl
- Body Large: text-lg
- Body Default: text-base
- Small Text: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6, p-8, p-12
- Section spacing: py-16, py-20, py-24
- Element gaps: gap-4, gap-6, gap-8

**Container Widths:**
- Max container: max-w-7xl
- Content sections: max-w-6xl
- Text content: max-w-4xl
- Navigation: w-full with inner max-w-7xl

**Grid Systems:**
- Service cards: grid-cols-1 md:grid-cols-3
- Reference portfolio: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Partner logos: grid-cols-2 md:grid-cols-4 lg:grid-cols-6

## Component Library

**Navigation:**
- Fixed top navigation with backdrop blur (sticky top-0 backdrop-blur-lg bg-white/80)
- Logo left-aligned, menu items right-aligned
- Dropdown menu with smooth transitions (Company section)
- Mobile: Hamburger menu transforming to full-screen overlay

**Hero Section (Homepage):**
- Full-width carousel/slider (h-[70vh] lg:h-[80vh])
- Slide transitions: smooth fade or gentle horizontal slide
- Overlay gradient for text legibility: bg-gradient-to-r from-black/60 to-transparent
- CTA buttons with blur background for image overlays

**Photo Galleries:**
- Header carousel: Auto-advancing slider with navigation dots
- Body gallery: Grid layout with hover scale effects (hover:scale-105 transition)
- Three distinct sections with image + text combinations

**Cards & Containers:**
- Service cards: Elevated white cards with subtle shadow (shadow-lg)
- Border radius: rounded-xl for cards, rounded-lg for buttons
- Hover states: gentle lift (hover:-translate-y-1) and shadow increase

**Forms:**
- Input fields: Outlined style with focus:ring-2 ring-primary
- Labels: Above inputs, text-sm font-medium
- Submit button: Primary color, full-width on mobile
- Field spacing: space-y-4

**Buttons:**
- Primary: bg-primary text-white px-8 py-3 rounded-lg
- Secondary: border-2 border-primary text-primary with backdrop-blur-sm when on images
- Ghost: text-primary hover:bg-primary/10
- Size variants: Small (px-4 py-2), Default (px-6 py-3), Large (px-8 py-4)

**Portfolio/Reference Items:**
- Card-based layout with image thumbnail
- Project title, category tag, brief description
- Hover: reveal overlay with "View Project" CTA
- Filter tags for categorization

**Blog/News Layout:**
- List view: Featured image left, content right on desktop
- Card grid on mobile
- Meta information: Date, author, read time
- Featured post: larger card at top

**Footer:**
- Multi-column layout (4 columns on desktop: Services, Company, Resources, Contact)
- Newsletter signup integrated
- Social media icons
- Copyright and legal links

## Animations

**Minimal & Purposeful:**
- Page transitions: Simple fade-in (fade-in 0.3s ease-out)
- Scroll animations: Subtle fade-up on section entrance (intersection observer)
- Navigation: Smooth dropdown expand/collapse
- Gallery: Crossfade for carousel transitions
- Avoid: Parallax, complex scroll-triggered animations, distracting motions

## Images

**Required Images:**
- Homepage hero carousel: 3-5 professional photos showcasing work environment, team, or technology (high-quality, 1920x1080 minimum)
- Homepage body gallery: 3 section images (each representing different aspects: team/culture, technology/workspace, results/projects)
- Service page: Icon-style illustrations or photos for each service
- Reference page: Portfolio project screenshots/photos (6-12 items)
- About Us: Team photos, office photos
- Partner page: Partner company logos (transparent PNG)

**Image Treatment:**
- Hero images: Slight overlay (bg-black/30) for text contrast
- Gallery images: Maintain aspect ratio, use object-cover
- Team photos: Circular crops (rounded-full) with subtle border
- Portfolio thumbnails: 16:9 aspect ratio in cards

## Responsive Behavior

**Breakpoints:**
- Mobile: Base styles
- Tablet: md: (768px)
- Desktop: lg: (1024px)
- Large Desktop: xl: (1280px)

**Mobile Adaptations:**
- Navigation: Hamburger menu with slide-in panel
- Galleries: Single column, swipeable
- Forms: Full-width inputs, stacked layout
- Typography: Scale down by 1-2 sizes
- Spacing: Reduce py-24 to py-12 on mobile

## Key Pages Layout

**Homepage:** Hero carousel → Value proposition section → Three-column services preview → Body photo gallery (3 sections with image+text) → Client logos strip → CTA section

**Service Page:** Header with service overview → Three detailed service sections (alternating image-left/image-right) → Process/methodology → CTA

**Reference:** Filter navigation → Masonry/grid portfolio → Case study cards with hover states

**Contact:** Split layout (form left, contact info + map right on desktop) → Address, phone, email clearly displayed → Form with validation

**Company Pages:** Clean typography-focused layout → Timeline for History → Blog-style cards for News
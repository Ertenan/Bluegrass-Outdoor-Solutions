# Bluegrass Outdoor Solutions - Professional Website Blueprint

## Project Overview

A premium, single-page scrollable Next.js website for Bluegrass Outdoor Solutions, a professional landscaping company established in 2023. The site must be built using modern styling, visual best practices (such as curated harmonious colors, subtle micro-animations, glassmorphism, responsive grid layouts), and optimized for fast page loads.

This project is requested to be hosted on **GitHub Pages** as a static website. Because GitHub Pages hosts static files, any dynamic server-side functionality (like sending emails) must run through an external serverless function/service (e.g., AWS Lambda, Cloudflare Workers, or Web3Forms) rather than Next.js server-side API routes.

---

## Company Information

- **Company Name:** Bluegrass Outdoor Solutions
- **Founded:** 2023
- **Location:** Union, KY (Primary Service Area: Union, Florence, Northern Kentucky)
- **Phone:** 513-687-9089
- **Contact Email:** tbethan21@gmail.com

---

## Design System

### Color Palette (from Logo)
The website uses a sophisticated four-color palette derived from the company logo:

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| Navy Blue | `#001F3F` | 0, 31, 63 | Primary - Headers, Nav, Buttons |
| Forest Green | `#3B5134` | 59, 81, 52 | Accent - Highlights, CTAs |
| Bronze | `#8B7355` | 139, 115, 85 | Secondary - Borders, Dividers |
| Gold | `#D4AF37` | 212, 175, 55 | Premium - Accents, Hover States |

### Contrast Requirements
- **Navy Blue (#001F3F) on Gold (#D4AF37):** ✓ WCAG AAA compliant (contrast ratio 7.2:1)
- **White on Navy Blue:** ✓ WCAG AAA compliant (contrast ratio 11:1)
- **White on Forest Green:** ✓ WCAG AAA compliant (contrast ratio 6.5:1)
- **Navy Blue on Light backgrounds:** ✓ WCAG AAA compliant
- **Gold text only on Navy/Forest Green/Dark backgrounds** - Never on light backgrounds

### Typography
- **Headlines:** Serif font (e.g., Merriweather, Playfair Display) - Premium feel
- **Body:** Sans-serif font (e.g., Inter, Lato) - Readability
- **Logo Font:** Professional sans-serif for consistency

---

## Website Structure (Single-Page Scrollable Layout)

The website is structured as **one continuous scrollable page** with navigation links that smoothly scroll to relevant sections. Each "page" is actually a section on the main scrollable page.

### Navigation System
- **Fixed/Sticky Navigation Bar:** Always visible, links to all major sections
- **Smooth Scroll Behavior:** Clicking nav links smoothly scrolls to corresponding sections
- **Mobile Menu:** Hamburger menu for mobile devices (collapse at breakpoint)
- **Active Section Highlighting:** Nav indicates current scroll position

### Page Sections & Layout

#### 1. **Hero Section** (Full Viewport Height)
**Purpose:** Immediate visual impact and introduction

**Features:**
- **Background:** Full-screen video (WebM format compatible)
  - File path: `public/videos/hero-video.webm`
  - Fallback/Placeholder: Use high-quality landscaping image from Unsplash until video is provided
  - Autoplay: Yes (muted for autoplay compatibility)
  - Loop: Yes
  - Responsive: Maintains aspect ratio on all devices
- **Overlay:** Semi-transparent Navy Blue overlay (rgba(0, 31, 63, 0.4)) for text readability
- **Content Positioned on Video:**
  - Headline: "Transform Your Outdoor Space" (Gold text, Large, Bold)
  - Subheading: "Professional Landscaping Services in Northern Kentucky"
  - CTA Button: "Get a Free Quote" (Forest Green background, Gold hover state)
- **Startup Animation:** Fade-in + Subtle scale animation (0.5s duration, non-looping)
  - Logo animation: Slides in from top-left (0.3s)
  - Headline fades in (0.4s delay, 0.6s duration)
  - Subheading fades in (0.7s delay, 0.6s duration)
  - CTA button slides up (1s delay, 0.5s duration)

#### 2. **About Us Section**
**Purpose:** Build trust and establish company identity

**Content:**
- Headline: "About Bluegrass Outdoor Solutions"
- Brief company description highlighting quality, craftsmanship, attention to detail
- Key stats (e.g., "100+ Projects Completed", "Proudly Serving Northern Kentucky")
- Professional image/photo of team or work sample

**Layout:**
- Two-column on desktop (text left, image right)
- Single column on mobile
- Text color: Navy Blue headers, Dark Gray body text

#### 3. **Services Section**
**Purpose:** Showcase all service offerings with expandable detail

**Service Categories** (each clickable for expanded view):
1. **Lawncare**
   - Description: Regular lawn maintenance and care
   - Expanded Details: Mowing, edging, seasonal fertilization, aeriation
   
2. **Landscaping Design**
   - Description: Custom landscape planning and installation
   - Expanded Details: Site analysis, design consultation, plant selection, hardscaping integration, maintenance planning
   
3. **Mulching**
   - Description: Mulch installation and refresh services
   - Expanded Details: Mulch types, installation techniques, seasonal refresh, weed prevention
   
4. **Patios**
   - Description: Beautiful outdoor patio construction
   - Expanded Details: Design options, material selection, installation process, drainage solutions
   
5. **Outdoor Paths**
   - Description: Functional and aesthetic pathway creation
   - Expanded Details: Material options, design principles, accessibility considerations, landscape integration
   
6. **Snow Removal**
   - Description: Seasonal snow and ice management
   - Expanded Details: Service schedule, de-icing options

**Layout:**
- Grid display: 3 columns on desktop, 2 on tablet, 1 on mobile
- Each service card shows: Icon, Title, Short Description
- Hover effect: Card elevates with Gold border, background slight color shift
- Click to expand: Modal/Accordion showing full details with high-quality images
- Expanded view includes pricing tier indicator (e.g., "Starting at..." or "Seasonal Service")

**Animations:**
- Service cards fade in on scroll (staggered: each card delays +100ms)
- Hover: Smooth elevation (shadow increase) and Gold accent animation
- Expand/Collapse: Smooth height transition for accordion or modal fade-in

#### 4. **Portfolio Section**
**Purpose:** Showcase completed projects and build credibility

**Features:**
- **Category Filters:** Filter projects by service type
  - Filter buttons: "All", "Lawncare", "Landscaping Design", "Mulching", "Patios", "Outdoor Paths"
  - Active filter: Gold underline or background
- **Gallery Grid:**
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- **Before & After Comparison Tool:**
  - Slider control to reveal before/after images
  - Smooth drag/swipe interaction
  - Works on all devices
  - Caption with project title and date
- **Project Cards:**
  - High-quality image placeholders (from Unsplash landscaping collection)
  - Project title overlay
  - Service type label (small Gold text)
  - Click to view full details or before/after

**Placeholder Images:**
- Use Unsplash landscaping photos until real project photos available
- Search terms: "garden design", "landscape project", "outdoor patio", "lawn maintenance", "mulch garden"

**Animations:**
- Gallery items fade/slide in on scroll
- Before/After slider: Smooth transition
- Hover: Subtle zoom or overlay appearance

#### 5. **Contact/Quote Request Section**
**Purpose:** Generate leads and provide contact information

**Content:**
- Headline: "Get Your Free Landscaping Quote"
- Subheading: "Fill out the form below and we'll get back to you within 24 hours"

**Functional Contact Form:**
**Important:** This form MUST actually send emails to tbethan21@gmail.com

**Form Fields:**
- Full Name (required, text input)
- Email Address (required, email input with validation)
- Phone Number (recommended, tel input)
- Service Type (required, multi-select or dropdown)
  - Options: Lawncare, Landscaping Design, Mulching, Patios, Outdoor Paths, Snow Removal, Other
- Property Address (recommended, text input)
- Project Description (required, textarea, min 20 characters)
- **Bot Protection:**
  - Honeypot field (invisible input field to catch automated bot submissions)
  - Cloudflare Turnstile widget (free, privacy-preserving, and user-friendly captcha)

**Form Styling:**
- Input fields: Light background, Navy Blue border on focus, Gold accent
- Required indicators: Gold asterisk
- Labels: Navy Blue, clear
- Buttons: Forest Green background, Gold hover state
- Form fields should have subtle animation on focus (slight scale and shadow)

**Form Submission:**
- **Email Service (Static Site Compliant):** Because the app is hosted on GitHub Pages as a static export, dynamic server-side API routes cannot run on the hosting server. Use one of the following methods:
  - **AWS Lambda API Relay:** A lightweight AWS Lambda function configured with SMTP/SES credentials that receives the client request, validates the Turnstile token, and sends the email via AWS SES.
  - **Free Form Endpoint Service:** A static-friendly service like Web3Forms, Formspree, or Getform (with built-in spam prevention/captcha validation).
- **Email Configuration:**
  - Send to: tbethan21@gmail.com
  - From: verified sender address on AWS SES (e.g., noreply@bluegrassoutdoorsolutions.com)
  - Subject: "New Quote Request from [Name]"
  - Email template should be professional HTML with all form data
- **User Feedback:**
  - Loading state: "Sending..." (disable button)
  - Success: "Thank you! We'll contact you soon." (Green checkmark animation)
  - Error: "Something went wrong. Please try again or call us." (Error message with fallback phone number)
- **Submission Behavior:**
  - Prevent duplicate submissions (disable button during submission)
  - Clear form on successful submission
  - Stay on page (no redirect)
  - Validate Turnstile token before sending/forwarding email

**Additional Contact Options:**
- Phone: 513-687-9089 (clickable tel link)
- Email: tbethan21@gmail.com (clickable mailto link)
- Service Area emphasis: Union, Florence, Northern Kentucky (NKY)

#### 6. **Footer Section**
**Purpose:** Provide additional information and trust signals

**Content:**
- Copyright year: "© 2023-2024 Bluegrass Outdoor Solutions. All rights reserved."
- Contact Info: Phone, Email, Service Area
- Quick Links: Home, Services, Portfolio, Contact
- Social Media Links (if applicable): Facebook, Instagram, etc.
- Certifications/Affiliations (if any)

**Styling:**
- Background: Navy Blue
- Text: White/Gold
- Link hover: Gold color

---

## Technical Specifications

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom config for color palette
- **Animations:** Framer Motion v10+
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image component
- **Email Service:** NodeMailer or SendGrid
- **Form Validation:** React Hook Form + Zod
- **Video:** WebM format support with fallback

### Project Structure
```
bluegrass-outdoor-solutions/
├── public/
│   ├── logo.jpg (placeholder until provided by client)
│   ├── videos/
│   │   └── hero-video.webm (placeholder until provided)
│   ├── images/
│   │   └── portfolio/ (Unsplash placeholders)
│   └── placeholders/ (fallback images)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Main single-page component)
│   │   ├── api/
│   │   │   └── send-quote/ (POST endpoint for form submission)
│   │   └── globals.css
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceExpandedView.tsx
│   │   ├── Portfolio.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── common/
│   │       ├── Button.tsx
│   │       └── SectionHeading.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts (for scroll-triggered animations)
│   │   └── useIntersectionObserver.ts
│   ├── utils/
│   │   ├── colors.ts (Color palette constants)
│   │   ├── animations.ts (Framer Motion presets)
│   │   ├── emailTemplate.ts (HTML email template)
│   │   └── validation.ts (Form validation schemas)
│   └── types/
│       └── index.ts (TypeScript interfaces)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .env.local (Email service credentials)
```

### Environment Variables
```
NEXT_PUBLIC_COMPANY_PHONE=513-687-9089
NEXT_PUBLIC_SERVICE_AREA=Union, Florence, Northern Kentucky
NEXT_PUBLIC_CONTACT_EMAIL=tbethan21@gmail.com

# Email Service (Example with SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
NEXT_PUBLIC_FROM_EMAIL=noreply@bluegrassoutdoorsolutions.com

# Or with NodeMailer (Generic SMTP with STARTTLS, e.g., AWS SES)
# WARNING: If hosting on GitHub Pages (static), do not store SMTP credentials in Next.js environment variables.
# They will be bundled into the client JS and exposed. See DEPLOYMENT.md for secure setup.
SMTP_USER=your_smtp_username
SMTP_PASSWORD=your_smtp_password
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_REQUIRE_TLS=true
```

### Tailwind Configuration
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#001F3F',
          green: '#3B5134',
          bronze: '#8B7355',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  // Rest of config...
};
```

---

## Animation Strategy

### Startup Animation (Non-Looping, Optimized)
- **Total Duration:** ~1.5 seconds (one-time, only on initial page load)
- **Components:**
  - Logo: Slides in from top-left (300ms, 0ms delay)
  - Navigation bar: Fades in (400ms, 100ms delay)
  - Hero headline: Fades in with slight scale (600ms, 400ms delay)
  - Hero subheading: Fades in (600ms, 700ms delay)
  - CTA button: Slides up with fade (500ms, 1000ms delay)

### Scroll-Triggered Animations (Optimized)
- **Strategy:** Use Intersection Observer for performance
- **When elements come into view:**
  - Text blocks: Fade in + slight slide up
  - Images: Fade in + subtle zoom
  - Service cards: Staggered fade-in (100ms offset each)
  - Portfolio items: Fade in on scroll
- **Performance:** Only animate visible elements, use `will-change` CSS sparingly
- **Optimization:** Debounce scroll events, use GPU acceleration (transform/opacity only)

### Interactive Animations
- **Hover effects:** Smooth transitions (0.2-0.3s duration)
  - Service cards: Elevate + Gold border
  - Buttons: Background color shift, slight scale
  - Links: Color change, underline animation
- **Form interactions:**
  - Input focus: Subtle scale up + border color change
  - Validation: Checkmark animation on success
- **Modal/Expand:** Fade in + slide down with smooth timing (0.3s)
- **Before/After slider:** Smooth drag transition, no jank

### Animation Optimization
- **Use CSS Transforms:** Only animate `transform` and `opacity` (GPU-accelerated)
- **Avoid animating layout properties:** No `width`, `height`, `left`, etc.
- **useIntersectionObserver:** Only trigger animations when element enters viewport
- **Framer Motion settings:** `reduceMotion: "user"` to respect system preferences
- **Lazy load:** Portfolio images lazy-loaded as they enter viewport
- **Performance monitoring:** Test on lower-end devices, target 60 FPS

---

## Responsive Design Breakpoints

```
Mobile: < 640px (Tailwind: sm)
Tablet: 640px - 1024px (Tailwind: md to lg)
Desktop: > 1024px (Tailwind: lg+)
```

### Mobile-Specific Considerations
- **Touch targets:** Minimum 44x44px
- **Forms:** Single column, large input fields
- **Navigation:** Hamburger menu, full-screen mobile menu
- **Video:** Consider data usage; provide loading states
- **Images:** Responsive images with srcset
- **Animations:** Reduced motion preference respected

---

## Accessibility & Quality Assurance

### Accessibility Requirements
- **WCAG 2.1 Level AA compliance** minimum
- **Color contrast:** All text meets minimum ratios (verified in color palette table)
- **Keyboard navigation:** Tab through all interactive elements in logical order
- **Screen reader friendly:** Semantic HTML, ARIA labels where needed
- **Form validation:** Clear error messages, associated labels
- **Motion:** Respect `prefers-reduced-motion` setting
- **Videos:** Include captions/transcripts if applicable

### Quality Assurance Checklist
- [ ] All links navigate correctly (smooth scroll to sections)
- [ ] Contact form submits successfully and email received at tbethan21@gmail.com
- [ ] Form validation works (required fields, email format, etc.)
- [ ] No visibility issues (color contrast, text readability)
- [ ] Hero video loads and plays (WebM format, fallback image appears if unavailable)
- [ ] Before/After slider works smoothly on all devices
- [ ] Service cards expand/collapse correctly
- [ ] Portfolio filters work and update gallery
- [ ] All animations run once on startup (not infinite)
- [ ] Scroll animations trigger appropriately (visible elements only)
- [ ] Mobile responsiveness: test at 320px, 375px, 768px, 1024px+ widths
- [ ] Performance: Lighthouse score > 90 on desktop, > 80 on mobile
- [ ] No console errors or warnings
- [ ] Images load properly (Unsplash placeholders)
- [ ] Navigation works on all devices (sticky on desktop, hamburger on mobile)
- [ ] Form submission doesn't reload page
- [ ] Success/error messages display appropriately

---

## Implementation Notes

### Email Functionality
The contact form email submission should:
1. Validate form data on client-side (React Hook Form + Zod)
2. Send POST request to `/api/send-quote` with form data
3. Server-side validation and sanitization
4. Send professional HTML email to tbethan21@gmail.com
5. Return success/error response to client
6. Display success message without page reload

For NodeMailer transport initialization supporting STARTTLS (for AWS SES, etc.), use:
```javascript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true', // false for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  requireTLS: process.env.SMTP_REQUIRE_TLS === 'true', // true for STARTTLS
});
```

### Portfolio & Services Images
- Use high-quality **Unsplash** placeholder images until real photos are available
- Search suggestions:
  - Services: "landscape design", "lawn care", "outdoor patio", "mulch garden", "garden path", "snow removal"
  - Portfolio: "before and after landscaping", "garden transformation", "backyard design"
- Images should be optimized (use Next.js Image component)
- Implement lazy loading for portfolio images

### Hero Video
- **Format:** WebM (modern browsers)
- **Path:** `public/videos/hero-video.webm`
- **Fallback:** High-quality landscaping image from Unsplash
- **Specifications:**
  - Aspect ratio: 16:9 preferred
  - Duration: 10-20 seconds (loops)
  - File size: Optimize to < 5MB for fast loading
  - Autoplay: Muted only (browser policy)

### Before/After Slider
- **Interaction:** Click and drag to reveal before/after images
- **Mobile:** Swipe gesture support
- **Accessibility:** Keyboard arrow keys to adjust (for accessibility)
- **Performance:** Use CSS transforms for smooth 60 FPS movement

---

## Future Enhancements
- Blog section for landscaping tips
- Testimonials/Reviews section
- Seasonal promotions banner
- Live chat support
- Project inquiry system with timeline
- Team member profiles
- Social media feed integration
- Video testimonials
- Mobile app version

---

## Tech Stack Summary

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 14+ |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Form Handling | React Hook Form |
| Validation | Zod |
| Email Service | AWS SES (via Lambda) or Web3Forms |
| Bot Protection | Cloudflare Turnstile & Honeypot |
| Deployment | GitHub Pages (Static Export) |

---

## Color Palette Reference

**Tailwind CSS Utility Classes (Custom):**
```
Text: text-brand-navy, text-brand-green, text-brand-gold
Background: bg-brand-navy, bg-brand-green, bg-brand-gold
Border: border-brand-navy, border-brand-bronze
```

**Direct Usage:**
- Primary buttons: `bg-brand-green hover:bg-brand-gold`
- Headers: `text-brand-navy`
- Accents: `text-brand-gold`
- Backgrounds: `bg-white with brand accent borders/text`

---

## Development Workflow

1. **Setup:** Install dependencies, configure environment variables
2. **Component Development:** Build isolated components (Navigation, Hero, Services, etc.)
3. **Integration:** Combine components into main page
4. **Styling:** Apply color palette and responsive design
5. **Animations:** Add startup and scroll animations
6. **Email Setup:** Configure AWS Lambda or Web3Forms and Turnstile captcha
7. **Content:** Replace placeholders with real company info and images
8. **Testing:** QA checklist verification
9. **Performance:** Optimize for Lighthouse scores
10. **Deployment:** Deploy static export to GitHub Pages (see DEPLOYMENT.md)

---
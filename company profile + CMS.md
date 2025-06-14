# Nexfolio Company Profile Website PRD  
**(CMS-first, Section & Collection-Driven)**

---

## TL;DR

Nexfolio is a modern, CMS-driven company profile website built for brand showcase, SEO, and maintainability. All major sections and content are manageable through Payload CMS collections, ensuring every part of the site is easily customizable by non-developers.

---

## CMS-First Content Model

**Every section described below is powered by a Payload CMS Collection. All content, order, and visuals are editable from the CMS admin panel. Before building sections or UI, prioritize designing these collections and their relationships.**

### Collections (with CMS Fields)

1. **Globals/Settings**
   - Site Title, Meta/SEO defaults, Logo, Favicon, Brand Colors
   - Navigation Menu (array of links, orderable)
   - Footer Settings (text, links, social handles)

2. **About Us**
   - Company Summary (rich text)
   - Mission Statement (rich text)
   - Company Values (array: value title, description, icon)
   - Team Members (array: name, photo, role, bio, social links, orderable)
   - Hero Image/Banner

3. **Services**
   - Service Items (collection)
     - Name
     - Description (rich text)
     - Icon/Image
     - Order/Position

4. **Projects**
   - Project Items (collection)
     - Title
     - Cover Image(s) (gallery)
     - Description (rich text)
     - Technologies (multi-select/tag)
     - Category/Type (select or reference)
     - Year/Date
     - Featured? (boolean)
     - Testimonial (optional, text + author)
     - Gallery/Additional Images

   - Project Categories (collection, referenced by Project Items)

5. **Contact**
   - Contact Form Fields (editable labels, help text, required/optional toggles)
   - Success/Error Messages (CMS-editable)
   - Contact Details (email, phone, address, map link)
   - Social Media Links

6. **SEO & Tracking**
   - Per-Page Metadata (title, description, Open Graph image, etc)
   - Google Analytics ID, other tracking codes (script fields)
   - Sitemap.xml and robots.txt settings (toggle, editable fields)

7. **Error Pages**
   - Custom 404/500 content (title, message, illustration/image)

---

## Section-by-Section Functional Requirements  
_(All powered via CMS collections above)_

### 1. About Us
- Editable via CMS: company summary, mission, values, team
- Team: add/edit/reorder members, including images and bios

### 2. Our Services
- Dynamic list from Services collection
- Add/remove/reorder services, edit icons/images

### 3. Projects Portfolio
- CRUD for projects collection
- Each project: editable title, images, description, tech, category
- Categories managed in CMS (add/remove)
- Filtering/sorting by category, type, year (driven by CMS fields)
- Gallery/card view, project detail modal/page—all content via CMS

### 4. Contact
- Contact form fields, messages, and details all CMS-editable
- Form validation rules configurable in CMS
- Editable auto-response
- Success/error messages CMS-driven
- Contact details and social links editable in CMS

### 5. Navigation & Footer
- Top nav and footer links, order, and labels all managed via CMS
- Social links, branding, and legal text from CMS globals

### 6. Accessibility & SEO
- ARIA, color contrast, touch targets are implementation requirements
- All per-page meta (title, desc, OG) managed via CMS fields

### 7. Styling/UX
- Layout, colors, and components styled via TailwindCSS + shadcn/ui
- Branding elements (logos, images, color palette) are CMS-editable

### 8. Deployment & Integrations
- Frontend: Next.js, SSR, dynamic routing (SEO)
- Content: Payload CMS (headless, self-hosted/cloud)
- Database: Supabase (Postgres, authentication for admins)
- Deployment: Vercel
- Real-time updates via CMS-to-frontend connection

---

## User Stories (Reframed for CMS)

**Admin (CMS User)**
- Can add, edit, and reorder any content in About, Services, Projects, Team, Contact, Navigation, and Footer
- Can manage project categories and featured items without code
- Can edit all form labels/messages and contact details through the CMS
- Can preview all changes before publishing

**Potential Client**
- Can explore all company information, services, and projects via CMS-driven sections
- Can filter/browse projects by category/type (from CMS data)
- Can view always up-to-date company info, services, and contact details

---

## Data Model Relationships

- Project references Category (1:n)
- Service references Icon/Image asset (1:1)
- Team Member references Social Handles (array of objects)
- Navigation/Footer are arrays of links (orderable, can reference any collection)

---

## Success Metrics  
(CMS can expose analytics dashboard or connect to GA)

- Unique visitors, time on page, form submissions
- Number of projects/services updated via CMS
- Admin login frequency and content update count
- Project filter and detail page usage

---

## Technical Considerations

- All content sections must be fully editable from CMS
- Any addition/removal/reordering must require zero code
- Frontend fetches all display content from Payload CMS API
- Contact form, error pages, navigation, and footer all CMS-managed
- SEO/metadata per page from CMS fields

---

## Milestones & Sequencing (CMS-first)

1. **Design All Collections & Relationships in Payload CMS**
   - Set up all fields, validations, and references
   - Test admin UX for CRUD, reorder, and preview

2. **Frontend Setup (Next.js + TailwindCSS + shadcn/ui)**
   - Scaffold all routes/pages, consuming CMS data
   - Implement navigation/footer as driven by CMS

3. **Section Implementation**
   - Build About, Services, Projects, Contact—fetching all data from CMS collections

4. **Advanced Features**
   - Filtering, sorting, and gallery views powered by CMS data
   - Real-time updates, error/loading states

5. **Testing & Launch**
   - QA for CMS-driven workflows
   - Finalize accessibility, SEO, and analytics

---

## Narrative (CMS-first)

Imagine Nexfolio’s team, empowered to keep their website fresh: they log into CMS, update team bios, add a new project, tweak service descriptions—all reflected instantly on the public site. Every visual, section, and filter is powered by flexible CMS collections, freeing the business from developer bottlenecks and ensuring the website is always relevant and engaging.

---

## Techinal details

Refer to this information related to the codebase:

- CMS folder grouped at `src/app/(payload)/*`
- Frontend folder grouped at `src/app/(frontend)/*`
- UI components `src/components/*`
- Tailwindcss
- UI component Shadcn https://ui.shadcn.com/
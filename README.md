# Company Profile Template

A modern company profile website template built with **Next.js 15** and **Payload CMS** for dynamic content management. This template provides a complete solution for showcasing company services, projects, and team information with an integrated headless CMS for easy content updates.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Headless CMS**: Payload CMS for content management
- **Dynamic Content**: Manage services, projects, and team information
- **Responsive Design**: Mobile-first approach with modern UI components
- **File Management**: Integrated media handling with Vercel Blob Storage
- **Database**: PostgreSQL with Vercel Postgres adapter
- **Rich Text Editor**: Lexical editor for content creation
- **SEO Optimized**: Built-in SEO features

## 📸 Preview

### Home Page
![Home Page](public/Nexfolio%20-%20Home.gif)

### About Us
![About Us](public/Nexfolio%20-%20About%20Us.gif)

### Services
![Services](public/Nexfolio%20-%20Services.gif)

### Projects
![Projects](public/Nexfolio%20-%20Our%20Projects.gif)

### Project Detail
![Project Detail](public/Nexfolio%20-%20Project%20Detail.gif)

### Contact Us
![Contact Us](public/Nexfolio%20-%20Contact%20Us.gif)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **CMS**: Payload CMS 3.x
- **Database**: PostgreSQL (Vercel Postgres)
- **Storage**: Vercel Blob Storage
- **Deployment**: Vercel

## 🏗️ Project Structure

```
company-profile/
├── src/
│   ├── app/
│   │   ├── (frontend)/          # Public-facing pages
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── projects/
│   │   │   └── services/
│   │   ├── (payload)/           # CMS admin interface
│   │   └── api/                 # API routes
│   ├── collections/             # Payload CMS collections
│   │   ├── Media.ts
│   │   ├── Projects.ts
│   │   ├── Services.ts
│   │   └── Users.ts
│   ├── components/              # Reusable components
│   │   ├── sections/            # Page sections
│   │   └── ui/                  # UI components
│   └── lib/                     # Utility functions
├── public/                      # Static assets
└── migrations/                  # Database migrations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- PostgreSQL database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd company-profile
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   # Database
   DATABASE_URL="your-postgres-database-url"
   
   # Payload CMS
   PAYLOAD_SECRET="your-payload-secret-key"
   
   # Vercel Blob Storage (optional)
   BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"
   ```

4. **Set up the database**
   ```bash
   pnpm run setup:db
   # or
   npm run setup:db
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

6. **Open your browser**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - CMS Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

### First-time Setup

1. **Create an admin user**
   - Navigate to `/admin` 
   - Create your first admin account

2. **Add content**
   - Add services in the Services collection
   - Create projects in the Projects collection
   - Upload media files for your content

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm setup:db` - Run database migrations
- `pnpm setup:build` - Setup database and build for production
- `pnpm generate:types` - Generate TypeScript types from Payload

## 🎨 Customization

### Adding New Content Types

1. Create a new collection in `src/collections/`
2. Add it to the `payload.config.ts` file
3. Generate types: `pnpm generate:types`
4. Create components to display the content

### Styling

The project uses Tailwind CSS with shadcn/ui components. You can:
- Modify styles in component files
- Update the Tailwind config
- Add custom CSS in `globals.css`

### Content Management

Access the CMS at `/admin` to:
- Manage services and their descriptions
- Add/edit projects with images and details
- Upload and organize media files
- Configure project categories

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Start the production server**
   ```bash
   pnpm start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Payload CMS documentation](https://payloadcms.com/docs)
- Create an issue in this repository

---

**Note**: This is a template project designed to be customized for your specific company needs. The CMS allows for easy content management without requiring code changes for regular updates.

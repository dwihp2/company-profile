// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { migrations } from './migrations'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Projects } from './collections/Projects'
import { ProjectCategories } from './collections/ProjectCategories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Services, Projects, ProjectCategories],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: process.env.NODE_ENV === 'production'
    ? vercelPostgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI || '',
      },
      prodMigrations: migrations,
    })
    : postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI || '',
        ssl: (process.env.NODE_ENV as string) === 'production' ? {
          rejectUnauthorized: false
        } : undefined,
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000,
      },
      prodMigrations: migrations,
    }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.VERCEL_BLOB_STORAGE_TOKEN || '',
      clientUploads: true,
    }),
  ],
})

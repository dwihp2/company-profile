#!/bin/bash
# Configure SSL certificate handling for production database connections
# This is needed when connecting to databases with self-signed certificates
export PAYLOAD_CONFIG_DISABLE_REMOTE_SSL_VALIDATION=true

# Check if DATABASE_URI is set
if [ -z "$DATABASE_URI" ]; then
  echo "WARNING: DATABASE_URI is not set. Building without database connection."
else
  # Following Payload CMS best practices for migrations:
  # https://payloadcms.com/docs/database/migrations#when-to-run-migrations
  #
  # Don't run migrations during build. Instead, let Payload handle migrations
  # automatically on server startup in production. Migrations should run on
  # first request, not during build time.
  echo "Database detected. Migrations will run automatically on first request."
fi

# Run the build command
echo "Generating Payload CMS import map..."
pnpm payload generate:importmap

echo "Building the application..."
pnpm build

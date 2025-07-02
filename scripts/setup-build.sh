#!/bin/bash
# Set NODE_TLS_REJECT_UNAUTHORIZED=0 for the build
export NODE_TLS_REJECT_UNAUTHORIZED=0
export PAYLOAD_CONFIG_DISABLE_REMOTE_SSL_VALIDATION=true

# Check if DATABASE_URI is set
if [ -z "$DATABASE_URI" ]; then
  echo "WARNING: DATABASE_URI is not set. Skipping database setup."
else
  # Try to run database migrations, but don't fail if they don't work
  echo "Attempting to run database migrations..."
  pnpm migrate:fresh || echo "Database migration failed, but continuing with build..."
fi

# Run the build command with fallback data if needed
echo "Building the application..."
pnpm build:vercel

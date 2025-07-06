#!/bin/bash
# Vercel build script for Payload CMS
# This script handles the build process for Vercel deployment

echo "Starting Vercel build process..."

# Set environment variables
export NODE_ENV=production
export PAYLOAD_CONFIG_DISABLE_REMOTE_SSL_VALIDATION=true

# Check if DATABASE_URI is set
if [ -z "$DATABASE_URI" ]; then
  echo "WARNING: DATABASE_URI is not set. Building without database connection."
  echo "Build will proceed but may fail during runtime without database."
else
  echo "Database URI detected. Building with database connection."
fi

# Generate Payload types and import map
echo "Generating Payload types..."
pnpm payload generate:types || echo "Warning: Could not generate types"

echo "Generating import map..."
pnpm payload generate:importmap || echo "Warning: Could not generate import map"

# Build the Next.js application
echo "Building Next.js application..."
pnpm build

echo "Build completed successfully!"

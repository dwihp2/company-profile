#!/bin/bash
# Set NODE_TLS_REJECT_UNAUTHORIZED=0 for the build
export NODE_TLS_REJECT_UNAUTHORIZED=0

# Run the build command
pnpm build

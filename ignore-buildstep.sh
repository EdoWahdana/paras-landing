#!/bin/bash

echo "COMMIT_MESSAGE: $NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE"

if [[ "$NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE" == *"vercel-deploy"* ]]; then
  echo "Build can proceed"
  exit 1;

else 
  echo "Build cancelled"
  exit 0;
fi
#!/bin/bash

echo "COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *"vercel-deploy"* ]]; then
  echo "Build can proceed"
  exit 1;

else 
  echo "Build cancelled"
  exit 0;
fi
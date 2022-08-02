#!/bin/bash

echo "COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *"ignore-deploy"* ]]; then
  echo "Build ignored"
  exit 0;

else 
  echo "Build started"
  exit 1;
fi
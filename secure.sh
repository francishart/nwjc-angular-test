#! /bin/bash
echo Running SAM Secure script...

SAM_BACKEND="sam-backend.ts"

# Remove backend file.
echo "Deleting $SAM_BACKEND"
rm -f $SAM_BACKEND

# Concatenate all of the TS Files.
echo Concatenating to $SAM_BACKEND
cat ts/**/*.ts >> SAM_BACKEND
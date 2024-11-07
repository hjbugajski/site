#!/bin/bash

output=$(pnpm migrate:status)

if echo "$output" | grep -q "│ *No *│"; then
  echo "Migrations not run. Running pnpm migrate..."
  pnpm migrate
else
  echo "No migration needed."
fi

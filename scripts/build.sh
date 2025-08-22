#!/bin/bash

# SAISA Website Build Script
# This script builds the website for production with optimizations

echo "🚀 Building SAISA Website for Production..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output: dist/"
    echo "📊 Build size:"
    du -sh dist/
    
    # Optional: Start preview server
    read -p "🌐 Start preview server? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🚀 Starting preview server..."
        npm run preview
    fi
else
    echo "❌ Build failed!"
    exit 1
fi

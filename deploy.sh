#!/bin/bash

# 🚀 Co-Portfolio GitHub & Vercel Deployment Script
# This script helps push your portfolio to GitHub and deploy on Vercel

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  Co-Portfolio: GitHub & Vercel Deployment Helper  🚀     ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git is not initialized. Run: git init"
    exit 1
fi

echo "✅ Git repository found"
echo ""

# Get GitHub username
read -p "📝 Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Construct repository URL
REPO_URL="https://github.com/${GITHUB_USERNAME}/Co-Portfolio.git"

echo ""
echo "📋 Repository Information:"
echo "   URL: $REPO_URL"
echo "   Branch: main"
echo ""

# Check if remote already exists
if git remote | grep -q origin; then
    echo "⚠️  Remote 'origin' already exists"
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote remove origin
        echo "✅ Removed existing remote"
    else
        echo "Using existing remote"
    fi
else
    echo "➕ Adding remote origin..."
fi

if ! git remote | grep -q origin; then
    git remote add origin "$REPO_URL"
    echo "✅ Remote 'origin' added"
fi

# Verify remote
echo ""
echo "🔍 Verifying remote..."
git remote -v
echo ""

# Rename branch to main if needed
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Renaming branch to 'main'..."
    git branch -M main
    echo "✅ Branch renamed to main"
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
echo ""

if git push -u origin main; then
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║                   🎉 Push Successful! 🎉                   ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo ""
    echo "✅ Your code is now on GitHub!"
    echo ""
    echo "📌 Repository URL:"
    echo "   https://github.com/${GITHUB_USERNAME}/Co-Portfolio"
    echo ""
    echo "🚀 Next Steps:"
    echo ""
    echo "   1️⃣  Go to Vercel: https://vercel.com/new"
    echo "   2️⃣  Click 'Import Project'"
    echo "   3️⃣  Connect GitHub account"
    echo "   4️⃣  Select 'Co-Portfolio' repository"
    echo "   5️⃣  Click 'Deploy'"
    echo "   6️⃣  Add custom domain (optional)"
    echo ""
    echo "📖 Full Guide:"
    echo "   Read GITHUB_VERCEL_SETUP.md for detailed instructions"
    echo ""
else
    echo ""
    echo "❌ Push failed. Check your GitHub credentials and try again."
    exit 1
fi

echo "═════════════════════════════════════════════════════════════"
echo ""

# Web Interface for AI Prompts Collection

This directory contains the web-based visualization system for browsing and using AI prompts.

## Features

- 🔍 **Search & Filter**: Find prompts by title, tags, content, category, difficulty, or language
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, professional interface with smooth animations
- 📋 **One-Click Copy**: Copy prompts directly to your clipboard
- 🏷️ **Smart Categorization**: Organized by domain (creativity, productivity, statistics, surveys)
- ⚡ **Fast Loading**: Optimized for quick browsing and searching

## Usage

### Local Development
```bash
# Build the web interface
npm run build-web

# Open web/index.html in your browser
```

### GitHub Pages
The web interface is automatically deployed to GitHub Pages when you push to the main branch.

## File Structure

- `index.html` - Main web interface
- `prompts-index.json` - Generated index of all prompts (auto-generated)
- `README.md` - This file

## How It Works

1. **Index Generation**: The `build-index.mjs` script reads all prompt files and creates a JSON index
2. **Web Interface**: The HTML file loads the JSON index and provides an interactive browsing experience
3. **Search & Filter**: JavaScript handles real-time filtering and search functionality
4. **Modal Display**: Full prompt content is displayed in a modal overlay
5. **Copy Functionality**: Prompts can be copied to clipboard with one click

## Customization

You can customize the web interface by modifying:
- `index.html` - Change colors, layout, or add features
- CSS styles - Modify the appearance and responsive behavior
- JavaScript - Add new filtering options or features

## Deployment

The web interface is automatically deployed to GitHub Pages via the `.github/workflows/deploy-pages.yml` workflow.

# AI Prompts Collection

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Validation Status](https://github.com/yourusername/ai-prompts-collection/workflows/Validate%20Prompts/badge.svg)](https://github.com/yourusername/ai-prompts-collection/actions)

A professional, curated collection of AI prompts with structured metadata, validation, and multi-language support. This repository provides ready-to-use prompts for various domains including statistics, surveys, productivity, and more.

## 🚀 Quick Start

### Option 1: Use the Web Interface (Recommended)
Visit the live web interface at: **[Your GitHub Pages URL]**

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/ai-prompts-collection.git
cd ai-prompts-collection

# Install dependencies
npm install

# Build and view web interface
npm run dev

# Open web/index.html in your browser
```

### Option 3: Command Line
```bash
# Validate all prompts
npm run validate
```

## 📁 Repository Structure

```
ai-prompts-collection/
├── README.md                           # This file
├── LICENSE                             # MIT License
├── CONTRIBUTING.md                     # Contribution guidelines
├── CODE_OF_CONDUCT.md                  # Code of conduct
├── SECURITY.md                         # Security policy
├── package.json                        # Node.js dependencies and scripts
├── .gitignore                          # Git ignore rules
├── .github/                            # GitHub templates and workflows
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── prompt_request.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       ├── validate-prompts.yml        # CI/CD validation
│       └── deploy-pages.yml           # GitHub Pages deployment
├── schema/
│   └── prompt.schema.json             # JSON schema for validation
├── tools/
│   ├── validate.mjs                   # Validation script
│   └── build-index.mjs               # Web interface index builder
├── web/                               # Web interface for browsing prompts
│   ├── index.html                    # Main web interface
│   ├── prompts-index.json           # Generated prompts index
│   └── README.md                     # Web interface documentation
├── prompts/                           # English prompts
│   ├── creativity/                    # Nano Banana-inspired creative prompts
│   │   ├── nano-banana-brainstorm.md
│   │   ├── creative-writing-sparks.md
│   │   ├── problem-solving-ninja.md
│   │   └── rapid-prototyping.md
│   ├── productivity/                  # Productivity and task management
│   │   ├── micro-task-breakdown.md
│   │   └── energy-management.md
│   ├── statistics/
│   │   └── lfs-weighted-mean.md
│   └── surveys/
│       └── ai-interviewer.md
├── prompts_ar/                        # Arabic prompts
│   └── surveys/
│       └── ai-interviewer.md
└── docs/
    └── index.md                       # Documentation index
```

## 🎯 How to Use

### 🌐 Web Interface Features
- **🔍 Smart Search**: Find prompts by title, tags, content, or keywords
- **🏷️ Advanced Filtering**: Filter by category, difficulty, language, and more
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **📋 One-Click Copy**: Copy prompts directly to your clipboard
- **🎨 Beautiful UI**: Modern, clean interface with smooth animations
- **⚡ Fast & Lightweight**: Quick loading and smooth performance

### 📂 Browse Prompts
Explore prompts by category:
- **Statistics**: Data analysis and statistical computing prompts
- **Surveys**: Research and data collection prompts
- **Creativity**: Nano Banana-inspired creative prompts for brainstorming, writing, and problem-solving
- **Productivity**: Task management, energy optimization, and workflow prompts
- **Teaching**: Educational and training prompts (coming soon)

### 2. Copy and Customize
Each prompt includes:
- **Front-matter metadata** for easy categorization
- **System message** defining the AI's role
- **User template** showing input structure
- **Example responses** demonstrating expected output
- **Best practices** and tips for optimal results

### 3. Validate Locally
Ensure your customizations maintain proper structure:
```bash
npm run validate
```

## 📋 Prompt Structure

Each prompt follows a standardized format with YAML front-matter:

```yaml
---
id: unique-prompt-identifier
title: Descriptive Title
language: en|ar|fr
domain: statistics|surveys|productivity|teaching
tags: [array, of, relevant, tags]
audience: target-audience
model_tips:
  prefers_chain_of_thought: true|false
  temperature: 0.0-1.0
last_updated: YYYY-MM-DD
attribution: "© Your Name (License)"
related: [related, prompt, ids]
---
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Adding a New Prompt

1. **Choose a category** or create a new one
2. **Follow the naming convention**: `kebab-case.md`
3. **Include complete front-matter** with all required fields
4. **Write clear, actionable content**
5. **Test with your preferred AI model**
6. **Submit a pull request**

### Prompt Design Principles

- **Clear roles**: Define system, user, and assistant roles explicitly
- **Specific constraints**: Include relevant limitations and requirements
- **Concrete examples**: Provide actionable examples when helpful
- **Safety first**: Include safety guidelines and warnings
- **Documentation**: Explain the use case and expected outcomes

## 🔧 Development

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn package manager

### Local Development
```bash
# Install dependencies
npm install

# Validate prompts
npm run validate

# Run validation on specific files
node tools/validate.mjs
```

### Dependencies
- **ajv**: JSON schema validation
- **ajv-formats**: Additional format validators
- **gray-matter**: YAML front-matter parsing

## 📊 Validation

All prompts are automatically validated against our JSON schema to ensure:
- ✅ Complete front-matter with required fields
- ✅ Proper data types and formats
- ✅ Valid date formats (YYYY-MM-DD)
- ✅ Correct ID patterns (kebab-case)
- ✅ Consistent structure across languages

## 🌍 Multi-Language Support

- **English (en)**: Primary language for most prompts
- **Arabic (ar)**: Arabic translations of key prompts
- **French (fr)**: French support planned for future releases

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Contributors who help improve and expand this collection
- The open-source community for inspiration and best practices
- AI researchers and practitioners who share their expertise
- **Nano Banana Prompts** for inspiring the creative prompt collection with their innovative, concise approach

## 📞 Support

- **Issues**: [Report bugs or request features](https://github.com/yourusername/ai-prompts-collection/issues)
- **Discussions**: [Join community conversations](https://github.com/yourusername/ai-prompts-collection/discussions)
- **Security**: [Report security vulnerabilities](SECURITY.md)

## 🚀 Future Plans

- [ ] Expand prompt categories (productivity, teaching, coding)
- [ ] Add more language support (French, Spanish, etc.)
- [ ] Create prompt templates and generators
- [ ] Build a web interface for browsing prompts
- [ ] Add prompt performance metrics
- [ ] Integrate with popular AI platforms

---

**Made with ❤️ for the AI community**

*This repository is maintained by Yamen Helel and the open-source community.*

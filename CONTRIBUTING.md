# Contributing to AI Prompts Collection

Thank you for your interest in contributing to the AI Prompts Collection! This document provides guidelines for contributing to this project.

## How to Contribute

### 1. Reporting Issues

Before creating an issue, please check if a similar issue already exists. If not, you can create a new issue using our issue templates:

- **Bug Report**: Use this template for reporting bugs or validation errors
- **Prompt Request**: Use this template for suggesting new prompts or improvements

### 2. Adding New Prompts

#### Prompt Structure
Each prompt must be a Markdown file with YAML front-matter containing the following required fields:

```yaml
---
id: unique-prompt-identifier
title: Descriptive Title
language: en|ar|fr
domain: category (e.g., statistics, surveys, productivity)
tags: [array, of, relevant, tags]
audience: target audience
model_tips:
  prefers_chain_of_thought: true|false
  temperature: 0.0-1.0
last_updated: YYYY-MM-DD
attribution: "© Your Name (License)"
related: [array, of, related, prompt, ids]
---
```

#### Naming Conventions
- **File names**: Use kebab-case (e.g., `ai-interviewer.md`)
- **IDs**: Use kebab-case and be descriptive (e.g., `weighted-mean-explainer`)
- **Tags**: Use lowercase, hyphenated words

#### Directory Structure
- English prompts go in `prompts/`
- Arabic prompts go in `prompts_ar/`
- Organize by domain (statistics, surveys, productivity, etc.)

#### Content Guidelines
- **Clear roles**: Define system, user, and assistant roles clearly
- **Specific constraints**: Include relevant limitations and requirements
- **Examples**: Provide concrete examples when helpful
- **Safety considerations**: Include any safety guidelines or warnings

### 3. Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-new-prompt`)
3. Add your prompt(s) following the structure above
4. Run validation: `npm run validate`
5. Commit your changes (`git commit -m 'Add amazing new prompt'`)
6. Push to the branch (`git push origin feature/amazing-new-prompt`)
7. Open a Pull Request

### 4. Validation

All prompts must pass validation before being merged. The validation checks:
- Required front-matter fields
- Correct data types and formats
- Valid date formats
- Proper ID patterns

Run validation locally:
```bash
npm install
npm run validate
```

### 5. Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

### 6. License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## Getting Help

If you have questions or need help:
1. Check existing issues and discussions
2. Create a new issue with the "question" label
3. Join our community discussions

## Recognition

Contributors will be recognized in our README and documentation. Thank you for helping make this collection better!

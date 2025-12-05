# Contributing to components.build

Thank you for your interest in contributing to the components.build specification! This document outlines the process for contributing to the project.

## About This Project

components.build is an open-source specification for building modern, composable, and accessible UI components. Contributions help improve the guidelines, add clarity, and ensure the spec reflects real-world best practices from the component library ecosystem.

## Types of Contributions

We welcome various types of contributions:

- **Documentation improvements** - Fix typos, clarify explanations, improve examples
- **New sections** - Propose new topics or patterns that should be covered
- **Code examples** - Add or improve component examples throughout the spec
- **Accessibility guidance** - Enhance accessibility recommendations and patterns
- **Framework examples** - Add examples for Vue, Svelte, Angular, or other frameworks
- **Case studies** - Share real-world examples of components following the spec

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- Familiarity with React/TypeScript (for examples)
- Understanding of modern component architecture

### Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/components.build.git`
3. Install dependencies: `pnpm install`
4. Create a new branch: `git checkout -b feature/your-contribution`
5. Start the dev server: `pnpm dev`
6. Make your changes and preview at [http://localhost:3000](http://localhost:3000)

## Making Changes

### Documentation Content

Documentation lives in `content/docs/` as MDX files. When editing:

- Follow the existing tone and style (technical but approachable)
- Use clear, concise language appropriate for senior engineers
- Include code examples where helpful
- Add proper frontmatter (title, description)
- Link to related sections using relative paths
- Cite sources or real-world examples when making claims

### Code Examples

When adding code examples:

- Use TypeScript with proper types
- Follow React best practices
- Ensure examples are self-contained and runnable
- Include comments explaining key concepts
- Make examples accessible by default
- Keep examples minimal but realistic

### Code Style

- The project uses [Biome](https://biomejs.dev/) for linting and formatting
- Run `pnpm run check` before committing (if available, otherwise Biome will auto-format)
- Follow existing MDX formatting conventions
- Use semantic HTML in examples
- Follow Tailwind CSS conventions for styling examples

## Pull Request Guidelines

1. **Ensure your PR has a clear purpose**
   - Fix a specific issue or add defined value
   - Reference related issues if applicable

2. **Write a descriptive PR description**
   - Explain what changes you made and why
   - Include before/after comparisons for significant changes
   - Note any breaking changes or impacts

3. **Keep changes focused**
   - One feature or fix per PR
   - Don't mix unrelated changes

4. **Follow the specification's philosophy**
   - Align with the core principles
   - Ensure recommendations are framework-agnostic where possible
   - Prioritize accessibility and composability

5. **Update related documentation**
   - If you add a new section, update navigation/links
   - Ensure examples are consistent across pages

6. **Test your changes**
   - Preview the site locally
   - Check all links work
   - Verify code examples are accurate
   - Test on mobile viewports

## Commit Messages

Write clear, descriptive commit messages:

- Use the imperative mood ("Add" not "Added")
- Keep the first line under 72 characters
- Provide additional context in the body if needed
- Examples:
  - `Add section on component composition patterns`
  - `Fix typo in accessibility guidelines`
  - `Update TypeScript examples to use strict mode`

## Reporting Issues

When reporting issues:

1. Check if the issue already exists
2. Use a clear, descriptive title
3. Provide context:
   - What section/page is affected?
   - What's incorrect or missing?
   - What should it say instead?
4. For bugs: Include steps to reproduce
5. For suggestions: Explain the value and use cases

## Style Guide

### Writing Style

- **Audience**: Senior front-end engineers and open-source maintainers
- **Tone**: Technical, authoritative, but not prescriptive
- **Voice**: Second person ("you") when addressing developers
- **Examples**: Use realistic component scenarios

### Technical Guidelines

- Prefer "component" over "widget" or "element"
- Use "composable" not "modular" when discussing composition
- Reference WCAG 2.1 AA as the accessibility baseline
- Cite framework documentation when referencing framework-specific features

## Questions or Need Help?

- Open an issue for questions about contributing
- Tag issues with `question` label
- Join discussions in existing issues
- Reach out to maintainers if unclear about direction

## Code of Conduct

This project follows a Code of Conduct. By participating, you agree to uphold professional, respectful, and inclusive behavior.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

## Recognition

Contributors will be recognized in the project. Significant contributions may be highlighted in release notes or documentation.

Thank you for helping make components.build a valuable resource for the open-source community!

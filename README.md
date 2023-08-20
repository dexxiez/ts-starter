Sure, here's a Markdown-formatted README for your "ts-starter" project:

---

# ts-starter

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![GitHub package.json version](https://img.shields.io/github/package-json/v/dexxiez/ts-starter)

A template for TypeScript projects.

## Table of Contents

- [ts-starter](#ts-starter)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)
  - [License](#license)

## Description

"ts-starter" is a starter template for TypeScript projects. It provides a basic project structure and essential development tools to help you get started quickly with your TypeScript projects.

## Features

- TypeScript support with ES Modules.
- Build process using "tsup" for CommonJS format, minification, and sourcemaps.
- Development mode with auto-reloading using "nodemon" and "tsup" in ESM format.
- Convenient script for both development and production builds.
- License: ISC (Open Source)

## Installation

1. Clone this repository: `git clone https://github.com/dexxiez/ts-starter.git`
2. Navigate to the project directory: `cd ts-starter`
3. Install dependencies: `pnpm install`

## Usage

To start development mode with auto-reloading:

```bash
pnpm dev
```

To build for production:

```bash
pnpm build
```

## Scripts

- `build`: Builds the project using "tsup" with options for CommonJS format, minification, sourcemaps, and cleaning.
- `dev`: Runs the development mode using "concurrently" to start both "tsup" for auto-reloading and "nodemon" for watching changes in the output file.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

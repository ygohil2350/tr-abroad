# tr-abroad

This project is a minimal setup to get React working with TypeScript and Vite. It includes HMR (Hot Module Replacement) and some ESLint rules.

## Demo

- Link: http://consultining-web.s3-website.eu-north-1.amazonaws.com/

## Features

- React with TypeScript
- Vite for fast builds and HMR
- ESLint configuration for code quality

## Getting Started

### Prerequisites

- Node.js
- npm or pnpm

### Installation

1. Clone the repository:

```
git clone https://github.com/ygohil2350/tr-abroad.git
```

2. Navigate to the project directory:

```
cd tr-abroad
```

3. Install dependencies:

```
pnpm install
```

### Running the Project

To start the development server:

```
pnpm run dev
```

### Building the Project:

To create a production build:

```
pnpm run build
```

## ESLint Configuration

The project uses ESLint with the following configuration:

- Type-aware lint rules for better code quality
- React plugin for linting React code

## Sync with AWS

Build The Project:

```
npm run build
```

Sync The Buket with local files:

```
aws s3 sync dist/ s3://consultining-web/
```

## License

This project is licensed under the MIT License.

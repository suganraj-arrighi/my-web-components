# My Web Components

This repository is an Angular monorepo designed to house and manage various reusable web components. It includes a demonstration shell application (`demo-shell`) that consumes these components, and several component libraries like `dynamic-grid-visualizer` and `status-indicator`.

## Project Structure

The project is organized into a monorepo structure, with individual applications and libraries residing under the `projects/` directory.

```
.
├───.angular/                 # Angular specific configuration and cache
├───.vscode/                  # VSCode specific settings
├───dist/                     # Compiled output for applications and libraries
├───node_modules/             # Node.js dependencies
├───projects/
│   ├───demo-shell/           # The main demo application
│   │   ├───src/              # Application source code
│   │   └───...
│   ├───dynamic-grid-visualizer/  # Library for dynamic grid visualization component
│   │   ├───src/                  # Library source code
│   │   └───...
│   └───status-indicator/     # Library for status indicator component
│       ├───src/              # Library source code
│       └───...
├───angular.json              # Angular workspace configuration
├───package.json              # Project dependencies and scripts
├───tsconfig.json             # TypeScript configuration
└───...
```

## Getting Started

To get started with this project, ensure you have the following prerequisites installed:

### Prerequisites

*   **Node.js**: [LTS version recommended](https://nodejs.org/)
*   **npm**: Comes with Node.js
*   **Angular CLI**: Install globally using `npm install -g @angular/cli`

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sugan/my-web-components.git
    cd my-web-components
    ```
2.  Install the project dependencies:
    ```bash
    npm install
    ```
## Building the Libraries

The component libraries (`dynamic-grid-visualizer`, `status-indicator`) need to be built to be consumed by other applications or for publishing.

*   To build the `dynamic-grid-visualizer` library:
    ```bash
    npm run build:grid
    ```
*   To build the `status-indicator` library:
    ```bash
    npm run build:status
    ```
*   To build both libraries:
    ```bash
    npm run build:all
    ```
*   To build all projects in the workspace (including `demo-shell` and libraries):
    ```bash
    ng build
    ```
    The build artifacts will be stored in the `dist/` directory.
    
## Running the Demo Application

The `demo-shell` application serves as a showcase for the web components developed within this monorepo.

To run the demo application:

```bash
npm start
# or
ng serve demo-shell
```

Open your browser to `http://localhost:4200/` (or the port indicated in your console). The application will automatically reload if you change any of the source files.

## Building the Libraries

The component libraries (`dynamic-grid-visualizer`, `status-indicator`) need to be built to be consumed by other applications or for publishing.

*   To build the `dynamic-grid-visualizer` library:
    ```bash
    npm run build:grid
    ```
*   To build the `status-indicator` library:
    ```bash
    npm run build:status
    ```
*   To build both libraries:
    ```bash
    npm run build:all
    ```
*   To build all projects in the workspace (including `demo-shell` and libraries):
    ```bash
    ng build
    ```
    The build artifacts will be stored in the `dist/` directory.

## Component Descriptions

### Dynamic Grid Visualizer

This library provides a reusable web component for visualizing dynamic grid layouts. It is designed to display data in a flexible and responsive grid format, adapting to various content and screen sizes.

### Status Indicator

This library offers a simple, reusable web component to display various statuses. It can be customized to show different states (e.g., success, error, pending, warning) with distinct visual cues.


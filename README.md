
# Basic Flow Configurator

This project is a **Basic Flow Configurator** built using **React.js**, **React Flow**, **Material UI**, and **Tailwind CSS**. It provides a graphical interface to visualize and manage workflows, specifically designed to integrate with a backend system that scans commits and identifies entry points for flow configurations.

## Features

- **Graphical Interface**: Visualize the relationships between different components in your system, including libraries, parameters, and response objects.
- **Interactive Nodes**: Nodes represent different parts of the system, such as files and functions, and are connected to illustrate the flow of data.
- **Customization**: Easily add, edit, or remove nodes and edges using the interface.
- **Dependency Management**: Select dependencies to mock or connect to databases directly from the UI.
- **Responsive Design**: The UI is fully responsive, making it accessible on different screen sizes.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **React Flow**: A library for building node-based graphs, used to create the interactive flow diagrams.
- **Material UI**: A popular React UI framework used for styling components.
- **Tailwind CSS**: A utility-first CSS framework that allows for fast and efficient styling.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Rishurp/Flow-Configurator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vite-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

- **Add Methods**: Use the “+ Add Methods” button to introduce new methods or nodes into your flow.
- **Connect Nodes**: Click and drag from one node's handle to another to create an edge (connection).
- **Mock Dependencies**: Select dependencies on the right panel to include or exclude them from the flow.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss potential changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


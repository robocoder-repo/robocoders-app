# Robocoders.ai CLI Application

This Node.js application provides a command-line interface for interacting with the Robocoders.ai API. It allows users to communicate with different AI agents for various coding tasks.

## Features

- Interact with GeneralCodingAgent for general coding tasks
- Use RepoAgent for repository-related operations
- Communicate with FrontEndAgent for UI development tasks
- Execute system commands with unrestricted access

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/robocoder-repo/robocoders-app.git
   ```

2. Navigate to the project directory:
   ```
   cd robocoders-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up your environment variables:
   Create a `.env` file in the root directory and add your Robocoders.ai API token:
   ```
   ROBOCODERS_API_TOKEN=your_api_token_here
   ```

## Usage

Run the application using Node.js:

```
node index.js [command] [prompt]
```

Available commands:
- `general`: Interact with GeneralCodingAgent
- `repo`: Interact with RepoAgent
- `frontend`: Interact with FrontEndAgent
- `execute`: Execute a system command

Examples:
```
node index.js general "Write a Python function to calculate factorial"
node index.js repo "List all branches in the current repository"
node index.js frontend "Create a React component for a login form"
node index.js execute "ls -la"
```

## Security Note

This application has unrestricted system access. Use with caution and ensure you understand the implications of executing system commands.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

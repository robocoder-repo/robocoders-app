
require('dotenv').config();
const { program } = require('commander');
const axios = require('axios');
const { exec } = require('child_process');

const API_BASE_URL = 'https://api.robocoders.ai';
const ACCESS_TOKEN = process.env.ROBOCODERS_API_TOKEN;

let sessionId = null;

async function createSession() {
  try {
    const response = await axios.get(`${API_BASE_URL}/create-session`, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
    });
    sessionId = response.data.sid;
    console.log(`Session created with ID: ${sessionId}`);
  } catch (error) {
    console.error('Error creating session:', error.response?.data || error.message);
  }
}

async function chat(agent, prompt) {
  if (!sessionId) {
    await createSession();
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, {
      sid: sessionId,
      prompt,
      agent
    }, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
    });
    console.log('Agent Response:', response.data);
  } catch (error) {
    console.error('Error chatting with agent:', error.response?.data || error.message);
  }
}

function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
    }
    console.log(`Command output: ${stdout}`);
  });
}

program
  .version('1.0.0')
  .description('Robocoders.ai CLI');

program
  .command('general <prompt>')
  .description('Chat with GeneralCodingAgent')
  .action((prompt) => chat('GeneralCodingAgent', prompt));

program
  .command('repo <prompt>')
  .description('Chat with RepoAgent')
  .action((prompt) => chat('RepoAgent', prompt));

program
  .command('frontend <prompt>')
  .description('Chat with FrontEndAgent')
  .action((prompt) => chat('FrontEndAgent', prompt));

program
  .command('execute <command>')
  .description('Execute a system command')
  .action((command) => executeCommand(command));

program.parse(process.argv);

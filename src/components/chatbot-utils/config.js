import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'GGBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`),createChatBotMessage("Please provide your name :)")],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#374151',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello') || message.includes('hi')) {
      actions.handleHello();
    } else if (!message.startsWith('/') && !message.match(/[.,!?"';:<>|~@#%^&*()]/)) {
      // Assuming messages starting with '/' are commands
      actions.handleName(message); // Trigger the name handling with the full message
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
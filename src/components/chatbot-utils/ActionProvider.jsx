import React from "react";
let trimmedName;
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleName = (name) => {
    // Extract the name from the full message
    trimmedName = name.trim();

    // Optional: Handle cases where no name is provided
    if (!trimmedName) {
      const botMessage = createChatBotMessage("Please, tell me your name.");
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
      return;
    }

    const botMessage = createChatBotMessage(
      `Nice to meet you, ${trimmedName}!`
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleName,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

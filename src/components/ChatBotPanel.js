import React, { useState } from "react";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbot-utils/config";
import ActionProvider from "./chatbot-utils/ActionProvider";
import MessageParser from "./chatbot-utils/MessageParser";
import "./chatbot-utils/ChatBotPanel.css";

export default function ChatBotPanel() {
  let [offset, setOffset] = useState("right-[-399px]");
  const toggleBotClick = () => {
    if(offset === "right-[-399px]")
    {
        setOffset("right-4");
    }
    else{
        setOffset("right-[-399px]")
    }
  };
  return (
    <>
      <div
        className={
          "z-20 fixed top-4 p-4 shadow-lg px-0 py-0 " + offset + " transition-all duration-300"
        }
      >
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        ></Chatbot>
      </div>
      <button
        class="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium border rounded-full w-16 h-16 bg-gray-800 hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        onClick={toggleBotClick}
      >
        <svg
          xmlns=" http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            class="border-gray-200"
          ></path>
        </svg>
      </button>
    </>
  );
}
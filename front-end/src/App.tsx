import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const OpenCloseChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() === "") return;

      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="container">
      <div className={`chatbot_container ${isOpen ? "open" : ""}`}>
        <div className="chatbot_header" onClick={OpenCloseChat}>
          <span>OpenAI Bot</span>
        </div>

        <div className="chatbot_chat">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">{msg}</div>
            ))}
          </div>

          <div className="chatbot_inputarea">
            <textarea
              className="chat_input"
              placeholder="Scrivi un messaggio..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [, setLoading] = useState(false);

  const OpenCloseChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() === "") return;

      setMessages([...messages, input]);
      setInput("");

      setLoading(true);

      await new Promise(() => chiedi_al_bot(input));

    }
  };

  const chiedi_al_bot = async (richiesta_utente: string) => {
    try {
      const response = await axios.post("il_vostro_dominio/chatBot/userRequest", {
        richiesta: richiesta_utente,
      });

      setMessages((prev) => [...prev, `${response.data.content}`]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, "Errore nella richiesta."]);
    } finally {
      setLoading(false);
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
              <div key={index} className="message">
                {msg}
              </div>
            ))}
          </div>

          <div className="chatbot_inputarea">
            <textarea className="chat_input" placeholder="Scrivi un messaggio..." value={input} onChange={handleInputChange} onKeyDown={handleKeyPress} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

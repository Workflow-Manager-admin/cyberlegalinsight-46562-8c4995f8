import React, { useState } from "react";
import UIIcons from "./UIIcons";
import "./SidebarChatAssistant.css";

// PUBLIC_INTERFACE
/**
 * SidebarChatAssistant
 * Collapsible sidebar for real-time chat assistance.
 */
function SidebarChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "assistant", text: "Hi! I'm here to help with cyber or contract questions." },
  ]);
  const [input, setInput] = useState("");

  // PUBLIC_INTERFACE
  const submitMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Placeholder for assistant AI reply (stub)
    setTimeout(() => {
      setMessages(msgs =>
        [...msgs, { from: "assistant", text: "I'm an intelligent assistant ready to help!" }]
      );
    }, 1000);
  };

  return (
    <aside className={`chat-sidebar${open ? " open" : ""}`}>
      <button
        className="chat-toggle"
        aria-label={open ? "Close chat sidebar" : "Open chat sidebar"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <UIIcons.Close /> : <UIIcons.ChatBubble />}
      </button>
      <div className="chat-panel" tabIndex={open ? 0 : -1} aria-hidden={!open}>
        <div className="chat-header">
          <span>
            <UIIcons.AssistantAvatar style={{ fontSize: 22, marginRight: 4 }} /> Assistant
          </span>
        </div>
        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg-${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>
        <form className="chat-input-row" onSubmit={submitMessage}>
          <input
            type="text"
            placeholder="Ask a question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            className="chat-input"
            disabled={!open}
          />
          <button type="submit" className="chat-send-btn" disabled={!input.trim() || !open} title="Send">
            <UIIcons.Send />
          </button>
        </form>
      </div>
    </aside>
  );
}

export default SidebarChatAssistant;

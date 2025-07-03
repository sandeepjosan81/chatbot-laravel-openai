import React, { useState } from 'react';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;

    setMessages([...messages, { sender: 'You', text: message }]);

    const res = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken, // ✅ Correct placement
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { sender: 'Bot', text: data.reply }]);
    setMessage('');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chat with AI</h1>
      <div className="bg-gray-100 p-4 rounded mb-4" style={{ minHeight: 200 }}>
        {messages.map((m, i) => (
          <p key={i}><strong>{m.sender}:</strong> {m.text}</p>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          className="flex-1 border px-2 py-1 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Send</button>
      </form>
    </div>
  );
}

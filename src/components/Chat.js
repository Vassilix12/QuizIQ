// Chat.js

import React, { useState, useEffect } from 'react';
import { database, ref, onValue, push } from '../firebase';

export default function Chat({ username }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const chatRef = ref(database, 'chat');
    const unsubscribe = onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = data ? Object.values(data) : [];
      setMessages(loadedMessages);
    });

    return () => unsubscribe();
  }, []);

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      const chatRef = ref(database, 'chat');
      push(chatRef, {
        username,
        text: newMessage,
        timestamp: Date.now()
      });
      setNewMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem', backgroundColor: '#222', borderRadius: '12px', color: '#fff' }}>
      <h3 style={{ marginBottom: '1rem' }}>💬 Chat</h3>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '0.5rem' }}>
            <strong>{msg.username}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ width: '70%', padding: '0.5rem', borderRadius: '8px', border: 'none' }}
      />
      <button onClick={handleSend} style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem', borderRadius: '8px', backgroundColor: '#4caf50', color: '#fff', border: 'none' }}>
        Send
      </button>
    </div>
  );
}

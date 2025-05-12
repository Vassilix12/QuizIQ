// App.js

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import questionsData from './data/questions_full_10_topics.js';
import shuffle from './utils/shuffle.js';
import { createRoom, joinRoom } from './multiplayer';

export default function App() {
  const [username, setUsername] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('flags');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [timer, setTimer] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const correctSound = useRef(new Audio('/sounds/correct.mp3'));
  const wrongSound = useRef(new Audio('/sounds/wrong.mp3'));
  const clickSound = useRef(new Audio('/sounds/click.mp3'));
  const countdownSound = useRef(new Audio('/sounds/countdown.mp3'));

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (!roomCode || !username) return;

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`https://questiq-1d492-default-rtdb.firebaseio.com/rooms/${roomCode}/started.json`);
        const started = await response.json();
        if (started === true) {
          const questionRes = await fetch(`https://questiq-1d492-default-rtdb.firebaseio.com/rooms/${roomCode}/questions.json`);
          const questionData = await questionRes.json();
          if (Array.isArray(questionData)) {
            setQuestions(questionData);
            setCurrentQuestion(0);
            setScore(0);
            setShowResult(false);
            setSelectedAnswer(null);
            setFeedback('');
            setTimer(10);
            setGameStarted(true);
            clearInterval(interval);
          }
        }
      } catch (err) {
        console.error('Polling error:', err);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [roomCode, username]);

  const handleCreateRoom = async () => {
    if (!username) return setError('Please enter a username');
    setLoading(true);
    setError('');
    try {
      const code = await createRoom(username, category);
      setRoomCode(code);
      alert(`Room created! Share code: ${code}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinRoom = async () => {
    if (!username || !roomCode) return setError('Enter both username and room code');
    setLoading(true);
    setError('');
    try {
      const room = await joinRoom(roomCode, username);
      alert(`Joined room: ${roomCode}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (opt) => {
    if (selectedAnswer) return;
    setSelectedAnswer(opt);
    const isCorrect = opt === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      correctSound.current.play();
    } else {
      wrongSound.current.play();
    }
    setFeedback(isCorrect ? '✅ Correct!' : '❌ Wrong!');
    setTimeout(() => goToNext(), 1500);
  };

  const restart = () => {
    const catData = questionsData[category] || [];
    const sliced = shuffle(catData).slice(0, 10).map(q => ({ ...q, options: shuffle(q.options) }));
    setQuestions(sliced);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setFeedback('');
    setTimer(10);
    setGameStarted(true);
  };

  const goToNext = () => {
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
      setSelectedAnswer(null);
      setFeedback('');
      setTimer(10);
    } else {
      setShowResult(true);
    }
  };

  if (!gameStarted) {
    return (
      <div style={{ background: darkMode ? '#121212' : '#f0f0f0', minHeight: '100vh', color: darkMode ? '#fff' : '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>🧠 QuizIQ</h1>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '1rem', borderRadius: '12px', fontSize: '1.2rem' }}>
          <option value="flags">🏁 Flags</option>
          <option value="logos">🧢 Logos</option>
          <option value="science">🔬 Science</option>
          <option value="movies">🎬 Movies</option>
          <option value="capitals">🏛 Capitals</option>
          <option value="countries">🌍 Countries</option>
          <option value="sports">🏀 Sports</option>
          <option value="history">📜 History</option>
          <option value="music">🎵 Music</option>
          <option value="geography">🗺 Geography</option>
        </select>
        {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button onClick={restart} style={{ padding: '1rem 2rem', fontSize: '1.3rem', borderRadius: '12px', backgroundColor: '#1e88e5', color: '#fff', border: 'none' }}>🎮 Singleplayer</button>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button onClick={handleCreateRoom} style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem', backgroundColor: '#388e3c', color: '#fff', border: 'none', borderRadius: '10px' }}>➕ Create Room</button>
            <button onClick={handleJoinRoom} style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem', backgroundColor: '#009688', color: '#fff', border: 'none', borderRadius: '10px' }}>🔑 Join Room</button>
          </div>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" style={{ marginTop: '1rem', padding: '0.8rem', borderRadius: '8px', width: '250px', fontSize: '1rem' }} />
          <input type="text" value={roomCode} onChange={(e) => setRoomCode(e.target.value)} placeholder="Enter room code" style={{ marginTop: '0.5rem', padding: '0.8rem', borderRadius: '8px', width: '250px', fontSize: '1rem' }} />
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div style={{ background: darkMode ? '#121212' : '#f0f0f0', color: darkMode ? '#fff' : '#000', minHeight: '100vh', padding: '2rem', textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '1rem' }}>
        <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌞 Light' : '🌙 Dark'}</button>
        <button onClick={() => setSoundMuted((prev) => !prev)}>{soundMuted ? '🔇 Mute' : '🔊 Sound'}</button>
        <button onClick={() => setGameStarted(false)}>🏠 Home</button>
      </div>
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '1.8rem', fontWeight: 'bold' }}>
        ⏱ {timer}s
      </div>
      <h2 style={{ marginTop: '3rem' }}>{currentQ?.question}</h2>
      {currentQ?.image && (
        <div style={{ background: darkMode ? '#333' : '#eee', padding: '12px', borderRadius: '12px', marginBottom: '1rem', display: 'inline-block' }}>
          <img
            src={currentQ.image}
            alt="question visual"
            style={{ width: '240px', height: 'auto', borderRadius: '8px', objectFit: 'contain', backgroundColor: '#fff' }}
          />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        {currentQ?.options?.map((opt) => (
          <button
            key={opt}
            disabled={!!selectedAnswer}
            onClick={() => handleAnswer(opt)}
            style={{
              padding: '1.4rem',
              fontSize: '1.6rem',
              backgroundColor:
                selectedAnswer && opt === currentQ.answer
                  ? '#00c851'
                  : selectedAnswer === opt
                  ? '#ff4444'
                  : '#1e88e5',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              cursor: 'pointer'
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback && <p style={{ marginTop: '1.5rem', fontWeight: 'bold', fontSize: '1.4rem' }}>{feedback}</p>}
      {showResult && (
        <div style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem' }}>🏁 Final Score: {score} / {questions.length}</h2>
          <button onClick={restart} style={{ marginTop: '1.5rem', padding: '1rem 2.5rem', fontSize: '1.3rem' }}>🔁 Play Again</button>
          <button onClick={() => setGameStarted(false)} style={{ marginTop: '1.5rem', padding: '1rem 2.5rem', fontSize: '1.3rem' }}>🏠 Back to Menu</button>
        </div>
      )}
    </div>
  );
}
// syncGame.js
import { ref, onValue, set, update } from 'firebase/database';
import { database } from './firebase'; // your initialized Firebase db

// Sync current question index
export const syncCurrentQuestion = (roomCode, questionIndex) => {
  return set(ref(database, `rooms/${roomCode}/currentQuestion`), questionIndex);
};

// Listen for current question updates
export const onQuestionUpdate = (roomCode, callback) => {
  const questionRef = ref(database, `rooms/${roomCode}/currentQuestion`);
  onValue(questionRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    }
  });
};

// Sync player answer
export const submitAnswer = (roomCode, username, answer) => {
  return set(ref(database, `rooms/${roomCode}/answers/${username}`), answer);
};

// Listen for all answers (optional for host to track)
export const onAnswersUpdate = (roomCode, callback) => {
  const answersRef = ref(database, `rooms/${roomCode}/answers`);
  onValue(answersRef, (snapshot) => {
    callback(snapshot.val() || {});
  });
};

// Reset answers between rounds
export const resetAnswers = (roomCode) => {
  return set(ref(database, `rooms/${roomCode}/answers`), {});
};

// multiplayer.js

import { database, ref, set, get, child, generateRoomCode } from './firebase';
import questionsData from './data/questions_full_10_topics';
import shuffle from './utils/shuffle';

export async function createRoom(username, category) {
  const roomCode = generateRoomCode();
  const roomRef = ref(database, `rooms/${roomCode}`);

  const questions = shuffle(questionsData[category] || []).slice(0, 10);

  await set(roomRef, {
    category,
    started: false,
    questions,
    players: {
      [username]: {
        score: 0,
        joinedAt: Date.now()
      }
    }
  });

  return roomCode;
}

export async function joinRoom(roomCode, username) {
  const roomSnapshot = await get(child(ref(database), `rooms/${roomCode}`));
  if (!roomSnapshot.exists()) throw new Error('Room does not exist');

  const roomData = roomSnapshot.val();
  if (roomData.players && Object.keys(roomData.players).includes(username)) {
    throw new Error('Username already taken in this room');
  }

  const playerRef = ref(database, `rooms/${roomCode}/players/${username}`);
  await set(playerRef, {
    score: 0,
    joinedAt: Date.now()
  });

  const playerCount = Object.keys(roomData.players || {}).length + 1;
  if (playerCount >= 2) {
    await set(ref(database, `rooms/${roomCode}/started`), true);
  }

  return roomData;
}

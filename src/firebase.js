// firebase.js

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, push, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD0RsuGVqzdai2j01xeu7wxaIA0vMUcvME",
  authDomain: "questiq-1d492.firebaseapp.com",
  databaseURL: "https://questiq-1d492-default-rtdb.firebaseio.com",
  projectId: "questiq-1d492",
  storageBucket: "questiq-1d492.appspot.com",
  messagingSenderId: "1073616197680",
  appId: "1:1073616197680:web:0b3e8455d0113d0ffe35f5",
  measurementId: "G-NLJQECZ3GV"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue, push, get, child };

export function generateRoomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length: 5 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

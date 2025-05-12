// src/CategorySelection.js
import React from 'react';
import { Button } from './components/ui/button';

export default function CategorySelection({ onSelect }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#121212',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem' }}>Choose Your Quiz Category</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Button style={{ fontSize: '1.2rem' }} onClick={() => onSelect('flags')}>🌐 Flags</Button>
        <Button style={{ fontSize: '1.2rem' }} onClick={() => onSelect('capitals')}>🏙 Capitals</Button>
        <Button style={{ fontSize: '1.2rem' }} onClick={() => onSelect('countries')}>🌍 Countries</Button>
      </div>
    </div>
  );
}

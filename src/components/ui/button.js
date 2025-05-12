export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        margin: '0.25rem'
      }}
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div style={{ 
      textAlign: 'center', 
      fontFamily: 'sans-serif', 
      background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#111' }}>
        Etcetera Etc.
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem', color: '#444' }}>
        Because one etcetera wasn’t enough 😉 <br />
        Discover trending, clever, and everyday finds all in one witty shop.
      </p>
      <a 
        href="#shop"
        style={{
          padding: '0.75rem 2rem',
          fontSize: '1.1rem',
          color: '#fff',
          backgroundColor: '#111',
          borderRadius: '50px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#444'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#111'}
      >
        Shop Now
      </a>
    </div>
  )
}


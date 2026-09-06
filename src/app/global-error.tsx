'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#050706',
          color: '#f4f7f5',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center', padding: 24 }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>Something went wrong</h1>
          <p style={{ color: '#9aa69f', marginBottom: 24 }}>
            Please try again. If the problem continues, contact me.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              background: '#22c55e',
              color: '#050706',
              border: 0,
              borderRadius: 999,
              padding: '12px 20px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
